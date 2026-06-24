import { useState, useRef, useCallback, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import FloatingBackground from './components/FloatingBackground';
import LoginPage from './components/LoginPage';
import EnvelopeModal from './components/EnvelopeModal';
import HeroSection from './components/HeroSection';
import CountersSection from './components/CountersSection';
import MagicSection from './components/MagicSection';
import CakeSection from './components/CakeSection';
import SweetWords from './components/SweetWords';
import GallerySection from './components/GallerySection';
import VideoSection from './components/VideoSection';
import OutroSection from './components/OutroSection';

type Stage = 'login' | 'envelope' | 'main';

export default function App() {
  const [stage, setStage] = useState<Stage>('login');
  const [musicOn, setMusicOn] = useState(false);
  const mainAudioRef = useRef<HTMLAudioElement | null>(null);

  const handleLogin = useCallback(() => {
    setStage('envelope');
    setTimeout(() => {
      if (mainAudioRef.current) {
        mainAudioRef.current.play().catch(() => {});
        setMusicOn(true);
      }
    }, 300);
  }, []);

  const handleCloseEnvelope = useCallback(() => {
    setStage('main');
  }, []);

  const toggleMusic = useCallback(() => {
    const audio = mainAudioRef.current;
    if (!audio) return;
    if (musicOn) {
      audio.pause();
    } else {
      audio.play().catch(() => {});
    }
    setMusicOn(!musicOn);
  }, [musicOn]);

  if (stage === 'login') {
    return <LoginPage onLogin={handleLogin} />;
  }

  return (
    <div className="relative min-h-[100dvh] overflow-x-hidden"
      style={{ background: 'linear-gradient(180deg, #fff0f5 0%, #ffe4f0 30%, #fff0f5 60%, #ffd6e8 100%)' }}>

      {/* Chic Fixed Border */}
      <div className="fixed inset-2 md:inset-4 border-[3px] md:border-[6px] border-pink-400/30 rounded-2xl md:rounded-3xl pointer-events-none z-50 shadow-[inset_0_0_20px_rgba(255,105,180,0.15)]" />

      <FloatingBackground />

      {/* Music toggle button */}
      <div className="fixed top-6 left-6 z-30">
        <button onClick={toggleMusic}
          className={`relative w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 active:scale-90`}
          style={{ background: 'linear-gradient(135deg, #ff69b4, #ff1493)' }}>
          {musicOn ? <Volume2 size={22} className="text-white" /> : <VolumeX size={22} className="text-white" />}
        </button>
      </div>

      {/* Hidden audio element */}
      <audio ref={mainAudioRef} src="./bg-song.mp4" loop preload="auto" />

      {stage === 'envelope' && (
        <EnvelopeModal onClose={handleCloseEnvelope} />
      )}

      {/* Page content — always rendered so it's behind the envelope modal */}
      <main>
        <HeroSection />

        {/* Divider */}
        <div className="flex items-center justify-center gap-4 px-4">
          <div className="h-px flex-1 max-w-xs bg-gradient-to-r from-transparent to-pink-200" />
          <span className="text-2xl">⏳</span>
          <div className="h-px flex-1 max-w-xs bg-gradient-to-l from-transparent to-pink-200" />
        </div>

        <CountersSection />

        {/* Divider */}
        <div className="flex items-center justify-center gap-4 px-4">
          <div className="h-px flex-1 max-w-xs bg-gradient-to-r from-transparent to-pink-200" />
          <span className="text-2xl">🌸</span>
          <div className="h-px flex-1 max-w-xs bg-gradient-to-l from-transparent to-pink-200" />
        </div>

        <MagicSection />

        {/* Divider */}
        <div className="flex items-center justify-center gap-4 px-4">
          <div className="h-px flex-1 max-w-xs bg-gradient-to-r from-transparent to-pink-200" />
          <span className="text-2xl">💕</span>
          <div className="h-px flex-1 max-w-xs bg-gradient-to-l from-transparent to-pink-200" />
        </div>

        <CakeSection />

        {/* Divider */}
        <div className="flex items-center justify-center gap-4 px-4">
          <div className="h-px flex-1 max-w-xs bg-gradient-to-r from-transparent to-pink-200" />
          <span className="text-2xl">✨</span>
          <div className="h-px flex-1 max-w-xs bg-gradient-to-l from-transparent to-pink-200" />
        </div>

        <SweetWords />

        {/* Divider */}
        <div className="flex items-center justify-center gap-4 px-4">
          <div className="h-px flex-1 max-w-xs bg-gradient-to-r from-transparent to-pink-200" />
          <span className="text-2xl">📸</span>
          <div className="h-px flex-1 max-w-xs bg-gradient-to-l from-transparent to-pink-200" />
        </div>

        <GallerySection />

        {/* Divider */}
        <div className="flex items-center justify-center gap-4 px-4">
          <div className="h-px flex-1 max-w-xs bg-gradient-to-r from-transparent to-pink-200" />
          <span className="text-2xl">🎬</span>
          <div className="h-px flex-1 max-w-xs bg-gradient-to-l from-transparent to-pink-200" />
        </div>

        <VideoSection />

        {/* Divider */}
        <div className="flex items-center justify-center gap-4 px-4">
          <div className="h-px flex-1 max-w-xs bg-gradient-to-r from-transparent to-pink-200" />
          <span className="text-2xl">🎀</span>
          <div className="h-px flex-1 max-w-xs bg-gradient-to-l from-transparent to-pink-200" />
        </div>

        <OutroSection />
      </main>
    </div>
  );
}
