import { PetalsBackdrop } from './components/Confetti';
import { MusicToggle } from './components/MusicToggle';
import { TopNav, Closing } from './components/Closing';
import { Hero } from './components/Hero';
import { Letter } from './components/Letter';
import { Timeline } from './components/Timeline';
import { Gallery } from './components/Gallery';
import { Reasons } from './components/Reasons';
import { WishCandle } from './components/WishCandle';

function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-cream-50">
      <PetalsBackdrop />
      <TopNav />

      {/* floating music control */}
      <div className="fixed bottom-5 right-5 z-40">
        <MusicToggle />
      </div>

      <main id="top">
        <Hero />
        <Letter />
        <Timeline />
        <Gallery />
        <Reasons />
        <WishCandle />
        <Closing />
      </main>
    </div>
  );
}

export default App;
