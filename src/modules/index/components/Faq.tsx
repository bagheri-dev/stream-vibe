import {SiteContainer} from "@/lib/SiteContainer";
import Link from "next/link";
import {
    Accordion,
} from "@/components/ui/accordion"
import {CardFaq} from "@/modules/index/card/CardFaq";

const FaqData = [
    {   id: "01",
        asked : "What is StreamVibe?",
        questions : "StreamVibe is a streaming service that allows you to watch movies and shows on demand."
    },
    {   id: "02",
        asked : "How much does StreamVibe cost?",
        questions : "StreamVibe is a streaming service that allows you to watch movies and shows on demand."
    },
    {   id: "03",
        asked : "What content is available on StreamVibe?",
        questions : "StreamVibe is a streaming service that allows you to watch movies and shows on demand."
    },
    {   id: "04",
        asked : "How can I watch StreamVibe?",
        questions : "StreamVibe is a streaming service that allows you to watch movies and shows on demand."
    },
    {   id: "05",
        asked : "How do I sign up for StreamVibe?",
        questions : "StreamVibe is a streaming service that allows you to watch movies and shows on demand."
    },
    {   id: "06",
        asked : "What is the StreamVibe free trial?",
        questions : "StreamVibe is a streaming service that allows you to watch movies and shows on demand."
    },
    {   id: "07",
        asked : "How do I contact StreamVibe customer support?",
        questions : "StreamVibe is a streaming service that allows you to watch movies and shows on demand."
    },
    {
        id: "08",
        asked : "What are the StreamVibe payment methods?",
        questions : "StreamVibe is a streaming service that allows you to watch movies and shows on demand."
    },
]

export const Faq = () => {
    return (
        <div className={"pb-16 lg:pb-[116px]"}>
            <SiteContainer>
                <div className={"flex items-center justify-between pb-20"}>
                    <div>
                        <h2 className={"font-manrope-bold text-[38px] text-white"}>Frequently Asked Questions</h2>
                        <p className={"grey60 text-lg"}>Got questions? We&#39;ve got answers! Check out our FAQ section to find answers to the most common questions about StreamVibe.</p>
                    </div>
                    <div>
                        <Link href="#">
                            <button className="cursor-pointer px-6 py-[18px] bg-red45 rounded-lg text-white font-manrope-semibold
                  transition-all duration-300 ease-in-out
                  hover:scale-105 hover:shadow-lg hover:shadow-red45/30
                  active:scale-95 active:shadow-inner
                  focus:outline-none focus:ring-2 focus:ring-red45 focus:ring-opacity-50
                  animate-pulse-once">
                                Ask a Question
                            </button>
                        </Link>
                    </div>
                </div>
                <div>
                    <Accordion type="single" collapsible className="grid grid-cols-2 gap-x-20">
                        {FaqData.map((question , index) => (
                            <CardFaq key={index} item={index} asked={question.asked} question={question.questions} id={question.id} />
                        ))}
                    </Accordion>
                </div>
            </SiteContainer>
        </div>
    )
}