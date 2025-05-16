'use client';

import { motion } from 'framer-motion';
import Image from "next/image";

const UnderDevelopmentBanner = () => {
    return (
        <motion.div
            className="w-full h-screen flex justify-center items-center text-white text-center py-3 font-bold z-50 bg-black bg-opacity-70"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <motion.div
                className="flex flex-col items-center"
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
            >
                <motion.div
                    className="mb-4"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                    <Image
                        src="/images/giphy.gif"
                        alt="Under Development"
                        width={500}
                        height={500}
                        className="w-[500px] mb-4 rounded-lg"
                    />
                </motion.div>
                <motion.h1
                    className="text-3xl md:text-4xl font-bold"
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                >
                    This Page is Under Development
                </motion.h1>
                <motion.p
                    className="mt-2 text-lg"
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 1.5 }}
                >
                    Please check back later!
                </motion.p>
            </motion.div>
        </motion.div>
    );
};

export default UnderDevelopmentBanner;
