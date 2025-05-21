'use client';
import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { fetchPopularMoviesList } from '@/apis/services/fetchMoviesList';
import { SiteContainer } from '@/lib/SiteContainer';
import { CardMovie } from '@/modules/index/card/CardMovie';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { IMovie } from '@/type/movie.type';

export const PopularMoviesList = () => {
    const { data, isLoading, error }: UseQueryResult<IMovie[], Error> = useQuery({
        queryKey: ['popularMovies'],
        queryFn: async () => await fetchPopularMoviesList(),
    });

    if (isLoading) {
        return <div className="p-4 text-center">Loading...</div>;
    }

    if (error instanceof Error) {
        return (
            <div className="p-4 text-center text-red-500">
                Error: {error.message || 'Problem fetching data'}
            </div>
        );
    }

    return (
        <div className="pb-16 lg:pb-[150px]">
            <SiteContainer>
                <div className="mb-[50px]">
                    <h2 className="text-[38px] font-manrope-bold text-white">
                        Popular Movies
                    </h2>
                </div>
                <Swiper
                    modules={[Navigation, Pagination]}
                    spaceBetween={20}
                    slidesPerView={1}
                    loop={true}
                    pagination={{
                        clickable: true,
                        el: '.movie-custom-pagination',
                    }}
                    navigation={{
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    }}
                    autoplay={{ delay: 200 }}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 30,
                        },
                        1024: {
                            slidesPerView: 4,
                            spaceBetween: 30,
                        },
                    }}
                    className="mySwiper h-[500px] relative"
                >
                    {data?.map((movie: IMovie, index: number) => (
                        <SwiperSlide key={index}>
                            <CardMovie {...movie} />
                        </SwiperSlide>
                    ))}
                    <div className="movie-custom-pagination"></div>
                    <div className="swiper-button-prev -translate-y-6"></div>
                    <div className="swiper-button-next -translate-y-6"></div>
                </Swiper>
            </SiteContainer>
        </div>
    );
};
