import { API_KEY } from "../Helpers/apiKey";
import { axiosInstance } from "../Helpers/axiosInstance";

export default async function fetchFeedVideos() {
    try {
        const response = await axiosInstance.get(`/videos?part=snippet,contentDetails,statistics&chart=mostPopular&regionCode=IN&maxResults=6&key=${API_KEY}`);
        return response.data;
    } catch (error) {
        console.error("Error", error.message);
    }
}