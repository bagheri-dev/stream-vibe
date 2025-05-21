import {Hero} from "@/modules/index/components/Hero";
import {PopularMoviesList} from "@/modules/index/components/PopularMoviesList";
import {Features} from "@/modules/index/components/Features";
import {Banner} from "@/components/shared/Banner";
import {TopMoviesList} from "@/modules/index/components/TopMovies";
import {Faq} from "@/modules/index/components/Faq";

export const Index = () => {
    return (
        <>
            <Hero />
            <PopularMoviesList />
            <Features />
            <Faq />
            <TopMoviesList />
            <Banner />
        </>
    )
}