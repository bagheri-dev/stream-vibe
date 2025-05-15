import Link from "next/link";
import Image from "next/image";
import { Imovie } from "@/type/movie.type";
import { motion } from "framer-motion";

const imageUrl = "https://image.tmdb.org/t/p/w500/";

export const CardUpcomingMovie = (props: Imovie) => {
  return (
    <Link href={`/movie/${props.id}`}>
      <motion.div
        className="bg-black10 p-5 rounded-[12px] shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div>
          <Image
            className="rounded-[12px] transition-transform duration-300 ease-in-out"
            src={`${imageUrl}${props.backdrop_path}`}
            alt={props.original_title}
            width={244}
            height={281}
            unoptimized
          />
        </div>
        <div className="bg-black08 text-center py-1.5 rounded-[51px] border border-[#262626] mt-4">
          <h3 className="text-white text-lg font-semibold">
            Released date
            <span className="text-gray-500 text-sm">{props.release_date}</span>
          </h3>
        </div>
      </motion.div>
    </Link>
  );
};
