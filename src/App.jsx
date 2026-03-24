import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

// Pages
import Home from './pages/Home';
import HowItWorks from './pages/HowItWorks';
import DriverBenefits from './pages/DriverBenefits';
import ContractorBenefits from './pages/ContractorBenefits';
import CameraVision from './pages/CameraVision';
import GettingStarted from './pages/GettingStarted';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow pt-[80px]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/driver-benefits" element={<DriverBenefits />} />
            <Route path="/contractor-benefits" element={<ContractorBenefits />} />
            <Route path="/camera-vision" element={<CameraVision />} />
            <Route path="/getting-started" element={<GettingStarted />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
