'use client';
import { SiteContainer } from "@/lib/SiteContainer";
import Image from "next/image";
import Link from "next/link";
import { CiSearch, CiCircleRemove } from "react-icons/ci";
import { IoNotificationsOutline } from "react-icons/io5";
import { IoMenu, IoClose } from "react-icons/io5";
import { useState, useEffect, useRef } from "react";
import { useRouter, usePathname } from "next/navigation";
import { searchMovies } from "@/apis/services/movieService";

const Menu = [
    { name: "Home", src: "/" },
    { name: "Movies & Shows", src: "/movie" },
    { name: "Support", src: "/support" },
    { name: "Subscriptions", src: "/subscriptions" },
];

export const Header = () => {
    const router = useRouter();
    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [hasScrolled, setHasScrolled] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [searchResults, setSearchResults] = useState<any[]>([]);
    const [isSearching, setIsSearching] = useState(false);
    const searchRef = useRef<HTMLDivElement>(null);

    const isActive = (menuPath: string) => {
        if (menuPath === "/") {
            return pathname === menuPath;
        }
        return pathname.startsWith(menuPath);
    };

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const toggleSearch = () => {
        setIsSearchOpen(!isSearchOpen);
        if (!isSearchOpen) {
            setSearchQuery("");
            setSearchResults([]);
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            setHasScrolled(scrollTop > 10);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
                setIsSearchOpen(false);
                setSearchResults([]);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleSearch = async (query: string) => {
        setSearchQuery(query);
        if (query.length > 2) {
            setIsSearching(true);
            try {
                const results = await searchMovies(query);
                setSearchResults(results);
            } catch (error) {
                console.error("Search error:", error);
                setSearchResults([]);
            } finally {
                setIsSearching(false);
            }
        } else {
            setSearchResults([]);
        }
    };

    const handleMovieSelect = (movieId: number) => {
        router.push(`/movie/${movieId}`);
        setIsSearchOpen(false);
        setSearchQuery("");
        setSearchResults([]);
    };

    return (
        <div className={`fixed z-50 top-0 left-0 right-0 transition-all duration-300 ${hasScrolled ? 'backdrop-blur-sm shadow-lg' : 'bg-transparent'
            }`}>
            <SiteContainer>
                <div className="flex items-center justify-between">
                    <div className="flex-shrink-0">
                        <Image
                            src="/images/logo.webp"
                            alt="logo"
                            width={150}
                            height={45}
                            className="md:w-[200px] md:h-[60px]"
                            priority
                        />
                    </div>

                    <div className="hidden lg:block">
                        <nav>
                            <ul className={`flex items-center p-2.5 rounded-[12px] transition-all duration-300 ${hasScrolled ? 'border-gray-800' : 'border-[#1F1F1F] bg-black/60'
                                }`}>
                                {Menu.map((item) => (
                                    <Link key={item.name} href={item.src}>
                                        <li className={`py-[14px] px-6 transition-colors duration-200 ${isActive(item.src) ? 'text-white font-semibold' : 'text-gray-300 hover:text-white'
                                            }`}>
                                            {item.name}
                                            {isActive(item.src) && (
                                                <div className="h-1 w-full bg-red-500 mt-1 rounded-full"></div>
                                            )}
                                        </li>
                                    </Link>
                                ))}
                            </ul>
                        </nav>
                    </div>

                    <div className="flex items-center gap-x-4 md:gap-x-[14px] text-white">
                        <div className="relative" ref={searchRef}>
                            <button onClick={toggleSearch} className="focus:outline-none">
                                <CiSearch className="text-xl cursor-pointer hover:text-gray-300 transition-colors size-6" />
                            </button>
                            <div
                                className={`absolute right-0 top-10 w-64 bg-[#1F1F1F] rounded-lg overflow-hidden transition-all duration-300 ease-in-out ${isSearchOpen ? "opacity-100 max-h-96" : "opacity-0 max-h-0"
                                    }`}
                            >
                                <div className="relative p-2">
                                    <input
                                        type="text"
                                        placeholder="Search movies..."
                                        className="w-full p-3 bg-gray-800 text-white border-none focus:outline-none rounded-lg pr-10"
                                        value={searchQuery}
                                        onChange={(e) => handleSearch(e.target.value)}
                                    />
                                    {searchQuery && (
                                        <button
                                            onClick={() => {
                                                setSearchQuery("");
                                                setSearchResults([]);
                                            }}
                                            className="absolute right-3 top-3 text-gray-400 hover:text-white"
                                        >
                                            <CiCircleRemove className="text-lg" />
                                        </button>
                                    )}
                                </div>

                                {isSearching && (
                                    <div className="p-3 text-center text-gray-400">Searching...</div>
                                )}

                                {!isSearching && searchResults.length > 0 && (
                                    <div className="max-h-60 overflow-y-auto">
                                        {searchResults.map((movie) => (
                                            <div
                                                key={movie.id}
                                                className="p-3 hover:bg-gray-700 cursor-pointer border-t border-gray-800 flex items-center gap-3"
                                                onClick={() => handleMovieSelect(movie.id)}
                                            >
                                                {movie.poster_path && (
                                                    <div className="w-10 h-15 flex-shrink-0">
                                                        <Image
                                                            src={`https://image.tmdb.org/t/p/w92${movie.poster_path}`}
                                                            alt={movie.title}
                                                            width={46}
                                                            height={69}
                                                            className="rounded-sm"
                                                            unoptimized
                                                        />
                                                    </div>
                                                )}
                                                <div>
                                                    <div className="font-medium">{movie.title}</div>
                                                    {movie.release_date && (
                                                        <div className="text-xs text-gray-400">
                                                            {new Date(movie.release_date).getFullYear()}
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}

                                {!isSearching && searchQuery.length > 2 && searchResults.length === 0 && (
                                    <div className="p-3 text-center text-gray-400">No results found</div>
                                )}
                            </div>
                        </div>

                        <Link href="/notifications">
                            <IoNotificationsOutline className="text-xl hover:text-gray-300 transition-colors size-6" />
                        </Link>

                        <button className="lg:hidden focus:outline-none" onClick={toggleMenu}>
                            {isMenuOpen ? (
                                <IoClose className="text-xl hover:text-gray-300 transition-colors" />
                            ) : (
                                <IoMenu className="text-xl hover:text-gray-300 transition-colors" />
                            )}
                        </button>
                    </div>
                </div>

                <div
                    className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${isMenuOpen ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"
                        }`}
                >
                    <nav>
                        <ul className={`flex flex-col rounded-[12px] border-4 p-4 ${hasScrolled ? 'border-gray-800' : 'border-[#1F1F1F] bg-black/60'
                            }`}>
                            {Menu.map((item) => (
                                <Link key={item.name} href={item.src} onClick={() => setIsMenuOpen(false)}>
                                    <li className={`py-3 px-4 transition-colors duration-200 border-b border-[#1F1F1F] last:border-b-0 ${isActive(item.src)
                                            ? 'text-white font-semibold'
                                            : 'text-gray-300 hover:text-white'
                                        }`}>
                                        {item.name}
                                        {isActive(item.src) && (
                                            <div className="h-1 w-full bg-red-500 mt-1 rounded-full"></div>
                                        )}
                                    </li>
                                </Link>
                            ))}
                        </ul>
                    </nav>
                </div>
            </SiteContainer>
        </div>
    );
};
