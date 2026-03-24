import PageWrapper from '../components/layout/PageWrapper';
import AnimatedText from '../components/ui/AnimatedText';
import { motion } from 'framer-motion';
import { Camera, Cloud, Cpu } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: Camera,
      title: "AI Camera Eyes",
      desc: "Mounted near the rear-view mirror, the dual-facing camera continuously analyzes the road and the cabin without recording full time unless an event occurs."
    },
    {
      icon: Cpu,
      title: "On-Board Processing",
      desc: "Advanced edge computing processes video in real-time, instantly identifying risky behaviors like distracted driving, tailgating, or harsh braking."
    },
    {
      icon: Cloud,
      title: "Cloud Backup",
      desc: "Only actionable events are uploaded securely to the GroundCloud platform. Everything else stays in the cab and is overwritten locally."
    }
  ];

  return (
    <PageWrapper>
      <section className="py-20 bg-groundcloud-bg">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-display font-black uppercase text-groundcloud-blue mb-6">
              <AnimatedText text="HOW VEDR WORKS" />
            </h1>
            <p className="text-xl font-sans text-groundcloud-text max-w-2xl mx-auto">
              Understanding the hardware and software that keeps you safe. It’s an intelligent system designed to help, not spy.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <div className="space-y-12">
                {steps.map((step, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.2 }}
                    className="flex gap-6 relative"
                  >
                    <div className="flex-shrink-0 w-16 h-16 rounded-full bg-groundcloud-green text-groundcloud-blue flex items-center justify-center border-2 border-groundcloud-blue offset-shadow z-10">
                      <step.icon size={32} strokeWidth={2.5} />
                    </div>
                    {/* Connecting line */}
                    {idx < steps.length - 1 && (
                      <div className="absolute left-8 top-16 w-0.5 h-20 bg-groundcloud-blue border-l-2 border-dashed opacity-30 z-0"></div>
                    )}
                    <div>
                      <h3 className="text-2xl font-display font-bold uppercase text-groundcloud-blue mb-2">{step.title}</h3>
                      <p className="font-sans text-groundcloud-text">{step.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="lg:w-1/2 w-full">
              <div className="border-4 border-groundcloud-blue rounded-3xl overflow-hidden offset-shadow bg-white p-4">
                <div className="bg-groundcloud-gray aspect-square flex items-center justify-center relative overflow-hidden rounded-xl border-2 border-groundcloud-blue">
                   <img src="/images/exploded.png" alt="Exploded view of the VEDR camera hardware" className="absolute inset-0 w-full h-full object-cover object-center" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
};

export default HowItWorks;
