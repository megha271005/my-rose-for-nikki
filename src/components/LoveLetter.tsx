import { useEffect, useState } from 'react';
import Sparkles from './Sparkles';

const LoveLetter = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const letterContent = `My love❤️,

On this beautiful Rose Day, I just want to remind you how special you are to me. Just like a rose spreads its fragrance everywhere, you fill my life with love, happiness, and warmth.

From the day you entered my life, everything changed for the better. You became my smile on difficult days, my strength when I feel weak, and my happiness in every little moment. With you, even ordinary days feel magical.

You understand me in ways no one else does. You support me, care for me, and love me so purely. I'm truly lucky to have someone like you by my side. You are not just my boyfriend, you are my best friend, my comfort, and my safe place.

This rose is not just a flower, it's a symbol of my love for you—deep, true, and forever. No matter what happens, I promise to always stand with you, love you, and cherish you.

Thank you for being my everything. I love you more than words can ever express.

Happy Rose Day, my sweetheart 🌹❤️

Forever yours💕`;

  return (
    <section className="py-16 px-4 relative">
      <div className={`max-w-2xl mx-auto transition-all duration-1000 ${isVisible ? 'animate-letter-reveal' : 'opacity-0'}`}>
        {/* Letter card */}
        <div className="paper-texture rounded-3xl p-8 md:p-12 relative overflow-hidden">
          <Sparkles count={12} />
          
          {/* Decorative corner */}
          <div className="absolute top-4 left-4 text-3xl">🌹</div>
          <div className="absolute top-4 right-4 text-3xl">🌹</div>
          
          {/* Glowing border effect */}
          <div className="absolute inset-0 rounded-3xl border-2 border-rose-medium/30 pointer-events-none" />
          <div className="absolute inset-2 rounded-2xl border border-rose-gold/20 pointer-events-none" />
          
          {/* Shimmer effect */}
          <div className="absolute inset-0 animate-shimmer rounded-3xl pointer-events-none" />

          {/* Letter content */}
          <div className="relative z-10">
            <h2 className="font-cursive text-4xl md:text-5xl text-rose-deep text-center mb-8">
              A Letter For You
            </h2>
            
            <div className="font-cursive text-xl md:text-2xl text-card-foreground leading-relaxed whitespace-pre-line">
              {letterContent}
            </div>

            {/* Signature area */}
            <div className="mt-8 text-right">
              <p className="font-cursive text-2xl text-rose-deep">
                With all my love,
              </p>
              <p className="font-cursive text-3xl text-primary mt-2">
                Your Kannamma 💖
              </p>
            </div>
          </div>

          {/* Bottom decoration */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            <span className="text-xl">💕</span>
            <span className="text-xl">🌹</span>
            <span className="text-xl">💕</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoveLetter;
