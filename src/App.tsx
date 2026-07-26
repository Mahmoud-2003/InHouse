import { useState } from 'react';
import { AnimatePresence, motion, MotionConfig } from 'framer-motion';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import TranslateButton from './components/TranslateButton';
import HomePage from './pages/HomePage';
import InHousePage from './pages/InHousePage';
import LoLPage from './pages/LoLPage';
import ValorantPage from './pages/ValorantPage';
import QueuePage from './pages/QueuePage';
import ContactPage from './pages/ContactPage';
import { pageVariants } from './lib/motion';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const handleNavigate = (page: string) => {
    if (page === currentPage) return;
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
    setCurrentPage(page);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={handleNavigate} />;
      case 'inhouse':
        return <InHousePage />;
      case 'lol':
        return <LoLPage />;
      case 'valorant':
        return <ValorantPage />;
      case 'queue':
        return <QueuePage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen bg-void">
        <Sidebar currentPage={currentPage} onNavigate={handleNavigate} />
        <Header currentPage={currentPage} onNavigate={handleNavigate} />
        <main className="pt-16 md:pl-20 overflow-hidden">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={currentPage}
              variants={pageVariants}
              initial="initial"
              animate="enter"
              exit="exit"
            >
              {renderPage()}
            </motion.div>
          </AnimatePresence>
        </main>
        <Footer />
        <TranslateButton />
      </div>
    </MotionConfig>
  );
}

export default App;
