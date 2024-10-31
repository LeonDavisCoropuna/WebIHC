import Paragraph from "../Atoms/paragraph";
import { motion } from "framer-motion";

export default function FeatureItemImage({ feature, i }) {
    const rightToLeft = feature.right ? -50 : 50
    const featureItem = {
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: .5, delay: i * 0.1 },
        },
        hidden: { opacity: 0, x: rightToLeft },
    };

    return (
        <motion.section
            initial="hidden"
            whileInView="visible"
            variants={featureItem}
            viewport={{ amount: 0 }}
            className="flex flex-col rounded-xl"
        >
            <div className="px-5 py-2.5 flex items-center justify-between border-b border-gray-300">
                <h4 className="text-xs text-primary-100 font-medium sm:text-base lg:text-2xl">
                    {feature?.title}
                </h4>
            </div>
            {feature.content.map((pagraph, i) => (
                <div className="p-1" key={i}>
                    <Paragraph>{pagraph}</Paragraph>
                </div>
            ))}

            <img
                src={feature.img}
                alt="Roblox"
                className="w-full h-auto rounded-lg mt-4 transition-transform duration-300 ease-in-out max-w-[500px] max-h-[250px]"
            />
        </motion.section>
    );
}
