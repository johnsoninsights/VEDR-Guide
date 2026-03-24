import { Link } from 'react-router-dom';
import Marquee from '../ui/Marquee';

const Footer = () => {
  return (
    <footer className="bg-groundcloud-blue text-white overflow-hidden relative">
      <Marquee text="PROTECT DRIVERS • REDUCE RISK • " className="bg-groundcloud-green text-groundcloud-blue" />
      
      <div className="container mx-auto px-6 lg:px-12 py-16 md:py-24 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-4xl md:text-6xl font-display font-black mb-6 uppercase tracking-tighter leading-none">
              Got your back <br/><span className="text-groundcloud-green">on the road.</span>
            </h2>
            <p className="text-gray-300 font-sans max-w-md text-lg">
              GroundCloud's VEDR AI dashcams are designed to protect drivers, exonerate you from false claims, and keep fleets compliant.
            </p>
          </div>

          <div>
            <h4 className="font-display font-bold text-xl mb-4 text-groundcloud-green">Resources</h4>
            <ul className="space-y-3 font-sans text-gray-300">
              <li><Link to="/how-it-works" className="hover:text-white transition-colors">How VEDR Works</Link></li>
              <li><Link to="/driver-benefits" className="hover:text-white transition-colors">Driver Benefits</Link></li>
              <li><Link to="/contractor-benefits" className="hover:text-white transition-colors">Contractor Benefits</Link></li>
              <li><Link to="/camera-vision" className="hover:text-white transition-colors">Privacy & Vision</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-display font-bold text-xl mb-4 text-groundcloud-green">Support</h4>
            <ul className="space-y-3 font-sans text-gray-300">
              <li><a href="https://groundcloud.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">GroundCloud.com</a></li>
              <li><Link to="/getting-started" className="hover:text-white transition-colors">Installation Guide</Link></li>
              <li><Link to="/getting-started" className="hover:text-white transition-colors">Best Practices</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-white/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm font-sans text-gray-400">
            © {new Date().getFullYear()} GroundCloud. Educating drivers and contractors.
          </p>
          <div className="font-display font-bold text-2xl tracking-tighter opacity-50">
            GC VEDR
          </div>
        </div>
      </div>
      
      {/* Decorative background typography */}
      <div className="absolute -bottom-10 left-0 w-full overflow-hidden pointer-events-none opacity-5 select-none">
        <span className="text-[15vw] font-display font-black leading-none whitespace-nowrap">
          GROUNDCLOUD VEDR
        </span>
      </div>
    </footer>
  );
};

export default Footer;
