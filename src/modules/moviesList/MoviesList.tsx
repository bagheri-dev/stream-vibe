'use client';
import { fetchMoviesList } from "@/apis/services/fetchMoviesList";
import { SiteContainer } from "@/lib/SiteContainer";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { useState } from "react";
import { CardMovie } from "../index/card/CardMovie";
import { IMovie } from "@/type/movie.type";

const SkeletonCard = () => (
    <div className="bg-gray-800 p-5 rounded-[12px] animate-pulse shadow-lg">
        <div className="h-80 bg-gray-600 rounded-[12px] mb-4"></div>
        <div className="bg-gray-600 h-6 mt-2 rounded-full"></div>
        <div className="bg-gray-600 h-4 mt-2 rounded-full w-3/4"></div>
    </div>
);

export const MoviesList = () => {
    const [page, setPage] = useState(1); 

    const { data, isLoading, error } = useQuery({
        queryKey: ['Movies', page], 
        queryFn: async () => (await fetchMoviesList(page)), 
    });

    const totalPages = data?.total_pages || 1; 

    const handlePageChange = (newPage: number) => {
        if (newPage > 0 && newPage <= totalPages) {
            setPage(newPage);
        }
    };

    if (error) {
        return (
            <div className="p-4 text-center text-red-500">
                Error: {error.message || 'Problem fetching data'}
            </div>
        );
    }

    return (
        <div className="pb-16 lg:pb-[116px]">
            <div className="w-full h-screen mb-[150px]">
                <Image
                    src="/images/dh0ax3u-fd7638d8-a0d5-4ebe-a4b3-ee3b585d0a00.jpg"
                    alt="Movie Poster"
                    width={300}
                    height={600}
                    className="rounded-lg w-full h-full object-fill"
                    quality={100}
                    unoptimized
                />
            </div>
            <SiteContainer>
                <div className="mb-[50px]">
                    <h2 className="text-[38px] font-manrope-bold text-white">
                        Popular Movies
                    </h2>
                </div>

                <div className="grid grid-cols-4 gap-5">
                    {isLoading
                        ? Array.from({ length: 12 }).map((_, index) => (
                            <SkeletonCard key={index} />
                        ))
                        : data.results.map((movie: IMovie) => (
                            <CardMovie key={movie.id} {...movie} />
                        ))}
                </div>

                <div className="flex justify-center gap-4 mt-6">
                    <button
                        onClick={() => handlePageChange(page - 1)}
                        disabled={page === 1}
                        className="cursor-pointer bg-gray-700 text-white px-4 py-2 rounded-md disabled:bg-gray-500"
                    >
                        Previous
                    </button>
                    <span className="text-white translate-y-2 text-lg font-manrope-semibold">{page} / {totalPages}</span>
                    <button
                        onClick={() => handlePageChange(page + 1)}
                        disabled={page === totalPages}
                        className="cursor-pointer bg-gray-700 text-white px-4 py-2 rounded-md disabled:bg-gray-500"
                    >
                        Next
                    </button>
                </div>
            </SiteContainer>
        </div>
    );
};
