import client from "@/apis/client";

const apiKey = process.env.NEXT_PUBLIC_TMDB_API_KEY;

// Movies Details
export const fetchPopularMoviesDetails = async (id : number) => {

    try {
        const response = await client.get(`/movie/${id}`, {
            params: {
                api_key: apiKey,
                language: "en-US",
            }
        });
        return response.data;
    } catch (error) {
        console.log(error);
    }
}