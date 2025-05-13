import client from "@/apis/client";

const apiKey = process.env.NEXT_PUBLIC_TMDB_API_KEY;

// Popular Movies
export const fetchPopularMoviesList = async (page : number = 1) => {
    try {
        const response = await client.get('/movie/popular', {
            params: {
                api_key: apiKey,
                language: "en-US",
                page
            }
        });
        console.log(response.data.results);
    } catch (error) {
        console.log(error);
    }
}

// Top Rated Movies
export const fetchTopRatedMoviesList = async (page : number = 1) => {
    try {
        const response = await client.get('/movie/top_rated', {
            params: {
                api_key: apiKey,
                language: "en-US",
                page
            }
        });
        console.log(response.data.results);
    } catch (error) {
        console.log(error);
    }
}

// Upcoming Movies
export const fetchUpcomingMoviesList = async (page : number = 1) => {
    try {
        const response = await client.get('/movie/top_rated', {
            params: {
                api_key: apiKey,
                language: "en-US",
                page
            }
        });
        console.log(response.data.results);
    } catch (error) {
        console.log(error);
    }
}