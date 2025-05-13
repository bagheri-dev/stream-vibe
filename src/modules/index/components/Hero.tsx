import {FC} from "react";
import {SiteContainer} from "@/lib/SiteContainer";
import {FaPlay} from "react-icons/fa";

export const Hero: FC = () => {
    return (
        <div className={"bg-[url(/images/hero.png)] bg-center bg-cover h-screen"}>
            <SiteContainer>
                <div className={"h-screen flex items-end justify-center"}>
                    <div className={"flex flex-col items-center translate-y-72 gap-[50px]"}>
                        <div className={"text-center"}>
                            <h1 className={"font-manrope-bold text-[28px] md:text-5xl lg:text-[58px] text-white mb-8"}>The Best Streaming Experience</h1>
                            <p className={"lg:max-w-[1096px] text-sm lg:text-lg grey60"}>
                                StreamVibe is the best streaming experience for watching your favorite movies and shows on demand, anytime, anywhere. With StreamVibe, you can enjoy a wide variety of content, including the latest blockbusters, classic movies, popular TV shows, and more. You can also create your own watchlists, so you can easily find the content you want to watch.
                            </p>
                        </div>
                        <div>
                            <button className={"font-manrope-semibold flex items-center gap-x-1 md:text-sm lg:text-lg text-white py-[18px] px-6 bg-red50 rounded-xl"}>
                                <FaPlay className={"size-6 lg:size-7"}/>
                                Start Watching Now
                            </button>
                        </div>
                    </div>
                </div>
            </SiteContainer>
        </div>
    )
}