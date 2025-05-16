export const searchMovies = async (query: string) => {
    try {
        const response = await fetch(
            `https://api.themoviedb.org/3/search/movie?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&query=${encodeURIComponent(query)}`
        );

        if (!response.ok) {
            throw new Error('Failed to fetch search results');
        }

        const data = await response.json();
        return data.results || [];
    } catch (error) {
        console.error('Error searching movies:', error);
        return [];
    }
};