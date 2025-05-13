import Link from "next/link";
import Image from "next/image";

type Props = {
    adult: boolean;
    backdrop_path: string | null;
    genre_ids: number[];
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string | null;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}

const imageUrl = 'https://image.tmdb.org/t/p/w500/';

export const CardUpcomingMovie = (props : Props) => {
    return (
        <Link href={`/movie/${props.id}`}>
            <div className={"bg-black10 p-5 rounded-[12px]"}>
                <div>
                    <Image src={`${imageUrl}${props.poster_path}`} alt={props.original_title} width={244} height={281} />
                </div>
                <div className={"bg-black08 text-center py-1.5 rounded-[51px] border border-[#262626]"}>
                    <h3 className={"grey60"}>Released date<span className={"grey75"}>{props.release_date}</span></h3>
                </div>
            </div>
        </Link>
    )
}