"use client"
import Link from "next/link";
import { motion } from "framer-motion";

type IPlan = {
    title: string;
    description: string;
    price: number;
    originalPrice?: number;
    period: "month" | "year";
    discount: number;
    active?: boolean;
}

export const CardPlan = (props: IPlan) => {
    return (
        <motion.div
            whileHover={{ y: -5 }}
            className={`flex flex-col justify-between p-[50px] rounded-[12px] bg-black10 border ${props.active ? "border-red45" : "border-[#262626]"}`}
        >
            <div className={"pb-4"}>
                <h3 className={"text-white font-manrope-bold text-2xl"}>
                    {props.title}
                </h3>
                {props.discount > 0 && (
                    <motion.div
                        initial={{ scale: 0.9 }}
                        animate={{ scale: 1 }}
                        className="inline-block mt-2 px-3 py-1 bg-red45 rounded-md text-white text-sm"
                    >
                        Save {props.discount}%
                    </motion.div>
                )}
            </div>
            <div className={"pb-[50px]"}>
                <p className={"text-lg grey60"}>
                    {props.description}
                </p>
            </div>
            <div className={"mb-[50px]"}>
                <p className={"text-[40px] font-manrope-semibold flex items-center text-white"}>
                    ${props.price}
                    <span className={"text-lg grey60 font-manrope-medium"}>
                        /{props.period}
                    </span>
                </p>
                {props.originalPrice && (
                    <p className="text-lg grey60 line-through">
                        ${props.originalPrice}/month
                    </p>
                )}
            </div>
            <div className={"flex items-center gap-5"}>
                <Link href={"#"}>
                    <button className={"text-white border border-[#262626] rounded-[8px] py-[18px] px-[35px] bg-black08"}>
                        Start Free Trial
                    </button>
                </Link>
                <Link href={"#"}>
                    <motion.button
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        className={"py-[18px] px-[44px] text-lg font-manrope-semibold bg-red45 rounded-xl text-white"}
                    >
                        Choose Plan
                    </motion.button>
                </Link>
            </div>
        </motion.div>
    )
}