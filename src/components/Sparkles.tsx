import { useEffect, useState } from 'react';

interface Sparkle {
  id: number;
  top: number;
  left: number;
  size: number;
  delay: number;
}

const Sparkles = ({ count = 15 }: { count?: number }) => {
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);

  useEffect(() => {
    const newSparkles: Sparkle[] = [];
    for (let i = 0; i < count; i++) {
      newSparkles.push({
        id: i,
        top: Math.random() * 100,
        left: Math.random() * 100,
        size: 4 + Math.random() * 8,
        delay: Math.random() * 2,
      });
    }
    setSparkles(newSparkles);
  }, [count]);

  return (
    <>
      {sparkles.map((sparkle) => (
        <div
          key={sparkle.id}
          className="absolute sparkle pointer-events-none"
          style={{
            top: `${sparkle.top}%`,
            left: `${sparkle.left}%`,
            animationDelay: `${sparkle.delay}s`,
          }}
        >
          <svg
            width={sparkle.size}
            height={sparkle.size}
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M12 0L14 10L24 12L14 14L12 24L10 14L0 12L10 10L12 0Z"
              fill="hsl(30, 50%, 70%)"
            />
          </svg>
        </div>
      ))}
    </>
  );
};

export default Sparkles;
