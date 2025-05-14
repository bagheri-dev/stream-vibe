"use client"
import { SiteContainer } from "@/lib/SiteContainer";
import { useParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { fetchPopularMoviesDetails } from "@/apis/services/fetchMoviesDetails";
import { FaStar, FaCalendarAlt, FaLanguage, FaMoneyBillWave, FaFilm } from "react-icons/fa";
import { IoMdTime } from "react-icons/io";
import { RiMovie2Line } from "react-icons/ri";
import Image from "next/image";
import { GenrePill } from "./components/GenrePill";
import { ProductionCompany } from "./components/ProductionCompany";
import { LoadingSpinner } from "./components/LoadingSpinner";
import {Banner} from "@/components/shared/Banner";

interface MovieDetails {
    adult: boolean;
    backdrop_path: string;
    belongs_to_collection: null;
    budget: number;
    genres: {
        id: number;
        name: string;
    }[];
    homepage: string;
    id: number;
    imdb_id: string;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    production_companies: {
        id: number;
        logo_path: string | null;
        name: string;
        origin_country: string;
    }[];
    production_countries: {
        iso_3166_1: string;
        name: string;
    }[];
    release_date: string;
    revenue: number;
    runtime: number;
    spoken_languages: {
        english_name: string;
        iso_639_1: string;
        name: string;
    }[];
    status: string;
    tagline: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}

export const Details = () => {
    const { id } = useParams();
    const validId = Number(id);

    const { data, isLoading, error } = useQuery<MovieDetails>({
        queryKey: ['popularMovies', validId],
        queryFn: async () => await fetchPopularMoviesDetails(validId),
    });

    if (isLoading) return (
        <div className="flex items-center justify-center h-screen">
            <LoadingSpinner size="lg" />
        </div>
    );

    if (error) return <div className="text-red-500 text-center py-10">Error loading movie details</div>;

    if (!data) return null;

    const formatRuntime = (minutes: number): string => {
        const hours = Math.floor(minutes / 60);
        const mins = minutes % 60;
        return `${hours}h ${mins}m`;
    };

    const formatCurrency = (amount: number): string => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            maximumFractionDigits: 0
        }).format(amount);
    };

    return (
        <div className="bg-gray-900 text-white min-h-screen">
            <div className="relative h-[70vh] w-full overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/70 to-transparent z-10" />
                {data.backdrop_path && (
                    <Image
                        src={`https://image.tmdb.org/t/p/original${data.backdrop_path}`}
                        alt={data.title}
                        fill
                        className="object-cover"
                        priority
                        quality={100}
                        unoptimized
                    />
                )}

                <div className="relative z-20 h-full flex items-end pb-16">
                    <SiteContainer>
                        <div className="flex flex-col md:flex-row gap-8 items-start">
                            {data.poster_path && (
                                <div className="w-64 h-96 shrink-0 rounded-xl overflow-hidden shadow-2xl border-2 border-gray-700">
                                    <Image
                                        src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
                                        alt={data.title}
                                        width={500}
                                        height={750}
                                        className="w-full h-full object-cover"
                                        priority
                                        unoptimized
                                    />
                                </div>
                            )}

                            <div className="flex-1">
                                <h1 className="text-4xl md:text-5xl font-bold mb-2">{data.title}</h1>
                                <p className="text-xl italic text-gray-300 mb-4">{data.tagline}</p>

                                <div className="flex flex-wrap gap-3 mb-6">
                                    {data.genres.map(genre => (
                                        <GenrePill key={genre.id} genre={genre.name} />
                                    ))}
                                </div>

                                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                                    <div className="flex items-center gap-2">
                                        <FaStar className="text-yellow-400" />
                                        <span>{data.vote_average.toFixed(1)}/10 ({data.vote_count} votes)</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <IoMdTime className="text-blue-400" />
                                        <span>{formatRuntime(data.runtime)}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <FaCalendarAlt className="text-red-400" />
                                        <span>{new Date(data.release_date).toLocaleDateString()}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <FaLanguage className="text-green-400" />
                                        <span>{data.original_language.toUpperCase()}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <FaMoneyBillWave className="text-purple-400" />
                                        <span>{formatCurrency(data.budget)}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <RiMovie2Line className="text-pink-400" />
                                        <span>{data.status}</span>
                                    </div>
                                </div>

                                <div className="flex gap-4 mb-8">
                                    <button className="bg-red-600 hover:bg-red-700 px-6 py-2 rounded-lg font-semibold flex items-center gap-2 transition">
                                        <FaFilm /> Watch Trailer
                                    </button>
                                    <button className="bg-gray-700 hover:bg-gray-600 px-6 py-2 rounded-lg font-semibold transition">
                                        Add to Watchlist
                                    </button>
                                </div>
                            </div>
                        </div>
                    </SiteContainer>
                </div>
            </div>

            <SiteContainer className="py-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2">
                        <h2 className="text-2xl font-bold mb-4">Overview</h2>
                        <p className="text-gray-300 leading-relaxed mb-8">{data.overview}</p>

                        <div className="bg-gray-800 rounded-xl p-6 mb-8">
                            <h3 className="text-xl font-semibold mb-4 border-b border-gray-700 pb-2">Production Details</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <h4 className="font-medium text-gray-400 mb-2">Production Companies</h4>
                                    <div className="flex flex-wrap gap-3">
                                        {data.production_companies.map(company => (
                                            <ProductionCompany
                                                key={company.id}
                                                name={company.name}
                                                logoPath={company.logo_path}
                                            />
                                        ))}
                                    </div>
                                </div>
                                <div>
                                    <h4 className="font-medium text-gray-400 mb-2">Production Countries</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {data.production_countries.map(country => (
                                            <span key={country.iso_3166_1} className="bg-gray-700 px-3 py-1 rounded-full text-sm">
                                                {country.name}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <div>
                                    <h4 className="font-medium text-gray-400 mb-2">Spoken Languages</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {data.spoken_languages.map(language => (
                                            <span key={language.iso_639_1} className="bg-gray-700 px-3 py-1 rounded-full text-sm">
                                                {language.english_name}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <div className="bg-gray-800 rounded-xl p-6">
                            <h3 className="text-xl font-semibold mb-4">External Links</h3>
                            <div className="space-y-3">
                                {data.homepage && (
                                    <a
                                        href={data.homepage}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition"
                                    >
                                        Official Website
                                    </a>
                                )}
                                {data.imdb_id && (
                                    <a
                                        href={`https://www.imdb.com/title/${data.imdb_id}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 text-yellow-400 hover:text-yellow-300 transition"
                                    >
                                        IMDB Page
                                    </a>
                                )}
                            </div>
                        </div>

                        <div className="bg-gray-800 rounded-xl p-6">
                            <h3 className="text-xl font-semibold mb-4">Statistics</h3>
                            <div className="space-y-4">
                                <div>
                                    <div className="flex justify-between text-sm text-gray-400 mb-1">
                                        <span>Popularity</span>
                                        <span>{Math.round(data.popularity)}</span>
                                    </div>
                                    <div className="w-full bg-gray-700 rounded-full h-2">
                                        <div
                                            className="bg-blue-500 h-2 rounded-full"
                                            style={{ width: `${Math.min(data.popularity, 100)}%` }}
                                        ></div>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex justify-between text-sm text-gray-400 mb-1">
                                        <span>Revenue</span>
                                        <span>{formatCurrency(data.revenue)}</span>
                                    </div>
                                    <div className="w-full bg-gray-700 rounded-full h-2">
                                        <div
                                            className="bg-green-500 h-2 rounded-full"
                                            style={{ width: `${Math.min((data.revenue / data.budget) * 100, 100)}%` }}
                                        ></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </SiteContainer>
            <Banner />
        </div>
    );
};