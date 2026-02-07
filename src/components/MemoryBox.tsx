import { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Heart } from 'lucide-react';

const quotes = [
  { text: "You are my today and all of my tomorrows.", emoji: "💖" },
  { text: "In you, I found my missing piece.", emoji: "🧩" },
  { text: "Every love story is beautiful, but ours is my favorite.", emoji: "📖" },
  { text: "You make my heart smile.", emoji: "😊" },
  { text: "I love you more than yesterday, but less than tomorrow.", emoji: "💕" },
];

const MemoryBox = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentQuote, setCurrentQuote] = useState(0);

  const nextQuote = () => {
    setCurrentQuote((prev) => (prev + 1) % quotes.length);
  };

  const prevQuote = () => {
    setCurrentQuote((prev) => (prev - 1 + quotes.length) % quotes.length);
  };

  return (
    <>
      <section className="py-12 px-4 text-center">
        <button
          onClick={() => setIsOpen(true)}
          className="px-10 py-4 rounded-full bg-rose-dark text-primary-foreground 
                     font-cursive text-xl shadow-lg hover:shadow-xl transition-all duration-300 
                     hover:scale-105 hover:bg-rose-deep"
        >
          <span className="flex items-center gap-3">
            <span>Open Our Memory Box</span>
            <span className="text-2xl">📖</span>
          </span>
        </button>
      </section>

      {/* Memory Box Modal */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-rose-dark/70 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        >
          <div 
            className="relative bg-gradient-to-br from-cream to-blush rounded-3xl p-8 md:p-12 max-w-lg w-full shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/80 flex items-center justify-center
                        hover:bg-white transition-colors shadow-md"
            >
              <X size={20} className="text-rose-dark" />
            </button>

            <h3 className="font-cursive text-4xl text-rose-deep text-center mb-8">
              Our Memory Box 💝
            </h3>

            {/* Photo placeholder */}
            <div className="aspect-square max-w-xs mx-auto rounded-2xl bg-gradient-to-br from-rose-light to-rose-medium
                           flex flex-col items-center justify-center mb-8 shadow-lg border-4 border-white/50">
              <Heart className="text-white fill-white/50 mb-4" size={48} />
              <p className="font-elegant text-white text-lg">Your Photo Here</p>
              <p className="font-elegant text-white/70 text-sm mt-1">Add your favorite memory</p>
            </div>

            {/* Quote slideshow */}
            <div className="relative bg-white/60 rounded-2xl p-6 shadow-inner">
              <div className="text-center min-h-[100px] flex flex-col items-center justify-center">
                <span className="text-4xl mb-3">{quotes[currentQuote].emoji}</span>
                <p className="font-elegant text-xl text-rose-dark italic">
                  "{quotes[currentQuote].text}"
                </p>
              </div>

              {/* Navigation */}
              <div className="flex justify-between items-center mt-4">
                <button
                  onClick={prevQuote}
                  className="w-10 h-10 rounded-full bg-rose-light flex items-center justify-center
                           hover:bg-rose-medium transition-colors"
                >
                  <ChevronLeft size={20} className="text-rose-dark" />
                </button>
                
                <div className="flex gap-1">
                  {quotes.map((_, index) => (
                    <div
                      key={index}
                      className={`w-2 h-2 rounded-full transition-all ${
                        index === currentQuote ? 'bg-primary w-4' : 'bg-rose-medium/50'
                      }`}
                    />
                  ))}
                </div>

                <button
                  onClick={nextQuote}
                  className="w-10 h-10 rounded-full bg-rose-light flex items-center justify-center
                           hover:bg-rose-medium transition-colors"
                >
                  <ChevronRight size={20} className="text-rose-dark" />
                </button>
              </div>
            </div>

            {/* Footer */}
            <p className="text-center font-cursive text-lg text-rose-deep mt-6">
              Every moment with you is a treasure 💖
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default MemoryBox;
