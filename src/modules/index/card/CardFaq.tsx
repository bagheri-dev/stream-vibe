import {AccordionContent, AccordionItem, AccordionTrigger} from "@/components/ui/accordion";

type CardFaqProps = {
    id: string;
    item : number;
    asked : string;
    question : string;
}

export const CardFaq = (props : CardFaqProps) => {
    return (
        <div className={"flex items-start gap-x-5 p-[34px]"}>
            <div className={"bg-black12 text-white p-5 rounded-lg"}>
                <span className={"text-xl font-manrope-semibold"}>{props.id}</span>
            </div>
            <div className={"grow"}>
                <AccordionItem value={`item-${props.item}`}>
                    <AccordionTrigger className={"text-white text-[22px] font-manrope-medium"}>{props.asked}</AccordionTrigger>
                    <AccordionContent className={"text-lg grey60"}>
                        {props.question}
                    </AccordionContent>
                </AccordionItem>
            </div>
        </div>
    )
}