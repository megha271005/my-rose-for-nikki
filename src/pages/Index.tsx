import { useState } from 'react';
import OpeningScreen from '@/components/OpeningScreen';
import LoveLetter from '@/components/LoveLetter';
import MemorySlider from '@/components/MemorySlider';
import SendRoseButton from '@/components/SendRoseButton';
import MemoryBox from '@/components/MemoryBox';
import Footer from '@/components/Footer';
import FallingPetals from '@/components/FallingPetals';
import FloatingHearts from '@/components/FloatingHearts';

const Index = () => {
  const [isLetterOpen, setIsLetterOpen] = useState(false);

  return (
    <div className="min-h-screen gradient-romantic relative overflow-x-hidden">
      <FallingPetals />
      <FloatingHearts />

      {!isLetterOpen ? (
        <OpeningScreen onOpen={() => setIsLetterOpen(true)} />
      ) : (
        <main className="animate-fade-in-up">
          {/* Header */}
          <header className="pt-8 pb-4 text-center">
            <h1 className="font-cursive text-3xl md:text-4xl text-rose-dark">
              For Nikki – My Rose 🌹❤️
            </h1>
          </header>

          <LoveLetter />
          <MemorySlider />
          <SendRoseButton />
          <MemoryBox />
          <Footer />
        </main>
      )}
    </div>
  );
};

export default Index;
