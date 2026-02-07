import { useState, useEffect } from 'react';
import { Heart } from 'lucide-react';
import Sparkles from './Sparkles';

interface OpeningScreenProps {
  onOpen: () => void;
}

const OpeningScreen = ({ onOpen }: OpeningScreenProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen gradient-romantic flex flex-col items-center justify-center p-6 relative overflow-hidden">
      <Sparkles count={20} />
      
      <div className={`text-center relative z-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        {/* Decorative roses */}
        <div className="flex justify-center gap-2 mb-6">
          {[...Array(3)].map((_, i) => (
            <span key={i} className="text-4xl float" style={{ animationDelay: `${i * 0.3}s` }}>
              🌹
            </span>
          ))}
        </div>

        {/* Main title */}
        <h1 className="font-cursive text-5xl md:text-7xl text-rose-dark mb-4 drop-shadow-lg">
          For My Forever, Nikki
        </h1>
        
        <div className="flex items-center justify-center gap-2 mb-8">
          <Heart className="text-primary fill-primary animate-pulse" size={24} />
          <span className="font-cursive text-2xl text-rose-deep">💖</span>
          <Heart className="text-primary fill-primary animate-pulse" size={24} />
        </div>

        {/* Subtitle */}
        <p className="font-elegant text-xl md:text-2xl text-rose-deep italic mb-12 max-w-md mx-auto">
          "Every rose reminds me of you…"
        </p>

        {/* Open button */}
        <button
          onClick={onOpen}
          className="group relative px-10 py-4 rounded-full gradient-rose-gold text-primary-foreground font-elegant text-xl
                     shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 pulse-glow"
        >
          <span className="relative z-10 flex items-center gap-3">
            <span>Open My Letter</span>
            <span className="text-2xl group-hover:animate-bounce">💌</span>
          </span>
        </button>

        {/* App name */}
        <p className="mt-16 font-cursive text-lg text-rose-medium">
          For Nikki – My Rose 🌹❤️
        </p>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-4 opacity-60">
        {[...Array(5)].map((_, i) => (
          <Heart 
            key={i} 
            className="text-rose-medium fill-rose-medium float" 
            size={16}
            style={{ animationDelay: `${i * 0.2}s` }}
          />
        ))}
      </div>
    </div>
  );
};

export default OpeningScreen;
