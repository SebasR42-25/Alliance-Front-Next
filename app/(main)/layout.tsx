import Navbar from '@/components/layout/navbar';
import MobileNav from '@/components/layout/mobile-nav';
import ToastContainer from '@/components/ui/toast-container';

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-brand-mint">
      <Navbar />
      <main className="pt-16 pb-16 md:pb-0">{children}</main>
      <MobileNav />
      <ToastContainer />
    </div>
  );
}
