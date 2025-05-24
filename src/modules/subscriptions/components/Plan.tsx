"use client"
import {SiteContainer} from "@/lib/SiteContainer";
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import {CardPlan} from "@/modules/subscriptions/components/card/CardPlan";
import { motion } from "framer-motion";
import { useState } from "react";

const monthlyPlanData = [
    {
        title: "Basic Plan",
        description: "Enjoy an extensive library of movies and shows, featuring a range of content, including recently released titles.",
        price: 9.99,
    },
    {
        title: "Standard Plan",
        description: "Access to a wider selection of movies and shows, including most new releases and exclusive content",
        price: 12.99,
    },
    {
        title: "Premium Plan",
        description: "Access to a widest selection of movies and shows, including all new releases and Offline Viewing",
        price: 14.99,
    },
]

const yearlyPlanData = [
    {
        title: "Basic Plan",
        description: "Enjoy an extensive library of movies and shows, featuring a range of content, including recently released titles.",
        price: 7.99,
        originalPrice: 9.99,
    },
    {
        title: "Standard Plan",
        description: "Access to a wider selection of movies and shows, including most new releases and exclusive content",
        price: 10.99,
        originalPrice: 12.99,
    },
    {
        title: "Premium Plan",
        description: "Access to a widest selection of movies and shows, including all new releases and Offline Viewing",
        price: 12.99,
        originalPrice: 14.99,
    },
]

const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
}

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
}

export const Plan = () => {
    const [activeTab, setActiveTab] = useState("monthly");

    return (
        <div className={"pt-36 pb-16 lg:pb-[116px]"}>
            <SiteContainer>
                <div>
                    <Tabs defaultValue="monthly" className="w-full" onValueChange={(value) => setActiveTab(value)}>
                        <div className={"flex items-center justify-between flex-wrap lg:flex-nowrap gap-5 mb-20"}>
                            <div>
                                <h2 className={"text-5xl font-manrope-bold pb-[14px] text-white"}>
                                    Choose the plan that&#39;s right for you
                                </h2>
                                <p className={"grey60 text-lg"}>
                                    Join StreamVibe and select from our flexible subscription options tailored to suit your viewing preferences. Get ready for non-stop entertainment!
                                </p>
                            </div>
                            <div>
                                <TabsList className="w-full p-2.5 bg-black06">
                                    <TabsTrigger className={"text-lg font-manrope-medium"} value="monthly">Monthly</TabsTrigger>
                                    <TabsTrigger className={"text-lg font-manrope-medium"} value="yearly">Yearly</TabsTrigger>
                                </TabsList>
                            </div>
                        </div>
                        <TabsContent value="monthly">
                            <motion.div
                                variants={containerVariants}
                                initial="hidden"
                                animate="show"
                                className={"grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-[30px]"}
                            >
                                {monthlyPlanData.map((item, index) => (
                                    <motion.div key={index} variants={itemVariants}>
                                        <CardPlan
                                            {...item}
                                            period="month"
                                            discount={0}
                                            active={activeTab === "monthly"}
                                        />
                                    </motion.div>
                                ))}
                            </motion.div>
                        </TabsContent>
                        <TabsContent value="yearly">
                            <motion.div
                                variants={containerVariants}
                                initial="hidden"
                                animate="show"
                                className={"grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-[30px]"}
                            >
                                {yearlyPlanData.map((item, index) => (
                                    <motion.div key={index} variants={itemVariants}>
                                        <CardPlan
                                            {...item}
                                            period="year"
                                            discount={Math.round(((item.originalPrice - item.price) / item.originalPrice) * 100)}
                                            active={activeTab === "yearly"}
                                        />
                                    </motion.div>
                                ))}
                            </motion.div>
                        </TabsContent>
                    </Tabs>
                </div>
            </SiteContainer>
        </div>
    )
}