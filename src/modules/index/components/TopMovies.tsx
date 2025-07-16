"use client"
import {useQuery} from "@tanstack/react-query";
import {fetchTopMoviesList} from "@/apis/services/fetchMoviesList";
import {SiteContainer} from "@/lib/SiteContainer";
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Pagination} from "swiper/modules";
import { CardMovie } from "../card/CardMovie";
import { IMovie } from "@/type/movie.type";

export const TopMoviesList = () => {

    const { data, isLoading, error } = useQuery({
        queryKey: ['TopMovies'],
        queryFn: async () =>  (await fetchTopMoviesList()),
    });


    if (isLoading) {
        return <div className="p-4 text-center">Loading...</div>;
    }

    if (error) {
        return (
            <div className="p-4 text-center text-red-500">
                Error: {error.message || 'Problem fetching data'}
            </div>
        );
    }

    return (
        <div className={"pb-16 lg:pb-[150px]"}>
            <SiteContainer>
                <div className={"mb-[50px]"}>
                    <h2 className={"text-[38px] font-manrope-bold text-white"}>
                        Top Movies
                    </h2>
                </div>
                <Swiper
                    modules={[Navigation, Pagination]}
                    spaceBetween={20}
                    slidesPerView={1}
                    pagination={{
                        clickable: true,
                        el: '.movie-custom-pagination',
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 3,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 4,
                            spaceBetween: 30,
                        },
                        1024: {
                            slidesPerView: 5,
                            spaceBetween: 30,
                        },
                    }}
                    className="mySwiper h-[600px]"
                >
                    {data?.map((movie: IMovie, index: number) => (
                        <SwiperSlide key={index}>
                            <CardMovie {...movie} />
                        </SwiperSlide>
                    ))}
                    <div className="movie-custom-pagination"></div>
                </Swiper>
            </SiteContainer>
        </div>
    );
}