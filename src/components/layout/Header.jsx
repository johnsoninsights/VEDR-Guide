import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Overview', path: '/' },
    { name: 'How It Works', path: '/how-it-works' },
    { name: 'Drivers', path: '/driver-benefits' },
    { name: 'Contractors', path: '/contractor-benefits' },
    { name: 'Privacy', path: '/camera-vision' },
    { name: 'Get Started', path: '/getting-started' }
  ];

  return (
    <>
      <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-groundcloud-bg/90 backdrop-blur-md shadow-md py-4' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 lg:px-12 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2 relative z-[60]">
            {/* Logo placeholder - replace with actual GC logo */}
            <div className="w-10 h-10 bg-groundcloud-blue rounded-lg flex items-center justify-center">
              <span className="text-white font-display font-bold text-xl">GC</span>
            </div>
            <span className={`font-display font-bold text-2xl tracking-tighter ${isScrolled ? 'text-groundcloud-blue' : 'text-groundcloud-text'}`}>
              VEDR GUIDE
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex gap-8 items-center">
            {navLinks.map((link) => (
              <Link 
                key={link.path} 
                to={link.path}
                className={`font-sans font-medium hover:text-groundcloud-green transition-colors ${location.pathname === link.path ? 'text-groundcloud-green' : 'text-groundcloud-blue'}`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden relative z-[60] text-groundcloud-blue"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </header>

      {/* Mobile Nav Overlay */}
      <div className={`fixed inset-0 bg-groundcloud-bg z-[55] transition-transform duration-500 ease-in-out lg:hidden flex flex-col justify-center items-center ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <nav className="flex flex-col gap-6 text-center">
          {navLinks.map((link) => (
            <Link 
              key={link.path} 
              to={link.path}
              className={`font-display font-bold text-4xl uppercase tracking-tighter ${location.pathname === link.path ? 'text-groundcloud-green' : 'text-groundcloud-blue hover:text-outline hover:text-transparent transition-all'}`}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
};

export default Header;
