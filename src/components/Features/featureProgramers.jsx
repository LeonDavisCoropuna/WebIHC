import { PiStudentBold } from "react-icons/pi";
import Paragraph from "../Atoms/paragraph";
import { motion } from "framer-motion";

export default function FeatureItemProgrammer({ feature, i }) {
    const featureItem = {
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: .5, delay: i * 0.1 },
        },
        hidden: { opacity: 0, y: -100 * i },
    };

    return (
        <motion.section
            initial="hidden"
            whileInView="visible"
            variants={featureItem}
            viewport={{ amount: 0 }}
            className="flex flex-col rounded-xl"
        >
            <div className="pt-12">
                {/* Card start */}
                <div className="min-w-96 h-max  mx-auto bg-white rounded-lg overflow-hidden shadow-lg scale-110 max-w-96">
                    <div className="border-b px-6 pb-8">
                        <div className="text-center my-6">
                            <img
                                className="h-40 w-40 rounded-full border-4 border-white dark:border-gray-800 mx-auto mb-4"
                                src={feature.image}
                                alt="Profile"
                            />
                            <div className="py-2">
                                <h3 className="font-bold text-3xl text-gray-800 mb-1">
                                    {feature.name}
                                </h3>
                                <div className="inline-flex text-gray-700 text-lg items-center">
                                    {feature.location}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="px-6 py-6">
                        <div className="flex gap-2 items-center text-gray-800 mb-4 ">
                            <div>
                                <PiStudentBold size={24} />
                            </div>

                            <p className="text-xl text-wrap break-words m">
                                <strong className="text-black"> </strong> {feature.followers}
                            </p>
                        </div>
                    </div>
                </div>
                {/* Card end */}
            </div>
        </motion.section>
    );
}
