"use client"
import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import React from "react";
import { SiteContainer } from "@/lib/SiteContainer";

// Define types for your data structures
type PlanFeature = {
    name: string;
    key: keyof Plan;
};

type Plan = {
    name: string;
    price: string;
    content: string;
    devices: string;
    freeTrial: string;
    cancelAnytime: boolean;
    hdr: boolean;
    dolbyAtmos: boolean;
    adFree: boolean;
    offlineViewing: boolean;
    familySharing: boolean;
};

const DetailsPlan = () => {
    const plans: Plan[] = [
        {
            name: "Basic",
            price: "$9.99",
            content: "SD (480p)",
            devices: "1",
            freeTrial: "7 days",
            cancelAnytime: true,
            hdr: false,
            dolbyAtmos: false,
            adFree: false,
            offlineViewing: false,
            familySharing: false
        },
        {
            name: "Standard",
            price: "$12.99",
            content: "HD (1080p)",
            devices: "2",
            freeTrial: "7 days",
            cancelAnytime: true,
            hdr: false,
            dolbyAtmos: true,
            adFree: true,
            offlineViewing: true,
            familySharing: false
        },
        {
            name: "Premium",
            price: "$14.99",
            content: "4K Ultra HD",
            devices: "4",
            freeTrial: "14 days",
            cancelAnytime: true,
            hdr: true,
            dolbyAtmos: true,
            adFree: true,
            offlineViewing: true,
            familySharing: true
        }
    ];

    const features: PlanFeature[] = [
        { name: "Price", key: "price" },
        { name: "Content", key: "content" },
        { name: "Devices", key: "devices" },
        { name: "Free Trial", key: "freeTrial" },
        { name: "Cancel Anytime", key: "cancelAnytime" },
        { name: "HDR", key: "hdr" },
        { name: "Dolby Atmos", key: "dolbyAtmos" },
        { name: "Ad-Free", key: "adFree" },
        { name: "Offline Viewing", key: "offlineViewing" },
        { name: "Family Sharing", key: "familySharing" }
    ];

    return (
        <div className={"pb-16 lg:pb-[116px]"}>
            <SiteContainer>
                <div className={"pb-20"}>
                    <div>
                        <h2 className={"text-5xl font-manrope-bold pb-[14px] text-white"}>
                            Compare our plans and find the right one for you
                        </h2>
                        <p className={"grey60 text-lg"}>
                            StreamVibe offers three different plans to fit your needs: Basic, Standard, and Premium. Compare the features of each plan and choose the one that&#39;s right for you.
                        </p>
                    </div>
                </div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="bg-black15 rounded-xl overflow-hidden shadow-lg"
                >
                    <div className="grid grid-cols-4 gap-0">
                        <div className="bg-black15 p-6 border-b border-gray-700">
                            <h3 className="text-lg font-semibold text-white">Features</h3>
                        </div>
                        {plans.map((plan) => (
                            <div
                                key={plan.name}
                                className="bg-black15 p-6 border-b border-gray-700 text-center"
                            >
                                <h3 className="text-xl font-bold text-white">{plan.name}</h3>
                            </div>
                        ))}

                        {/* Feature Rows */}
                        {features.map((feature) => (
                            <React.Fragment key={feature.key}>
                                <div className="p-4 border-b border-gray-700 flex items-center bg-black15">
                                    <span className="text-gray-300 font-medium">{feature.name}</span>
                                </div>

                                {plans.map((plan) => (
                                    <div
                                        key={`${plan.name}-${feature.key}`}
                                        className="p-4 border-b border-gray-700 flex items-center justify-center bg-black20"
                                    >
                                        {typeof plan[feature.key] === 'boolean' ? (
                                            plan[feature.key] ? (
                                                <Check className="text-green-500 h-5 w-5" />
                                            ) : (
                                                <X className="text-red-500 h-5 w-5" />
                                            )
                                        ) : (
                                            <span className="text-gray-200">{plan[feature.key]}</span>
                                        )}
                                    </div>
                                ))}
                            </React.Fragment>
                        ))}

                        <div className="p-4 bg-black15"></div>
                        {plans.map((plan) => (
                            <div
                                key={`${plan.name}-cta`}
                                className="p-4 flex items-center justify-center"
                            >
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className={`px-6 py-3 rounded-lg font-medium ${
                                        plan.name === 'Premium'
                                            ? 'bg-red45 text-white'
                                            : plan.name === 'Standard'
                                                ? 'bg-blue-600 text-white'
                                                : 'bg-gray-600 text-white'
                                    }`}
                                >
                                    Choose {plan.name}
                                </motion.button>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </SiteContainer>
        </div>
    );
};

export default DetailsPlan;