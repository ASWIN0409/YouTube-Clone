import ShortsCard from "../Components/Card/ShortsCard";
import SmallCard from "../Components/Card/SmallCard";
import VideoCard from "../Components/Card/VideoCard";

function VideoPage() {
    return (
        <div className="h-full mx-auto w-[90vw] border flex ">
            <div className="basis-[70%] border">
                <VideoCard />
            </div>
            <div className="flex flex-col basis-[30%] border">
                <ShortsCard />
                <SmallCard />
            </div>
        </div>

    );
}

export default VideoPage;