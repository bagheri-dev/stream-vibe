import {SiteContainer} from "@/lib/SiteContainer";
import {BsFillLaptopFill, BsFillPhoneFill, BsHeadsetVr} from "react-icons/bs";
import {CardFeatures} from "@/modules/index/card/CardFeatures";
import {FaGamepad, FaTablet} from "react-icons/fa";
import {IoTv} from "react-icons/io5";

const FeaturesData = [
    {
        title: "Smartphones",
        description : "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store",
        icon : <BsFillPhoneFill className={"size-10"}/>
    },
    {
        title: "Tablet",
        description : "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store",
        icon : <FaTablet className={"size-10"}/>
    },
    {
        title: "Smart TV",
        description : "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store",
        icon : <IoTv className={"size-10"}/>
    },
    {
        title: "Laptops",
        description : "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store",
        icon : <BsFillLaptopFill className={"size-10"}/>
    },
    {
        title: "Gaming Consoles",
        description : "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store",
        icon : <FaGamepad className={"size-10"}/>
    },
    {
        title: "VR Headsets ",
        description : "StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store",
        icon : <BsHeadsetVr className={"size-10"}/>
    },
]

export const Features = () => {
    return (
        <div className={"pb-16 lg:pb-[116px]"}>
            <SiteContainer>
                <div className={"mb-20"}>
                    <h2 className={"text-4xl font-manrope-bold text-white mb-4"}>
                        We Provide you streaming experience across various devices.
                    </h2>
                    <p className={"grey60 text-lg"}>
                        With StreamVibe, you can enjoy your favorite movies and TV shows anytime, anywhere. Our platform is designed to be compatible with a wide range of devices, ensuring that you never miss a moment of entertainment.
                    </p>
                </div>
                <div className={"grid grid-cols-3 gap-[30px]"}>
                    {FeaturesData.map((item, i) => {
                        return <CardFeatures key={i} {...item}  />
                    })}
                </div>
            </SiteContainer>
        </div>
    )
}