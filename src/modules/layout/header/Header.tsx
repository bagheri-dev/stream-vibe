"use client";
import { SiteContainer } from "@/lib/SiteContainer";
import Image from "next/image";
import Link from "next/link";
import { CiSearch } from "react-icons/ci";
import { IoNotificationsOutline } from "react-icons/io5";
import { IoMenu, IoClose } from "react-icons/io5";
import { useState } from "react";

const Menu = [
    { name: "Home", src: "/" },
    { name: "Movies & Shows", src: "/movies" },
    { name: "Support", src: "/support" },
    { name: "Subscriptions", src: "/subscriptions" },
];

export const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const toggleSearch = () => setIsSearchOpen(!isSearchOpen);

    return (
        <div className="fixed z-50 top-0 left-0 right-0 py-4 md:py-6">
            <SiteContainer>
                <div className="flex items-center justify-between">
                    <div className="flex-shrink-0">
                        <Image src="/images/logo.webp" alt="logo" width={150} height={45} className="md:w-[200px] md:h-[60px]" />
                    </div>

                    <div className="hidden md:block">
                        <nav>
                            <ul className="flex items-center p-2.5 bg-black/60 rounded-[12px] border-4 border-[#1F1F1F]">
                                {Menu.map((item) => (
                                    <Link key={item.name} href={item.src}>
                                        <li className="py-[14px] px-6 text-gray-300 hover:text-white transition-colors duration-200">
                                            {item.name}
                                        </li>
                                    </Link>
                                ))}
                            </ul>
                        </nav>
                    </div>

                    <div className="flex items-center gap-x-4 md:gap-x-[14px] text-white">
                        <div className="relative">
                            <button onClick={toggleSearch} className="focus:outline-none">
                                <CiSearch className="size-6" />
                            </button>
                            <div
                                className={`absolute right-0 top-10 w-64 bg-[#1F1F1F] rounded-lg overflow-hidden transition-all duration-300 ease-in-out ${
                                    isSearchOpen ? "opacity-100 max-h-20" : "opacity-0 max-h-0"
                                }`}
                            >
                                <input
                                    type="text"
                                    placeholder="Search..."
                                    className="w-full p-3 bg-transparent text-white border-none focus:outline-none"
                                />
                            </div>
                        </div>

                        <Link href="/">
                            <IoNotificationsOutline className="size-6" />
                        </Link>

                        <button className="md:hidden focus:outline-none" onClick={toggleMenu}>
                            {isMenuOpen ? <IoClose className="size-6" /> : <IoMenu className="size-6" />}
                        </button>
                    </div>
                </div>

                <div
                    className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
                        isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    }`}
                >
                    <nav className="mt-4">
                        <ul className="flex flex-col bg-black/60 rounded-[12px] border-4 border-[#1F1F1F] p-4">
                            {Menu.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.src}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    <li className="py-3 px-4 text-gray-300 hover:text-white transition-colors duration-200 border-b border-[#1F1F1F] last:border-b-0">
                                        {item.name}
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