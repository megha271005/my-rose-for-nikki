import { useEffect, useState } from 'react';

interface Petal {
  id: number;
  left: number;
  delay: number;
  duration: number;
  size: number;
  opacity: number;
}

const FallingPetals = () => {
  const [petals, setPetals] = useState<Petal[]>([]);

  useEffect(() => {
    const createPetals = () => {
      const newPetals: Petal[] = [];
      for (let i = 0; i < 20; i++) {
        newPetals.push({
          id: i,
          left: Math.random() * 100,
          delay: Math.random() * 10,
          duration: 8 + Math.random() * 8,
          size: 15 + Math.random() * 20,
          opacity: 0.4 + Math.random() * 0.4,
        });
      }
      setPetals(newPetals);
    };

    createPetals();
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-10">
      {petals.map((petal) => (
        <div
          key={petal.id}
          className="absolute animate-petal-fall"
          style={{
            left: `${petal.left}%`,
            animationDelay: `${petal.delay}s`,
            animationDuration: `${petal.duration}s`,
            opacity: petal.opacity,
          }}
        >
          <svg
            width={petal.size}
            height={petal.size}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 2C8.5 2 6 6 6 10C6 14 8.5 18 12 22C15.5 18 18 14 18 10C18 6 15.5 2 12 2Z"
              fill="hsl(350, 70%, 65%)"
              className="drop-shadow-sm"
            />
          </svg>
        </div>
      ))}
    </div>
  );
};

export default FallingPetals;
