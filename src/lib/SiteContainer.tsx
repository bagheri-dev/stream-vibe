import {ReactNode} from "react";
import {ClassValue} from "clsx";
import {cn} from "@/lib/utils";

type SiteContainer = {
    children: ReactNode;
    className?: ClassValue;
}
//eslint-disable-next-line
export const SiteContainer = ({children, className}: SiteContainer) => {
    return (
        <div className={cn('px-4 container 2xl:max-w-[1440px] mx-auto', className)}>
            {children}
        </div>
    )
}