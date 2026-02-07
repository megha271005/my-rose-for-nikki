import { useState, useEffect } from 'react';
import { Heart } from 'lucide-react';

interface FloatingHeart {
  id: number;
  x: number;
  y: number;
}

const FloatingHearts = () => {
  const [hearts, setHearts] = useState<FloatingHeart[]>([]);

  useEffect(() => {
    const handleClick = (e: MouseEvent | TouchEvent) => {
      const x = 'touches' in e ? e.touches[0].clientX : e.clientX;
      const y = 'touches' in e ? e.touches[0].clientY : e.clientY;
      
      const newHeart: FloatingHeart = {
        id: Date.now() + Math.random(),
        x,
        y,
      };

      setHearts((prev) => [...prev, newHeart]);

      setTimeout(() => {
        setHearts((prev) => prev.filter((h) => h.id !== newHeart.id));
      }, 1500);
    };

    window.addEventListener('click', handleClick);
    window.addEventListener('touchstart', handleClick);

    return () => {
      window.removeEventListener('click', handleClick);
      window.removeEventListener('touchstart', handleClick);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="absolute animate-heart-float"
          style={{
            left: heart.x - 12,
            top: heart.y - 12,
          }}
        >
          <Heart
            size={24}
            className="text-primary fill-primary drop-shadow-lg"
          />
        </div>
      ))}
    </div>
  );
};

export default FloatingHearts;
