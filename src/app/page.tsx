import NavSimple from './components/NavSimple';
import DesignFocusHeader from './components/DesignFocusHeader';
import HeroVisual from './components/HeroVisual';
import PrimaryCTA from './components/PrimaryCTA';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <NavSimple />
      <DesignFocusHeader />
      <HeroVisual />
      <PrimaryCTA />


    </div>
  );
}
