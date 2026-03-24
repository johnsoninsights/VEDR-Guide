import PageWrapper from '../components/layout/PageWrapper';
import AnimatedText from '../components/ui/AnimatedText';
import CTAButton from '../components/ui/CTAButton';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <PageWrapper>
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center bg-groundcloud-bg overflow-hidden pt-24 pb-16 lg:pt-32 lg:pb-20">
        <div className="container mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">
          <div className="order-1 lg:order-2 mb-12 lg:mb-0">
            <h1 className="text-6xl md:text-8xl font-display font-black leading-none uppercase mb-6 tracking-tighter text-groundcloud-blue">
              <AnimatedText text="THE FUTURE OF" />
              <AnimatedText text="FLEET SAFETY" delay={1} className="text-groundcloud-green text-outline-green" />
            </h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="font-sans text-xl md:text-2xl mb-8 max-w-lg text-groundcloud-text leading-relaxed"
            >
              GroundCloud VEDR protects drivers, exonerates you from false claims, and reduces accidents using advanced AI-powered dashcams.
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="flex flex-wrap gap-4"
            >
              <CTAButton to="/driver-benefits">I'm a Driver</CTAButton>
              <CTAButton to="/contractor-benefits" primary={false}>I'm a Contractor</CTAButton>
            </motion.div>
          </div>
          
          <div className="order-2 lg:order-1 relative">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, type: "spring" }}
              className="relative aspect-square md:aspect-video lg:aspect-square w-full"
            >
              {/* Image Placeholder representing a delivery truck / AI Camera */}
              <div className="absolute inset-0 bg-groundcloud-gray border-4 border-groundcloud-blue rounded-3xl overflow-hidden offset-shadow flex items-center justify-center">
                <img 
                  src="/images/hero.png" 
                  alt="Delivery Truck Cabin with AI Camera" 
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Background decorative elements */}
        <motion.div 
          animate={{ x: [0, 50, -30, 0], y: [0, -40, 30, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute -top-10 -right-20 w-[600px] h-[600px] bg-groundcloud-green rounded-full mix-blend-multiply filter blur-[100px] opacity-20 z-0 pointer-events-none"
        />
        <motion.div 
          animate={{ x: [0, -40, 40, 0], y: [0, 30, -50, 0], scale: [1, 1.3, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-0 -left-20 w-[500px] h-[500px] bg-groundcloud-blue rounded-full mix-blend-multiply filter blur-[100px] opacity-10 z-0 pointer-events-none"
        />
      </section>

      {/* Intro Section */}
      <section className="pt-12 pb-24 lg:pt-16 lg:pb-32 bg-groundcloud-blue text-white relative">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-display font-black uppercase mb-8 tracking-tight">
              What is VEDR?
            </h2>
            <p className="text-xl md:text-2xl font-sans leading-relaxed text-gray-300">
              Video Event Data Recorder (VEDR) technology isn't just a camera. It's an intelligent co-pilot that helps drivers stay safe, recognizes risky patterns, and protects contractors from liabilities. Designed specifically for the fast-paced world of FedEx Ground delivery.
            </p>
          </div>
        </div>
      </section>

    </PageWrapper>
  );
};

export default Home;
