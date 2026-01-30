import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import FeatureSection from './components/FeatureSection';
import CompanyInfo from './components/CompanyInfo';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navigation />
      <main>
        <HeroSection />
        <FeatureSection />
        <CompanyInfo />
      </main>
      <Footer />
    </div>
  );
}

export default App;