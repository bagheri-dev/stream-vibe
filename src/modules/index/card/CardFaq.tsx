import {AccordionContent, AccordionItem, AccordionTrigger} from "@/components/ui/accordion";

type CardFaqProps = {
    id: string;
    item: number;
    asked: string;
    question: string;
}

export const CardFaq = (props: CardFaqProps) => {
    return (
        <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-5 p-4 sm:p-6 lg:p-[34px] border border-gray-800 rounded-lg hover:bg-gray-900 transition-colors duration-200">
            <div className="bg-black12 text-white p-3 sm:p-4 lg:p-5 rounded-lg w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center">
                <span className="text-base sm:text-lg lg:text-xl font-manrope-semibold">
                    {props.id}
                </span>
            </div>
            <div className="grow w-full">
                <AccordionItem value={`item-${props.item}`} className="border-none">
                    <AccordionTrigger className="text-white text-lg sm:text-xl lg:text-[22px] font-manrope-medium hover:no-underline text-left">
                        {props.asked}
                    </AccordionTrigger>
                    <AccordionContent className="text-base sm:text-lg grey60 pt-2">
                        {props.question}
                    </AccordionContent>
                </AccordionItem>
            </div>
        </div>
    )
}