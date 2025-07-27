import { useQuery } from "@tanstack/react-query";
import fetchFeedVideos from "../Services/fetchFeedVideos";
import FeedCard from "../Components/Card/FeedCard/FeedCard";

function Feed() {

    // to fetch data
    const { data, isLoading, isError, error } = useQuery({
        queryKey: ["videos"],
        queryFn: fetchFeedVideos,
        cacheTime: 1000 * 60 * 2,
        staleTime: 1000 * 60 * 2,
    });

    const videos = data?.items || [];

    if (isLoading) return <div>Loading...</div>
    if (isError) return <div> Error: {error}</div>

    return (
        <div className="grid items-center justify-center w-full h-full grid-cols-1 gap-2 p-4 md:grid-cols-2 lg:grid-cols-3">
            {videos.map((video) => (
                <FeedCard
                    video={video}
                    videos={videos}
                    key={video.id}
                />
            ))}
        </div>
    );
}

export default Feed;