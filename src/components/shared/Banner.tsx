import { SiteContainer } from "@/lib/SiteContainer";

export const Banner = () => {
    return (
        <div className={"pb-16 lg:pb-[116px]"}>
            <SiteContainer>
                <div className={"flex flex-col lg:flex-row items-center justify-between bg-[url(/images/banner.webp)] bg-center bg-cover py-12 lg:py-[100px] px-6 lg:px-20 rounded-[20px]"}>
                    <div className="text-center lg:text-left mb-6 lg:mb-0">
                        <h2 className={"text-3xl lg:text-5xl pb-[14px] text-white font-manrope-bold"}>
                            Start your free trial today!
                        </h2>
                        <p className={"text-lg text-gray-300"}>
                            This is a clear and concise call to action that encourages users to sign up for a free trial of StreamVibe.
                        </p>
                    </div>
                    <div className="text-center lg:text-left">
                        <button className={"cursor-pointer py-4 px-6 bg-red45 text-white text-lg font-manrope-semibold rounded-xl"}>
                            Start a Free Trial
                        </button>
                    </div>
                </div>
            </SiteContainer>
        </div>
    );
}
