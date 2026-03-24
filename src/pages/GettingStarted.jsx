import PageWrapper from '../components/layout/PageWrapper';
import AnimatedText from '../components/ui/AnimatedText';
import CTAButton from '../components/ui/CTAButton';
import { motion } from 'framer-motion';
import { BookOpen, Video, Users } from 'lucide-react';

const GettingStarted = () => {
  const steps = [
    {
      icon: Video,
      title: "Watch the Training",
      desc: "Review the GroundCloud university videos on how to interpret audio alerts and manage scoring."
    },
    {
      icon: BookOpen,
      title: "Read the Manual",
      desc: "Understand what behaviors trigger the dashcam to ensure you avoid false alarms."
    },
    {
      icon: Users,
      title: "Ask Your BC",
      desc: "Your Business Contact (BC) has full access to the VEDR portal. Setup a check-in to review your preliminary scores."
    }
  ];

  return (
    <PageWrapper>
      <section className="py-20 bg-groundcloud-green min-h-[90vh] text-groundcloud-blue">
        <div className="container mx-auto px-6 lg:px-12">
          
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-display font-black uppercase mb-6 tracking-tight">
              <AnimatedText text="START YOUR" />
              <AnimatedText text="JOURNEY" className="text-white text-outline" delay={1} />
            </h1>
            <p className="text-xl font-sans text-groundcloud-blue max-w-xl mx-auto font-medium">
              Ready to hit the road with VEDR? Follow these best practices to ensure a smooth transition.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 max-w-6xl mx-auto">
            {steps.map((step, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="bg-white border-2 border-groundcloud-blue p-8 flex flex-col items-center text-center offset-shadow hover:-translate-y-2 transition-transform duration-300"
              >
                <div className="w-16 h-16 bg-groundcloud-blue text-white rounded-full flex items-center justify-center mb-6 border-2 border-groundcloud-blue">
                  <step.icon size={28} />
                </div>
                <h3 className="text-2xl font-display font-bold uppercase mb-4">{step.title}</h3>
                <p className="font-sans text-groundcloud-text flex-grow">{step.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <CTAButton to="/" primary={false} className="bg-white hover:bg-groundcloud-blue border-groundcloud-blue text-groundcloud-blue hover:text-white">
              Back to Overview
            </CTAButton>
          </div>

        </div>
      </section>
    </PageWrapper>
  );
};

export default GettingStarted;
