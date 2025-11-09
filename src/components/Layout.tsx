import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-brand-100 text-brand-900 font-sans">
      <Navbar />
      <main className="flex-1">
        <div className="max-w-6xl mx-auto px-4 py-10">
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
