import { animate, motion, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import CardProfileList from "./cardProfileList";

export function PrimaryCard({ primaryContainer, miniModal, fakeProfiles }) {
  return (
    <div className="w-11/12 max-w-[380px] sm:max-w-[480px] md:w-full md:max-w-none lg:w-11/12 p-5 relative z-10 after:bg-tertiary-200 after:w-full after:h-[85%] after:absolute after:inset-0 after:z-0 sm:p-8 md:p-4 lg:p-10">
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={primaryContainer}
        className="relative z-10 bg-white px-3.5 py-[18px] sm:px-5 sm: py-7 md:px-6 md:py-9 flex flex-col gap-[18px] font-head lg:gap-[34px] primary-card"
      >
        <div className="flex items-center justify-between pb-4 md:pb-8 border-b-[0.5px] md:border-b border-[#9C9C9C]">
          <h4 className="text-xs text-primary-100 font-medium sm:text-base lg:text-2xl">
            Shopify Bill Payment
          </h4>
          <span className="text-primary-100 text-[7px] font-medium bg-[#EBF7F7] w-4 h-4 flex items-center justify-center block rounded-full sm:w-5 sm:h-5 sm:text-[10px] lg:w-8 lg:h-8 lg:text-base">
            3
          </span>
        </div>
        <div className="grid gap-3.5 overflow-hidden">
          {fakeProfiles.map((profile) => (
            <CardProfileList key={profile.id} profile={profile} />
          ))}
        </div>
       
      </motion.div>

      {/* mini modal */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={miniModal}
        className="absolute w-2/5 z-10 -bottom-8 -right-2 px-3.5 py-4 bg-white rounded-lg flex flex-col gap-5 font-head text-center sm:gap-8 sm:-right-4 md:w-3/5 md:max-w-[200px] lg:px-6 lg:py-8 lg:w-1/2 lg:gap-10 lg:-bottom-10 lg:-right-8 lg:max-w-none mini-modal"
      >
        
        
      </motion.div>
    </div>
  );
}

export function SecondaryCard() {
  const incomeRef = useRef(null);
  const worstRef = useRef(null);
  const inView = useInView(incomeRef);

  useEffect(() => {
    const incomeControls = animate(0, 2174602, {
      duration: 1,
      onUpdate(value) {
        const num = value.toFixed().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        incomeRef.current.textContent = `$${num}`;
      },
    });

    const worstControls = animate(0, 5369, {
      duration: 0.8,
      onUpdate(value) {
        const num = value.toFixed().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        worstRef.current.textContent = `$${num}`;
      },
    });

    return () => {
      incomeControls.stop();
      worstControls.stop();
    };
  }, [inView]);

  const container = {
    visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
    hidden: { opacity: 1 },
  };

  const fieldContainer = {
    visible: { x: 0, opacity: 1, transition: { duration: 1 } },
    hidden: { x: 100, opacity: 0 },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      variants={container}
      className="w-11/12 max-w-[380px] sm:max-w-[480px] md:w-full md:max-w-none lg:w-11/12 bg-secondary-200 p-5 flex flex-col gap-2.5 font-body text-primary-100 font-medium sm:p-8 overflow-hidden"
    >
      <motion.div
        variants={fieldContainer}
        className="bg-white py-2 px-2.5 flex justify-between items-center rounded-md shadow sm:py-3.5 sm:px-4 md:shadow-md lg:py-4 lg:px-5 lg:rounded-xl"
      >
        
      </motion.div>
      <motion.div
        variants={fieldContainer}
        className="bg-white py-2 px-2.5 flex justify-between items-center rounded-md shadow sm:py-3.5 sm:px-4 md:shadow-md lg:py-4 lg:px-5 lg:rounded-xl"
      >
       
      </motion.div>
      <motion.div
        variants={fieldContainer}
        className="bg-white p-4 pb-5 flex flex-col gap-7 rounded-md shadow sm:p-6 sm:pb-7 md:shadow-md lg:p-7 lg:pb-9 lg:rounded-xl"
      >
        
      </motion.div>
    </motion.div>
  );
}
