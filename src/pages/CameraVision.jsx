import { useState } from 'react';
import PageWrapper from '../components/layout/PageWrapper';
import AnimatedText from '../components/ui/AnimatedText';
import { motion, AnimatePresence } from 'framer-motion';
import { Eye, EyeOff, CheckCircle2, XCircle } from 'lucide-react';

const CameraVision = () => {
  const [activeTab, setActiveTab] = useState('detected');

  const detected = [
    "Harsh Braking & Acceleration",
    "Tailgating / Following Too Closely",
    "Cell Phone Usage",
    "Distracted Driving",
    "Seatbelt Non-Compliance",
    "Rolling Stops"
  ];

  const notRecorded = [
    "Continuous Audio Recording (unless event triggered)",
    "Live Surveillance / Snooping (cannot view you live)",
    "Personal Conversations",
    "Breaks and Downtime",
    "Location Tracking outside work hours"
  ];

  return (
    <PageWrapper>
      <section className="py-20 bg-groundcloud-bg min-h-[90vh]">
        <div className="container mx-auto px-6 lg:px-12">
          
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-display font-black uppercase text-groundcloud-blue mb-6">
              <AnimatedText text="WHAT THE AI" />
              <AnimatedText text="ACTUALLY SEES" delay={1} className="text-groundcloud-green text-outline-green" />
            </h1>
            <p className="text-xl font-sans text-groundcloud-text max-w-2xl mx-auto">
              Privacy is a priority. GroundCloud’s AI camera only saves data when it matters most, filtering out the noise and letting you work in peace.
            </p>
          </div>

          {/* Simple Tabs Component */}
          <div className="max-w-4xl mx-auto">
            <div className="flex border-b-4 border-groundcloud-blue mb-8">
              <button 
                onClick={() => setActiveTab('detected')}
                className={`flex-1 py-4 font-display font-bold text-2xl uppercase transition-colors ${activeTab === 'detected' ? 'bg-groundcloud-blue text-white' : 'bg-transparent text-groundcloud-blue hover:bg-groundcloud-gray'}`}
              >
                <div className="flex items-center justify-center gap-2">
                  <Eye size={28} />
                  Detected Events
                </div>
              </button>
              <button 
                onClick={() => setActiveTab('ignored')}
                className={`flex-1 py-4 font-display font-bold text-2xl uppercase transition-colors ${activeTab === 'ignored' ? 'bg-groundcloud-green text-groundcloud-blue' : 'bg-transparent text-groundcloud-blue hover:bg-groundcloud-gray'}`}
              >
                <div className="flex items-center justify-center gap-2">
                  <EyeOff size={28} />
                  Not Recorded
                </div>
              </button>
            </div>

            <div className="bg-white border-2 border-groundcloud-blue p-8 min-h-[400px] offset-shadow relative overflow-hidden">
              <AnimatePresence mode="wait">
                {activeTab === 'detected' ? (
                  <motion.div
                    key="detected"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className="text-3xl font-display font-black text-groundcloud-blue mb-6 uppercase">Safety Triggers</h3>
                    <ul className="space-y-4">
                      {detected.map((item, i) => (
                        <li key={i} className="flex gap-4 items-center">
                          <CheckCircle2 className="text-groundcloud-blue flex-shrink-0" size={24} />
                          <span className="font-sans text-xl text-groundcloud-text">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ) : (
                  <motion.div
                    key="ignored"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className="text-3xl font-display font-black text-groundcloud-green mb-6 uppercase drop-shadow-sm">Strictly Private</h3>
                    <ul className="space-y-4">
                      {notRecorded.map((item, i) => (
                        <li key={i} className="flex gap-4 items-center">
                          <XCircle className="text-groundcloud-green flex-shrink-0" size={24} />
                          <span className="font-sans text-xl text-groundcloud-text">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            
            <div className="mt-12 text-center text-groundcloud-text max-w-2xl mx-auto italic font-sans">
              "When an event occurs, 10 seconds of video (before and after) is uploaded. If no event triggers, the footage is overwritten locally within hours."
            </div>
          </div>

        </div>
      </section>
    </PageWrapper>
  );
};

export default CameraVision;
