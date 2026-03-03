import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import TranslateButton from './components/TranslateButton';
import HomePage from './pages/HomePage';
import InHousePage from './pages/InHousePage';
import LoLPage from './pages/LoLPage';
import ValorantPage from './pages/ValorantPage';
import TiersPage from './pages/TiersPage';
import ContactPage from './pages/ContactPage';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={setCurrentPage} />;
      case 'inhouse':
        return <InHousePage />;
      case 'lol':
        return <LoLPage />;
      case 'valorant':
        return <ValorantPage />;
      case 'tiers':
        return <TiersPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-950">
      <Header currentPage={currentPage} onNavigate={setCurrentPage} />
      <main className="pt-16">
        {renderPage()}
      </main>
      <Footer />
      <TranslateButton />
    </div>
  );
}

export default App;
