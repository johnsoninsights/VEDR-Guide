import PageWrapper from '../components/layout/PageWrapper';
import AnimatedText from '../components/ui/AnimatedText';
import { motion } from 'framer-motion';

const ContractorBenefits = () => {
  return (
    <PageWrapper>
      <section className="py-20 bg-groundcloud-blue text-white min-h-[90vh]">
        <div className="container mx-auto px-6 lg:px-12">
          
          <div className="text-center mb-20">
            <h1 className="text-5xl md:text-7xl font-display font-black uppercase mb-6 text-groundcloud-green">
              <AnimatedText text="FOR THE FLEET" />
              <AnimatedText text="OWNERS" className="text-white" delay={1} />
            </h1>
            <p className="text-xl font-sans text-gray-300 max-w-3xl mx-auto">
              Running a FedEx Ground route isn't easy. VEDR ensures your assets are protected, your insurance stays low, and your compliance is foolproof.
            </p>
          </div>

          {/* Dashboard mockup */}
          <div className="relative mx-auto max-w-5xl">
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white border-4 border-groundcloud-green rounded-xl p-6 offset-shadow overflow-hidden"
            >
              <div className="flex border-b-2 border-gray-200 pb-4 mb-6">
                <div className="flex gap-2">
                  <div className="w-4 h-4 rounded-full bg-red-400"></div>
                  <div className="w-4 h-4 rounded-full bg-yellow-400"></div>
                  <div className="w-4 h-4 rounded-full bg-green-400"></div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div className="bg-groundcloud-gray rounded-lg p-6 border-2 border-groundcloud-blue">
                  <h4 className="text-groundcloud-blue font-display font-bold uppercase mb-2">Liability Saved</h4>
                  <div className="text-4xl font-black text-groundcloud-green font-display tracking-tighter">
                    $1.2M+
                  </div>
                </div>
                <div className="bg-groundcloud-gray rounded-lg p-6 border-2 border-groundcloud-blue">
                  <h4 className="text-groundcloud-blue font-display font-bold uppercase mb-2">Fleet Visibility</h4>
                  <div className="text-4xl font-black text-groundcloud-blue font-display tracking-tighter">
                    100%
                  </div>
                </div>
                <div className="bg-groundcloud-gray rounded-lg p-6 border-2 border-groundcloud-blue">
                  <h4 className="text-groundcloud-blue font-display font-bold uppercase mb-2">Accident Reduction</h4>
                  <div className="text-4xl font-black text-groundcloud-blue font-display tracking-tighter">
                    -40%
                  </div>
                </div>
              </div>

              <div className="aspect-square md:aspect-video bg-groundcloud-gray rounded-lg border-2 border-groundcloud-blue flex items-center justify-center overflow-hidden relative">
                 <img src="/images/dashboard.png" alt="Fleet management analytics dashboard" className="w-full h-full object-contain p-2" />
              </div>
            </motion.div>
          </div>

        </div>
      </section>
    </PageWrapper>
  );
};

export default ContractorBenefits;
