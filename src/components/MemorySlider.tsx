import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Memory {
  id: number;
  caption: string;
  emoji: string;
  color: string;
}

const memories: Memory[] = [
  { id: 1, caption: "Our First Call", emoji: "💖", color: "from-rose-light to-rose-medium" },
  { id: 2, caption: "Our Best Laugh", emoji: "😂", color: "from-petal to-rose-light" },
  { id: 3, caption: "My Favorite Day With You", emoji: "✨", color: "from-rose-medium to-rose-deep" },
  { id: 4, caption: "Our Cute Fight", emoji: "😅", color: "from-blush to-petal" },
  { id: 5, caption: "Our Strongest Moment", emoji: "💪❤️", color: "from-rose-deep to-primary" },
];

const MemorySlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % memories.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + memories.length) % memories.length);
  };

  return (
    <section className="py-16 px-4">
      <h2 className="font-cursive text-4xl md:text-5xl text-rose-dark text-center mb-12">
        Our Precious Memories 💕
      </h2>

      {/* Mobile horizontal scroll */}
      <div className="md:hidden overflow-x-auto pb-4 -mx-4 px-4">
        <div className="flex gap-4" style={{ width: `${memories.length * 280}px` }}>
          {memories.map((memory) => (
            <div
              key={memory.id}
              className={`w-64 h-72 rounded-2xl bg-gradient-to-br ${memory.color} 
                         flex flex-col items-center justify-center p-6 shadow-lg
                         border-2 border-white/30 flex-shrink-0`}
            >
              <div className="w-32 h-32 rounded-full bg-white/30 flex items-center justify-center mb-4 backdrop-blur-sm">
                <span className="text-5xl">{memory.emoji}</span>
              </div>
              <p className="font-cursive text-xl text-white text-center drop-shadow-md">
                {memory.caption}
              </p>
              <p className="font-elegant text-sm text-white/80 mt-2 italic">
                Add your photo here
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Desktop slider */}
      <div className="hidden md:block relative max-w-4xl mx-auto">
        <div className="overflow-hidden rounded-3xl">
          <div 
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {memories.map((memory) => (
              <div
                key={memory.id}
                className={`w-full flex-shrink-0 h-96 bg-gradient-to-br ${memory.color}
                           flex flex-col items-center justify-center p-8`}
              >
                <div className="w-40 h-40 rounded-full bg-white/30 flex items-center justify-center mb-6 backdrop-blur-sm
                               border-4 border-white/40 shadow-xl">
                  <span className="text-7xl">{memory.emoji}</span>
                </div>
                <p className="font-cursive text-3xl text-white text-center drop-shadow-lg">
                  {memory.caption}
                </p>
                <p className="font-elegant text-lg text-white/80 mt-3 italic">
                  Add your photo here
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full
                     bg-white/80 shadow-lg flex items-center justify-center
                     hover:bg-white transition-colors"
        >
          <ChevronLeft className="text-rose-deep" size={24} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full
                     bg-white/80 shadow-lg flex items-center justify-center
                     hover:bg-white transition-colors"
        >
          <ChevronRight className="text-rose-deep" size={24} />
        </button>

        {/* Dots indicator */}
        <div className="flex justify-center gap-2 mt-6">
          {memories.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-primary w-8' 
                  : 'bg-rose-medium/50 hover:bg-rose-medium'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MemorySlider;
