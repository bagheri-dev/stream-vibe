import {SiteContainer} from "@/lib/SiteContainer";
import {Plan} from "@/modules/subscriptions/components/Plan";
import DetailsPlan from "@/modules/subscriptions/components/DetailsPlan";
import {Banner} from "@/components/shared/Banner";

export const Subscriptions = () => {
    return (
        <div>
            <SiteContainer>
                <Plan/>
                <DetailsPlan />
                <Banner />
            </SiteContainer>
        </div>
    )
}