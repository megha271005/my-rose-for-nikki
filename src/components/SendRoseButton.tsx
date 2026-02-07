import { useState } from 'react';
import { Heart, X } from 'lucide-react';

const SendRoseButton = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleSendRose = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setShowPopup(true);
      setIsAnimating(false);
    }, 1000);
  };

  return (
    <>
      <section className="py-12 px-4 text-center">
        <button
          onClick={handleSendRose}
          disabled={isAnimating}
          className={`relative px-12 py-5 rounded-full gradient-rose-gold text-primary-foreground 
                     font-cursive text-2xl shadow-xl hover:shadow-2xl transition-all duration-300 
                     hover:scale-105 disabled:opacity-70 ${isAnimating ? 'animate-pulse' : ''}`}
        >
          <span className="flex items-center gap-3">
            {isAnimating ? (
              <>
                <span className="animate-spin">🌹</span>
                <span>Sending Love...</span>
              </>
            ) : (
              <>
                <span>Send Rose to Nikki</span>
                <span className="text-3xl">🌹</span>
              </>
            )}
          </span>
        </button>
      </section>

      {/* Popup Modal */}
      {showPopup && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-rose-dark/60 backdrop-blur-sm"
          onClick={() => setShowPopup(false)}
        >
          <div 
            className="relative bg-cream rounded-3xl p-8 md:p-12 max-w-md w-full shadow-2xl animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setShowPopup(false)}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-rose-light flex items-center justify-center
                        hover:bg-rose-medium transition-colors"
            >
              <X size={18} className="text-rose-dark" />
            </button>

            {/* Rose bouquet animation */}
            <div className="text-center mb-6">
              <div className="text-8xl mb-4 float">💐</div>
              <div className="flex justify-center gap-2 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span 
                    key={i} 
                    className="text-3xl float" 
                    style={{ animationDelay: `${i * 0.15}s` }}
                  >
                    🌹
                  </span>
                ))}
              </div>
            </div>

            {/* Message */}
            <h3 className="font-cursive text-3xl text-rose-deep text-center mb-4">
              This rose is only for you, my love
            </h3>
            <p className="font-elegant text-xl text-card-foreground text-center italic">
              Every petal carries my love for you... ❤️
            </p>

            {/* Hearts decoration */}
            <div className="flex justify-center gap-2 mt-6">
              {[...Array(3)].map((_, i) => (
                <Heart 
                  key={i}
                  className="text-primary fill-primary animate-pulse"
                  size={20}
                  style={{ animationDelay: `${i * 0.2}s` }}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SendRoseButton;
