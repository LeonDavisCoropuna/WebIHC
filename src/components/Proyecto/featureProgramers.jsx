import { PiStudentBold } from "react-icons/pi";
import Paragraph from "../Atoms/paragraph";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

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
                    <div className="px-6 pb-8 flex justify-center items-center flex-col">
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
                        <div className="flex gap-x-5">
                            <a href={feature.github} target="_blank"><FaGithub size={40} /></a>
                            <a href={feature.linkedIn} target="_blank"><FaLinkedin size={40} color="#0073b2" /></a>
                            <a href={feature.gmail} target="_blank"><SiGmail size={40} color="red" /></a>
                        </div>
                    </div>

                    <div className=" bg-black-100 h-[1px] px-24">
                    </div>
                    <div className="px-6 py-6">
                        <div className="flex gap-2 items-center text-gray-800 mb-4 ">
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
