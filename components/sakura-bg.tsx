"use client";
import { useEffect, useState } from "react";

type Petal = {
  id: number;
  left: string;
  duration: string;
  delay: string;
  size: string;
  drift: string;
};

export function SakuraBg() {
  const [petals, setPetals] = useState<Petal[]>([]);

  useEffect(() => {
    const newPetals: Petal[] = Array.from({ length: 28 }, (_, i) => ({
      id: i,
      left: `${(i * 3.7 + 1.5) % 100}%`,
      duration: `${6 + (i * 1.37) % 9}s`,
      delay: `${(i * 0.83) % 15}s`,
      size: `${8 + (i * 1.3) % 10}px`,
      drift: `${-70 + (i * 11) % 140}px`,
    }));
    setPetals(newPetals);
  }, []);

  return (
    <div className="sakura-layer" aria-hidden="true">
      {petals.map((p) => (
        <div
          key={p.id}
          className="sakura-petal"
          style={{
            left: p.left,
            animationDuration: p.duration,
            animationDelay: p.delay,
            width: p.size,
            height: p.size,
            ['--drift']: p.drift,
          } as React.CSSProperties}
        />
      ))}
    </div>
  );
}
