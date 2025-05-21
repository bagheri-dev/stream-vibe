import {SiteContainer} from "@/lib/SiteContainer";
import {Form} from "@/modules/support/components/Form";
import Image from "next/image";
import {Faq} from "@/modules/index/components/Faq";
import {Banner} from "@/components/shared/Banner";

export const Support = () => {
    return (
        <div className={"pt-[115px]"}>
            <SiteContainer>
                <div className={"flex items-center justify-between flex-wrap lg:flex-nowrap pb-16 lg:pb-[150px]"}>
                    <div className={"space-y-4"}>
                        <h1 className={"text-white text-lg lg:text-5xl font-manrope-bold"}>
                            Welcome to our support page!
                        </h1>
                        <p className={"grey60 text-lg"}>
                            We&#39;re here to help you with any problems you may be having with our product.
                        </p>
                        <div>
                            <Image src={"/images/support-image.png"} alt={"support"} width={533} height={477} />
                        </div>
                    </div>
                    <div>
                        <Form />
                    </div>
                </div>
                <Faq />
                <Banner />
            </SiteContainer>
        </div>
    )
}