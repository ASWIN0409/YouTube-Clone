import HomeIcon from '@mui/icons-material/Home';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import HistoryIcon from '@mui/icons-material/History';
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import LocalMoviesSharpIcon from '@mui/icons-material/LocalMoviesSharp';
import SchoolSharpIcon from '@mui/icons-material/SchoolSharp';
import WatchLaterSharpIcon from '@mui/icons-material/WatchLaterSharp';
import ThumbUpAltSharpIcon from '@mui/icons-material/ThumbUpAltSharp';
import WhatshotSharpIcon from '@mui/icons-material/WhatshotSharp';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MusicNoteSharpIcon from '@mui/icons-material/MusicNoteSharp';
import SportsRoundedIcon from '@mui/icons-material/SportsRounded';
import SportsEsportsRoundedIcon from '@mui/icons-material/SportsEsportsRounded';
import NewspaperRoundedIcon from '@mui/icons-material/NewspaperRounded';
import EmojiEventsRoundedIcon from '@mui/icons-material/EmojiEventsRounded';
import CheckroomRoundedIcon from '@mui/icons-material/CheckroomRounded';
import PodcastsRoundedIcon from '@mui/icons-material/PodcastsRounded';
import SettingsIcon from '@mui/icons-material/Settings';
import FlagIcon from '@mui/icons-material/Flag';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import FeedbackIcon from '@mui/icons-material/Feedback';


