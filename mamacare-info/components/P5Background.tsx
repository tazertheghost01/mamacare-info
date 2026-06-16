"use client";
import { useEffect, useRef } from "react";
import { useTheme } from "./ThemeProvider";

export default function P5Background() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sketchRef = useRef<unknown>(null);
  const { theme } = useTheme();

  useEffect(() => {
    let p5Instance: { remove: () => void } | null = null;

    const initP5 = async () => {
      const p5Module = await import("p5");
      const p5 = p5Module.default;

      if (sketchRef.current) {
        (sketchRef.current as { remove: () => void }).remove();
      }

      const isDark = theme === "dark";

      const sketch = (p: InstanceType<typeof p5>) => {
        const particles: Particle[] = [];
        const NUM = 90;
        const PULSE_NODES: { x: number; y: number; r: number; phase: number }[] = [];

        class Particle {
          x: number; y: number; vx: number; vy: number;
          size: number; alpha: number; alphaDir: number; color: number[];

          constructor() {
            this.x = p.random(p.width);
            this.y = p.random(p.height);
            this.vx = p.random(-0.4, 0.4);
            this.vy = p.random(-0.4, 0.4);
            this.size = p.random(1.5, 4);
            this.alpha = p.random(80, 200);
            this.alphaDir = p.random(-1, 1);
            this.color = p.random() > 0.6
              ? [22, 163, 74]  // green
              : isDark ? [255, 255, 255] : [10, 10, 10];
          }

          update() {
            this.x += this.vx;
            this.y += this.vy;
            this.alpha += this.alphaDir * 0.8;
            if (this.alpha > 210 || this.alpha < 30) this.alphaDir *= -1;
            if (this.x < 0) this.x = p.width;
            if (this.x > p.width) this.x = 0;
            if (this.y < 0) this.y = p.height;
            if (this.y > p.height) this.y = 0;
          }

          draw() {
            p.noStroke();
            p.fill(this.color[0], this.color[1], this.color[2], this.alpha);
            p.ellipse(this.x, this.y, this.size);
          }
        }

        p.setup = () => {
          const canvas = p.createCanvas(
            containerRef.current!.offsetWidth,
            containerRef.current!.offsetHeight
          );
          canvas.parent(containerRef.current!);
          canvas.style("position", "absolute");
          canvas.style("top", "0");
          canvas.style("left", "0");
          p.colorMode(p.RGB);

          for (let i = 0; i < NUM; i++) particles.push(new Particle());

          for (let i = 0; i < 5; i++) {
            PULSE_NODES.push({
              x: p.random(p.width * 0.2, p.width * 0.8),
              y: p.random(p.height * 0.2, p.height * 0.8),
              r: 0,
              phase: p.random(0, p.TWO_PI),
            });
          }
        };

        p.draw = () => {
          p.clear();

          // Draw connections between nearby particles
          for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
              const d = p.dist(particles[i].x, particles[i].y, particles[j].x, particles[j].y);
              if (d < 110) {
                const alpha = p.map(d, 0, 110, 80, 0);
                p.stroke(22, 163, 74, alpha * 0.5);
                p.strokeWeight(0.6);
                p.line(particles[i].x, particles[i].y, particles[j].x, particles[j].y);
              }
            }
          }

          // Pulse rings
          for (const node of PULSE_NODES) {
            node.r = (node.r + 0.5) % 200;
            const a = p.map(node.r, 0, 200, 60, 0);
            p.noFill();
            p.stroke(22, 163, 74, a);
            p.strokeWeight(1);
            p.ellipse(node.x, node.y, node.r * 2);
          }

          // Particles
          p.noStroke();
          for (const pt of particles) {
            pt.update();
            pt.draw();
          }
        };

        p.windowResized = () => {
          if (containerRef.current) {
            p.resizeCanvas(containerRef.current.offsetWidth, containerRef.current.offsetHeight);
          }
        };
      };

      p5Instance = new p5(sketch) as { remove: () => void };
      sketchRef.current = p5Instance;
    };

    initP5();
    return () => {
      if (sketchRef.current) {
        (sketchRef.current as { remove: () => void }).remove();
      }
    };
  }, [theme]);

  return (
    <div
      ref={containerRef}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 0,
        overflow: "hidden",
      }}
    />
  );
}
