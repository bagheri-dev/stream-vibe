import type { Metadata } from 'next';
import { MoviesList } from '@/modules/moviesList/MoviesList';

export const metadata: Metadata = {
    title: 'Movies & Shows | StreamVibe',
    description: 'Explore a vast collection of movies and TV shows on StreamVibe. Find popular, trending, and new releases to stream in high quality.',
    openGraph: {
        title: 'Movies & Shows | StreamVibe',
        description: 'Explore a vast collection of movies and TV shows on StreamVibe. Find popular, trending, and new releases to stream in high quality.',
        images: [
            {
                url: 'https://streom-vibe.vercel.app/images/logo.webp',
                width: 1200,
                height: 630,
                alt: 'StreamVibe Movies & Shows',
            },
        ],
    },
};

export default function MovieList() {
    return (
        <>
            <MoviesList />
        </>
    );
}