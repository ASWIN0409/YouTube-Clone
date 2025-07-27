import { formatDistanceToNow } from "date-fns";
import { useEffect, useState } from "react";
import { API_KEY } from "../../../Helpers/apiKey";
import { axiosInstance } from "../../../Helpers/axiosInstance";

function FeedCard({ video, videos }) {

    // function to format the views count 
    function formatViewCount(views) {
        views = Number(views);

        if (views >= 1_000_000_000) {
            return (views / 1_000_000_000).toFixed(1).replace(/\.0$/, '') + 'B';
        } else if (views >= 1_000_000) {
            return (views / 1_000_000).toFixed(1).replace(/\.0$/, '') + 'M';
        } else if (views >= 1_000) {
            return (views / 1_000).toFixed(1).replace(/\.0$/, '') + 'K';
        } else {
            return views.toString();
        }
    }

    // function to format the time the video was uploaded
    function getTimeAgo(dateString) {
        return formatDistanceToNow(new Date(dateString), { addSuffix: true });
    }

    const [channelImages, setChannelImages] = useState({}); // state to hold channel images

    // function to fetch channel image for each channels
    async function fetchChannelImage(channelId) {
        if (channelImages[channelId]) return;
        try {
            const response = await axiosInstance.get(`/channels?part=snippet&id=${channelId}&key=${API_KEY}`);
            const imageUrl = response.data.items[0].snippet.thumbnails.default.url;

            setChannelImages(prev => ({
                ...prev,
                [channelId]: imageUrl,
            }));
        } catch (error) {
            console.error("Error", error.message);
        }
    }

    useEffect(() => {
        videos.forEach(video => {
            fetchChannelImage(video.snippet.channelId);
        });
    }, [videos]);

    return (
        <div
            className="flex flex-col justify-start w-full h-full gap-2 p-2"
        >
            <img
                className="object-cover w-[500px] h-[250px] rounded-xl"
                src={video.snippet.thumbnails.medium.url}
                alt={video.snippet.title}
            />
            <div className="flex gap-2">
                <img
                    src={channelImages[video.snippet.channelId]}
                    className="rounded-full w-9 h-9"
                />
                <h4 className="font-bold text-gray-200">{video.snippet.title}</h4>
            </div>
            <div className="ml-12">
                <h2 className="text-gray-400">{video.snippet.channelTitle}</h2>
                <div className="flex gap-2">
                    <p className="text-sm text-gray-400">{formatViewCount(video.statistics.viewCount)} &bull; {getTimeAgo(video.snippet.publishedAt)}</p>
                </div>
            </div>
        </div>
    );
}

export default FeedCard;