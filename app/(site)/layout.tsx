import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import Footer from '@/components/Footer';
import TranslateButton from '@/components/TranslateButton';
import PageTransition from '@/components/PageTransition';

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-void">
      <Sidebar />
      <Header />
      <main className="pt-16 md:pl-20 overflow-hidden">
        <PageTransition>{children}</PageTransition>
      </main>
      <Footer />
      <TranslateButton />
    </div>
  );
}
