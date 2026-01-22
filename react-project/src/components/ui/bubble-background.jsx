"use client";

import React, { useRef, useEffect, useState } from 'react';

export function BubbleBackground({ 
  children, 
  interactive = true,
  bubbleColor = 'rgba(233, 208, 144, 0.15)',
  bubbleCount,
  className = ''
}) {
  const canvasRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const mousePos = useRef({ x: 0, y: 0 });
  const bubblesRef = useRef([]);
  const animationFrameRef = useRef(null);
  const lastTimeRef = useRef(0);

  // Bubble class
  class Bubble {
    constructor(width, height) {
      this.width = width;
      this.height = height;
      this.reset();
    }

    reset() {
      this.x = Math.random() * this.width;
      this.y = this.height + Math.random() * 100;
      this.radius = Math.random() * 3 + 1;
      this.speedY = Math.random() * 0.5 + 0.3;
      this.speedX = (Math.random() - 0.5) * 0.3;
      this.opacity = Math.random() * 0.15 + 0.05;
      this.wobble = Math.random() * 0.02;
      this.wobbleSpeed = Math.random() * 0.02 + 0.01;
      this.wobbleOffset = Math.random() * Math.PI * 2;
    }

    update(deltaTime, mouseX, mouseY, isInteractive) {
      // Upward drift
      this.y -= this.speedY * deltaTime * 0.06;
      
      // Horizontal wobble
      this.wobbleOffset += this.wobbleSpeed * deltaTime * 0.001;
      this.x += Math.sin(this.wobbleOffset) * this.wobble * deltaTime * 0.06;

      // Mouse interaction
      if (isInteractive) {
        const dx = this.x - mouseX;
        const dy = this.y - mouseY;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const minDistance = 120;

        if (distance < minDistance) {
          const force = (minDistance - distance) / minDistance;
          this.x += (dx / distance) * force * 0.5;
          this.y += (dy / distance) * force * 0.5;
        }
      }

      // Reset if bubble goes off screen
      if (this.y < -20 || this.x < -20 || this.x > this.width + 20) {
        this.reset();
      }
    }

    draw(ctx, color) {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = color.replace('0.15', this.opacity.toString());
      ctx.fill();
    }
  }

  // Initialize bubbles
  useEffect(() => {
    if (!dimensions.width || !dimensions.height) return;

    const count = bubbleCount || Math.floor((dimensions.width * dimensions.height) / 8000);
    bubblesRef.current = Array.from(
      { length: count }, 
      () => new Bubble(dimensions.width, dimensions.height)
    );
  }, [dimensions, bubbleCount]);

  // Handle canvas resize
  useEffect(() => {
    const updateDimensions = () => {
      if (canvasRef.current?.parentElement) {
        const parent = canvasRef.current.parentElement;
        setDimensions({
          width: parent.offsetWidth,
          height: parent.offsetHeight
        });
      }
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  // Mouse tracking
  useEffect(() => {
    if (!interactive || !canvasRef.current) return;

    const handleMouseMove = (e) => {
      const rect = canvasRef.current.getBoundingClientRect();
      mousePos.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      };
    };

    canvasRef.current.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      canvasRef.current?.removeEventListener('mousemove', handleMouseMove);
    };
  }, [interactive]);

  // Animation loop
  useEffect(() => {
    if (!canvasRef.current || !dimensions.width) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const animate = (currentTime) => {
      const deltaTime = currentTime - lastTimeRef.current;
      lastTimeRef.current = currentTime;

      ctx.clearRect(0, 0, dimensions.width, dimensions.height);

      bubblesRef.current.forEach(bubble => {
        if (!prefersReducedMotion) {
          bubble.update(
            deltaTime, 
            mousePos.current.x, 
            mousePos.current.y, 
            interactive
          );
        }
        bubble.draw(ctx, bubbleColor);
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [dimensions, interactive, bubbleColor]);

  return (
    <div className={`relative ${className}`}>
      <canvas
        ref={canvasRef}
        width={dimensions.width}
        height={dimensions.height}
        className="absolute inset-0 pointer-events-none"
        style={{ width: dimensions.width, height: dimensions.height }}
      />
      {children}
    </div>
  );
}
