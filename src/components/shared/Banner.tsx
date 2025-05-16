import {SiteContainer} from "@/lib/SiteContainer";

export const Banner = () => {
    return (
        <div className={"pb-16 lg:pb-[116px]"}>
            <SiteContainer>
                <div className={"flex items-center justify-between bg-[url(/images/banner.webp)] bg-center bg-cover py-[100px] px-20 rounded-[20px]"}>
                    <div>
                        <h2 className={"text-5xl pb-[14px] text-white font-manrope-bold"}>Start your free trial today!</h2>
                        <p className={"text-lg grey60"}>This is a clear and concise call to action that encourages users to sign up for a free trial of StreamVibe.</p>
                    </div>
                    <div>
                        <button className={"cursor-pointer py-4 px-6 bg-red45 text-white text-lg font-manrope-semibold rounded-xl"}>
                            Start a Free Trail
                        </button>
                    </div>
                </div>
            </SiteContainer>
        </div>
    )
}