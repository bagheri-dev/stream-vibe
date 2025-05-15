'use client';
import { useQuery } from '@tanstack/react-query';
import { fetchPopularMoviesList } from '@/apis/services/fetchMoviesList';
import { SiteContainer } from '@/lib/SiteContainer';
import { CardMovie } from '@/modules/index/card/CardMovie';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export const PopularMoviesList = () => {

    const { data, isLoading, error } = useQuery({
        queryKey: ['popularMovies'],
        queryFn: async () =>  (await fetchPopularMoviesList()),
    });

    console.log(data)

    if (isLoading) {
        return <div className="p-4 text-center">در حال بارگذاری...</div>;
    }

    if (error) {
        return (
            <div className="p-4 text-center text-red-500">
                خطا: {error.message || 'مشکل در دریافت داده‌ها'}
            </div>
        );
    }

    return (
        <div className={"pb-16 lg:pb-[150px]"}>
            <SiteContainer>
                <div className={"mb-[50px]"}>
                    <h2 className={"text-[38px] font-manrope-bold text-white"}>
                        Popular Movies
                    </h2>
                </div>
                <Swiper
                    modules={[Navigation, Pagination]}
                    spaceBetween={20}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
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
                    className="mySwiper h-[500px]"
                >
                    {data?.map((movie: any, index: number) => (
                        <SwiperSlide key={index}>
                            <CardMovie {...movie} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </SiteContainer>
        </div>
    );
};