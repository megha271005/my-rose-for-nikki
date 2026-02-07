import { Heart } from 'lucide-react';

const Footer = () => {
  const currentDate = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <footer className="py-12 px-4 text-center bg-gradient-to-t from-rose-medium/30 to-transparent">
      <div className="max-w-md mx-auto">
        {/* Decorative roses */}
        <div className="flex justify-center gap-3 mb-6">
          <span className="text-2xl">🌹</span>
          <Heart className="text-primary fill-primary" size={24} />
          <span className="text-2xl">🌹</span>
        </div>

        {/* Made with love */}
        <p className="font-cursive text-2xl text-rose-deep mb-2">
          Made with Love by your kannamma 💖
        </p>

        {/* Date */}
        <p className="font-elegant text-lg text-muted-foreground italic mb-6">
          {currentDate}
        </p>

        {/* Rose Day badge */}
        <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-rose-light/50 border border-rose-medium/30">
          <span className="text-xl">🌹</span>
          <span className="font-elegant text-sm text-rose-dark">Happy Rose Day 2026</span>
          <span className="text-xl">🌹</span>
        </div>

        {/* Final message */}
        <p className="mt-8 font-cursive text-xl text-rose-deep">
          Forever & Always, My Love ❤️
        </p>
      </div>
    </footer>
  );
};

export default Footer;
