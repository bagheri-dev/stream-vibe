import React from "react";

type IFeatures = {
    icon : React.ReactNode;
    title : string;
    description : string;
}

export const CardFeatures = ({icon , title , description} : IFeatures) => {
    return (
        <div className={"p-[50px] bg-[#0F0F0F] border border-[#262626] rounded-[12px]"}>
            <div className={"flex items-center justify-start gap-x-4 mb-[30px]"}>
                <div className={"p-4 bg-black08 rounded-[12px] red45"}>
                    {icon}
                </div>
                <div>
                    <h3 className={"text-2xl font-manrope-semibold text-white"}>{title}</h3>
                </div>
            </div>
            <div>
                <p className={"grey60 text-lg"}>
                    {description}
                </p>
            </div>
        </div>
    )
}