function Sidebar() {
    return (
        <div className='h-screen w-[15vw] bg-black z-10 overflow-scroll'>
            {/* first section */}
            <div className='mt-2 border-b-2 border-gray-600 '>
                <div className='flex gap-5 p-2 m-1 rounded-xl hover:bg-gray-800'>
                    <HomeIcon />
                    <p>Home</p>
                </div>
                <div className='flex gap-5 p-2 m-1 rounded-xl der hover:bg-gray-800'>
                    <img className='w-[22px] h-[22px] ' src="shorts2.png" />
                    <p>Shorts</p>
                </div>
                <div className='flex gap-5 p-2 m-1 rounded-xl hover:bg-gray-800'>
                    <SubscriptionsIcon />
                    <p>Subscriptions</p>
                </div>
            </div>

            {/* second section */}
            <div className='mt-2 border-b-2 border-gray-600'>
                <div className='flex gap-5 p-2 m-1 rounded-xl hover:bg-gray-800'>
                    You
                </div>
                <div className='flex gap-5 p-2 m-1 rounded-xl hover:bg-gray-800'>
                    <HistoryIcon />
                    <p>History</p>
                </div>
                <div className='flex gap-5 p-2 m-1 rounded-xl hover:bg-gray-800'>
                    <PlaylistPlayIcon />
                    <p>Playlists</p>
                </div>
                <div className='flex gap-5 p-2 m-1 rounded-xl hover:bg-gray-800'>
                    <OndemandVideoIcon />
                    <p>Your Videos</p>
                </div>
                <div className='flex gap-5 p-2 m-1 rounded-xl hover:bg-gray-800'>
                    <LocalMoviesSharpIcon />
                    <p>Your Movies</p>
                </div>
                <div className='flex gap-5 p-2 m-1 rounded-xl hover:bg-gray-800'>
                    <SchoolSharpIcon />
                    <p>Your Courses</p>
                </div>
                <div className='flex gap-5 p-2 m-1 rounded-xl hover:bg-gray-800'>
                    <WatchLaterSharpIcon />
                    <p>Watch Later</p>
                </div>
                <div className='flex gap-5 p-2 m-1 rounded-xl hover:bg-gray-800'>
                    <ThumbUpAltSharpIcon />
                    <p>Liked Videos</p>
                </div>
            </div>

            {/* third section */}
            <div className='mt-2 border-b-2 border-gray-600'>
                <div className='flex gap-5 p-2 m-1 rounded-xl'>
                    Subscriptions
                </div>
                <div className='flex gap-5 p-2 m-1 rounded-xl hover:bg-gray-800'>
                    <div className='w-7 h-7'>
                        <img className='w-full h-full rounded-full' src="ashish.png" alt="" />
                    </div>
                    <p>Ashish Chanchlani</p>
                </div>
                <div className='flex gap-5 p-2 m-1 rounded-xl hover:bg-gray-800'>
                    <div className='w-7 h-7'>
                        <img className='w-full h-full rounded-full' src="akashgupta.jpg" alt="" />
                    </div>
                    <p>Aakash Gupta</p>
                </div>
                <div className='flex gap-5 p-2 m-1 rounded-xl hover:bg-gray-800'>
                    <div className='w-7 h-7'>
                        <img className='w-full h-full rounded-full' src="bb.webp" alt="" />
                    </div>
                    <p>BB Ki Vines</p>
                </div>
                <div className='flex gap-5 p-2 m-1 rounded-xl hover:bg-gray-800'>
                    <div className='w-7 h-7'>
                        <img className='w-full h-full rounded-full' src="r2h.jpg" alt="" />
                    </div>
                    <p>Round2hell</p>
                </div>
                <div className='flex gap-5 p-2 m-1 rounded-xl hover:bg-gray-800'>
                    <div className='w-7 h-7'>
                        <img className='w-full h-full rounded-full' src="blood.jpg" alt="" />
                    </div>
                    <p>Bloodwork Gaming</p>
                </div>
                <div className='flex gap-5 p-2 m-1 rounded-xl hover:bg-gray-800'>
                    <div className='w-7 h-7'>
                        <img className='w-full h-full rounded-full' src="abhishek.webp" alt="" />
                    </div>
                    <p>Abhishek Upmanyu</p>
                </div>
                <div className='flex gap-5 p-2 m-1 rounded-xl hover:bg-gray-800'>
                    <div className='w-7 h-7'>
                        <img className='w-full h-full rounded-full' src="mortal.jpg" alt="" />
                    </div>
                    <p>MortaL</p>
                </div>
            </div>

            {/* fourth section */}
            <div className='mt-2 border-b-2 border-gray-600'>
                <div className='flex gap-5 p-2 m-1 rounded-xl'>
                    Explore
                </div>
                <div className='flex gap-5 p-2 m-1 rounded-xl hover:bg-gray-800'>
                    <WhatshotSharpIcon />
                    <p>Trending</p>
                </div>
                <div className='flex gap-5 p-2 m-1 rounded-xl hover:bg-gray-800'>
                    <ShoppingCartIcon />
                    <p>Shopping</p>
                </div>
                <div className='flex gap-5 p-2 m-1 rounded-xl hover:bg-gray-800'>
                    <MusicNoteSharpIcon />
                    <p>Music</p>
                </div>
                <div className='flex gap-5 p-2 m-1 rounded-xl hover:bg-gray-800'>
                    <LocalMoviesSharpIcon />
                    <p>Films</p>
                </div>
                <div className='flex gap-5 p-2 m-1 rounded-xl hover:bg-gray-800'>
                    <SportsRoundedIcon />
                    <p>Live</p>
                </div>
                <div className='flex gap-5 p-2 m-1 rounded-xl hover:bg-gray-800'>
                    <SportsEsportsRoundedIcon />
                    <p>Gaming</p>
                </div>
                <div className='flex gap-5 p-2 m-1 rounded-xl hover:bg-gray-800'>
                    <NewspaperRoundedIcon />
                    <p>News</p>
                </div>
                <div className='flex gap-5 p-2 m-1 rounded-xl hover:bg-gray-800'>
                    <EmojiEventsRoundedIcon />
                    <p>Sport</p>
                </div>
                <div className='flex gap-5 p-2 m-1 rounded-xl hover:bg-gray-800'>
                    <SchoolSharpIcon />
                    <p>Courses</p>
                </div>
                <div className='flex gap-5 p-2 m-1 rounded-xl hover:bg-gray-800'>
                    <CheckroomRoundedIcon />
                    <p>Fashion & Beauty</p>
                </div>
                <div className='flex gap-5 p-2 m-1 rounded-xl hover:bg-gray-800'>
                    <PodcastsRoundedIcon />
                    <p>Podcasts</p>
                </div>
            </div>

            {/* fifth section */}
            <div className='mt-2 border-b-2 border-gray-600'>
                <div className='flex gap-5 p-2 m-1 rounded-xl'>
                    More from YouTube
                </div>
                <div className='flex gap-5 p-2 m-1 rounded-xl hover:bg-gray-800'>
                    <div className='w-7 h-7'>
                        <img className='w-full h-full rounded-full' src="youtube.png" alt="" />
                    </div>
                    <p>YouTube Premium</p>
                </div>
                <div className='flex gap-5 p-2 m-1 rounded-xl hover:bg-gray-800'>
                    <div className='w-7 h-7'>
                        <img className='w-full h-full rounded-full' src="youtube_studio.webp" alt="" />
                    </div>
                    <p>YouTube Studio</p>
                </div>
                <div className='flex gap-5 p-2 m-1 rounded-xl hover:bg-gray-800'>
                    <div className='w-7 h-7'>
                        <img className='w-full h-full rounded-full' src="youtube_music2.png" alt="" />
                    </div>
                    <p>YouTube Music</p>
                </div>
                <div className='flex gap-5 p-2 m-1 rounded-xl hover:bg-gray-800'>
                    <div className='w-7 h-7'>
                        <img className='w-full h-full rounded-full' src="youtube_kids.webp" alt="" />
                    </div>
                    <p>YouTube Kids</p>
                </div>
            </div>

            {/* sixth section */}
            <div className='mt-2 border-b-2 border-gray-600'>
                <div className='flex gap-5 p-2 m-1 rounded-xl hover:bg-gray-800'>
                    <SettingsIcon />
                    <p>Settings</p>
                </div>
                <div className='flex gap-5 p-2 m-1 rounded-xl hover:bg-gray-800'>
                    <FlagIcon />
                    <p>Report History</p>
                </div>
                <div className='flex gap-5 p-2 m-1 rounded-xl hover:bg-gray-800'>
                    <HelpOutlineIcon />
                    <p>Help</p>
                </div>
                <div className='flex gap-5 p-2 m-1 rounded-xl hover:bg-gray-800'>
                    <FeedbackIcon />
                    <p>Send Feedback</p>
                </div>
            </div>

        </div>


    );
}

export default Sidebar;