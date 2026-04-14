import { useState } from 'react';
import { AnimatePresence } from 'motion/react';
import Home from './components/Home';
import Character from './components/Character';
import Gallery from './components/Gallery';
import BottomNav from './components/BottomNav';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <div className="min-h-screen bg-[#121212] text-gray-200 font-sans selection:bg-[#8B0000] selection:text-white">
      <main className="w-full max-w-3xl mx-auto relative">
        <AnimatePresence mode="wait">
          {activeTab === 'home' && <Home key="home" />}
          {activeTab === 'character' && <Character key="character" />}
          {activeTab === 'gallery' && <Gallery key="gallery" />}
        </AnimatePresence>
      </main>
      <BottomNav activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
}

