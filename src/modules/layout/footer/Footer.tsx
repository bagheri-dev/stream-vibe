"use client";
import Link from "next/link";
import Image from "next/image";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

export const Footer = () => {
    const currentYear = new Date().getFullYear();

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        }
    };

    return (
        <footer className="bg-black10 text-white pt-12 pb-6">
            <motion.div
                initial="hidden"
                whileInView="visible"
                variants={containerVariants}
                viewport={{ once: true }}
                className="container mx-auto px-4"
            >
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
                    {/* Logo and description */}
                    <motion.div variants={itemVariants} className="lg:col-span-1">
                        <Link href="/" className="flex items-center mb-4">
                            <Image
                                src="/images/logo.webp"
                                alt="MovieLand Logo"
                                width={160}
                                height={50}
                                className="h-10 w-auto"
                            />
                        </Link>
                        <p className="text-gray-400 mb-4">
                            The leading platform for premium movie and TV show content with high quality and unparalleled user experience.
                        </p>
                        <div className="flex space-x-4">
                            {[
                                { icon: <FaFacebook className="text-xl" />, name: "Facebook" },
                                { icon: <FaTwitter className="text-xl" />, name: "Twitter" },
                                { icon: <FaInstagram className="text-xl" />, name: "Instagram" },
                                { icon: <FaYoutube className="text-xl" />, name: "YouTube" },
                                { icon: <FaLinkedin className="text-xl" />, name: "LinkedIn" }
                            ].map((social, index) => (
                                <motion.a
                                    key={index}
                                    href="#"
                                    className="text-gray-400 hover:text-white transition-colors"
                                    whileHover={{ y: -3 }}
                                    aria-label={social.name}
                                >
                                    {social.icon}
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Quick Links */}
                    <motion.div variants={itemVariants}>
                        <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">Quick Links</h3>
                        <ul className="space-y-2">
                            {[
                                { name: "Home", href: "/" },
                                { name: "Movies", href: "/movies" },
                                { name: "TV Shows", href: "/tv-shows" },
                                { name: "Popular", href: "/popular" },
                                { name: "New Releases", href: "/new-releases" }
                            ].map((link, index) => (
                                <li key={index}>
                                    <Link href={link.href} className="text-gray-400 hover:text-white transition-colors">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Categories */}
                    <motion.div variants={itemVariants}>
                        <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">Categories</h3>
                        <ul className="space-y-2">
                            {[
                                { name: "Action", href: "/genre/action" },
                                { name: "Comedy", href: "/genre/comedy" },
                                { name: "Drama", href: "/genre/drama" },
                                { name: "Sci-Fi", href: "/genre/sci-fi" },
                                { name: "Horror", href: "/genre/horror" }
                            ].map((category, index) => (
                                <li key={index}>
                                    <Link href={category.href} className="text-gray-400 hover:text-white transition-colors">
                                        {category.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div variants={itemVariants}>
                        <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">Contact Us</h3>
                        <address className="not-italic text-gray-400 space-y-2">
                            <p>123 Movie Street, Hollywood, CA 90210</p>
                            <p>
                                Phone: <a href="tel:+18005551234" className="hover:text-white">+1 (800) 555-1234</a>
                            </p>
                            <p>
                                Email: <a href="mailto:info@movieland.com" className="hover:text-white">info@movieland.com</a>
                            </p>
                        </address>
                    </motion.div>
                </div>

                {/* Copyright Section */}
                <motion.div
                    variants={itemVariants}
                    className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center"
                >
                    <p className="text-gray-500 text-sm mb-2 md:mb-0">
                        © {currentYear} MovieLand. All rights reserved.
                    </p>
                    <div className="flex space-x-4">
                        <Link href="/privacy" className="text-gray-500 hover:text-white text-sm transition-colors">
                            Privacy Policy
                        </Link>
                        <Link href="/terms" className="text-gray-500 hover:text-white text-sm transition-colors">
                            Terms of Service
                        </Link>
                        <Link href="/cookies" className="text-gray-500 hover:text-white text-sm transition-colors">
                            Cookie Policy
                        </Link>
                    </div>
                </motion.div>
            </motion.div>
        </footer>
    );
};