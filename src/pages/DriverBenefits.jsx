import PageWrapper from '../components/layout/PageWrapper';
import AnimatedText from '../components/ui/AnimatedText';
import Card from '../components/ui/Card';
import { ShieldAlert, TrendingUp, Award, UserCheck } from 'lucide-react';

const DriverBenefits = () => {
  const benefits = [
    {
      title: "Exoneration from False Claims",
      desc: "If an accident isn't your fault, VEDR proves it. Video evidence provides irrefutable truth protecting your record and job.",
      icon: ShieldAlert
    },
    {
      title: "Positive Recognition",
      desc: "Good driving behaviors are tracked and rewarded. Show off your elite safety scores.",
      icon: Award
    },
    {
      title: "Self-Coaching",
      desc: "Audio alerts in the cab give you instant feedback so you can correct behaviors before they become habits or incidents.",
      icon: TrendingUp
    },
    {
      title: "Protect Your CDL",
      desc: "A clean driving record is your livelihood. VEDR ensures you aren't unfairly ticketed or blamed.",
      icon: UserCheck
    }
  ];

  return (
    <PageWrapper>
      <section className="py-20 bg-groundcloud-gray min-h-screen">
        <div className="container mx-auto px-6 lg:px-12">
          
          <div className="flex flex-col lg:flex-row gap-12 items-center mb-16">
            <div className="lg:w-1/2">
              <h1 className="text-5xl md:text-7xl font-display font-black uppercase text-groundcloud-blue mb-6">
                <AnimatedText text="BUILT TO" />
                <AnimatedText text="PROTECT DRIVERS" delay={1} className="text-white text-outline" />
              </h1>
              <p className="text-xl font-sans text-groundcloud-text">
                The biggest misconception is that cameras are meant to spy. In reality, VEDR acts as your ultimate witness.
              </p>
            </div>
            <div className="lg:w-1/2">
              <div className="bg-groundcloud-gray rounded-3xl border-4 border-groundcloud-blue offset-shadow flex items-center justify-center min-h-[300px] overflow-hidden relative">
                <img src="/images/driver.png" alt="Happy driver next to a 100% safety score" className="w-full h-[400px] object-contain p-4" />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, idx) => (
              <Card 
                key={idx}
                title={benefit.title}
                description={benefit.desc}
                icon={benefit.icon}
                delay={idx * 0.15}
              />
            ))}
          </div>

        </div>
      </section>
    </PageWrapper>
  );
};

export default DriverBenefits;
