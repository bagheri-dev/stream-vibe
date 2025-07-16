import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { IMovie } from "@/type/movie.type";

const imageUrl = 'https://image.tmdb.org/t/p/w500';

export const CardMovie = (props: IMovie) => {
    const posterUrl = props.poster_path ? `${imageUrl}${props.poster_path}` : '/placeholder-movie.jpg';

    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        },
        hover: {
            y: -5,
            transition: {
                duration: 0.2,
                ease: "easeOut"
            }
        }
    };

    const infoVariants = {
        hover: {
            backgroundColor: "rgba(38, 38, 38, 0.8)",
            transition: {
                duration: 0.3
            }
        }
    };

    return (
        <Link href={`/movie/${props.id}`} passHref>
            <motion.div
                className="bg-black10 p-5 rounded-[12px] overflow-hidden shadow-lg cursor-pointer"
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
            >
                <div className="relative mb-2 h-[450px] overflow-hidden rounded-[12px]">
                    <Image
                        src={posterUrl}
                        alt={props.original_title}
                        fill
                        className="object-fill"
                        priority
                        unoptimized
                    />

                    <div className="absolute top-2 right-2 bg-black/80 text-white text-sm font-bold px-2 py-1 rounded-full flex items-center">
                        <span className="text-yellow-400 mr-1">★</span>
                        {props.vote_average.toFixed(1)}
                    </div>

                    <motion.div
                        className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent opacity-0 flex flex-col justify-end"
                        whileHover={{ opacity: 1 }}
                    >
                        <div className="p-3 text-white">
                            <p className="text-xs line-clamp-3 mb-2">{props.overview}</p>
                            <div className="flex justify-between items-center text-xs">
                                <span>{props.release_date ? new Date(props.release_date).getFullYear() : 'N/A'}</span>
                                <span className="capitalize">{props.original_language}</span>
                            </div>
                        </div>
                    </motion.div>
                </div>

                <motion.div
                    className="bg-black08 text-center py-1.5 rounded-[51px] border border-[#262626]"
                    variants={infoVariants}
                >
                    <h3 className="text-gray-300 font-medium line-clamp-1">{props.title}</h3>
                    <p className="text-gray-500 text-xs mt-1">
                        {props.vote_count} votes
                    </p>
                </motion.div>
            </motion.div>
        </Link>
    );
};