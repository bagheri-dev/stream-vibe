import client from "@/apis/client";

const apiKey = process.env.NEXT_PUBLIC_TMDB_API_KEY;

// Genre List
export const fetchGenreList = async () => {
    try {
        const response = await client.get('/genre/movie/list', {
            params: {
                api_key: apiKey,
                language: "en-US",
            }
        });
        console.log(response.data.genres);
    } catch (error) {
        console.log(error);
    }
}