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
import SidebarButton from '../Button/SidebarButton/SidebarButton';
import SidebarButton2 from '../Button/SidebarButton/SidebarButton2';


function Sidebar() {
    return (
        <div className='h-screen w-[15vw] bg-black p-2 z-10 overflow-scroll'>
            {/* first section */}
            <div className='mt-2 border-b-2 border-gray-600 '>
                <SidebarButton
                    icon={HomeIcon}
                    buttonText="Home"
                />
                <div className='flex gap-5 p-2 m-1 items-center active:bg-[#1a1a1a88] rounded-lg hover:bg-[#1a1a1a]'>
                    <img className='w-[20px] h-[18px]'src="shorts2.png" />
                    <p>Shorts</p>
                </div>
                <SidebarButton
                    icon={SubscriptionsIcon}
                    buttonText="Subscriptions"
                />
            </div>

            {/* second section */}
            <div className='mt-2 border-b-2 border-gray-600'>
                <div className='flex gap-5 p-2 rounded-xl active:bg-[#1a1a1a88] hover:bg-[#1a1a1a]'>
                    You
                </div>
                <SidebarButton
                    icon={HistoryIcon}
                    buttonText="History"
                />
                <SidebarButton
                    icon={PlaylistPlayIcon}
                    buttonText="Playlists"
                />
                <SidebarButton
                    icon={OndemandVideoIcon}
                    buttonText="Your Videos"
                />
                <SidebarButton
                    icon={LocalMoviesSharpIcon}
                    buttonText="Your Movies"
                />
                <SidebarButton
                    icon={SchoolSharpIcon}
                    buttonText="Your Courses"
                />
                <SidebarButton
                    icon={WatchLaterSharpIcon}
                    buttonText="Watch Later"
                />
                <SidebarButton
                    icon={ThumbUpAltSharpIcon}
                    buttonText="Liked Videos"
                />
            </div>

            {/* third section */}
            <div className='mt-2 border-b-2 border-gray-600'>
                <div className='flex gap-5 p-2 m-1'>
                    Subscriptions
                </div>
                <SidebarButton2
                    imgSrc="ashish.png"
                    buttonText="Ashish Chanchlani"
                />
                <SidebarButton2
                    imgSrc="akashgupta.jpg"
                    buttonText="Aakash Gupta"
                />
                <SidebarButton2
                    imgSrc="bb.webp"
                    buttonText="BB Ki Vines"
                />
                <SidebarButton2
                    imgSrc="r2h.jpg"
                    buttonText="Round2hell"
                />
                <SidebarButton2
                    imgSrc="blood.jpg"
                    buttonText="Bloodwork Gaming"
                />
                <SidebarButton2
                    imgSrc="abhishek.webp"
                    buttonText="Abhishek Upmanyu"
                />
                <SidebarButton2
                    imgSrc="mortal.jpg"
                    buttonText="MortaL"
                />
            </div>

            {/* fourth section */}
            <div className='mt-2 border-b-2 border-gray-600'>
                <div className='flex gap-5 p-2 m-1 rounded-lg'>
                    Explore
                </div>
                <SidebarButton
                    icon={WhatshotSharpIcon}
                    buttonText="Trending"
                />
                <SidebarButton
                    icon={ShoppingCartIcon}
                    buttonText="Shopping"
                />
                <SidebarButton
                    icon={MusicNoteSharpIcon}
                    buttonText="Music"
                />
                <SidebarButton
                    icon={LocalMoviesSharpIcon}
                    buttonText="Films"
                />
                <SidebarButton
                    icon={SportsRoundedIcon}
                    buttonText="Live"
                />
                <SidebarButton
                    icon={SportsEsportsRoundedIcon}
                    buttonText="Gaming"
                />
                <SidebarButton
                    icon={NewspaperRoundedIcon}
                    buttonText="News"
                />
                <SidebarButton
                    icon={EmojiEventsRoundedIcon}
                    buttonText="Sport"
                />
                <SidebarButton
                    icon={SchoolSharpIcon}
                    buttonText="Courses"
                />
                <SidebarButton
                    icon={CheckroomRoundedIcon}
                    buttonText="Fashion & Beauty"
                />
                <SidebarButton
                    icon={PodcastsRoundedIcon}
                    buttonText="Podcasts"
                />
            </div>

            {/* fifth section */}
            <div className='mt-2 border-b-2 border-gray-600'>
                <div className='flex gap-5 p-2 m-1 rounded-lg'>
                    More from YouTube
                </div>
                <SidebarButton2
                    imgSrc="youtube.png"
                    buttonText="YouTube Premium"
                />
                <SidebarButton2
                    imgSrc="youtube_studio.webp"
                    buttonText="YouTube Studio"
                />
                <SidebarButton2
                    imgSrc="Youtube-Music-Logo.png"
                    buttonText="YouTube Music"
                />
                <SidebarButton2
                    imgSrc="youtube_kids.webp"
                    buttonText="YouTube Kids"
                />
            </div>

            {/* sixth section */}
            <div className='mt-2 border-b-2 border-gray-600'>
                <SidebarButton
                    icon={SettingsIcon}
                    buttonText="Settings"
                />
                <SidebarButton
                    icon={FlagIcon}
                    buttonText="Report History"
                />
                <SidebarButton
                    icon={HelpOutlineIcon}
                    buttonText="Help"
                />
                <SidebarButton
                    icon={FeedbackIcon}
                    buttonText="Send Feedback"
                />
            </div>

        </div>


    );
}

export default Sidebar;