import YouTubeIcon from '@mui/icons-material/YouTube';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Dropdown from '../Dropdown/Dropdown';
import MenuDropdown from '../Dropdown/MenuDropdown';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';

function Navbar() {
    return (
        <nav className="flex items-center justify-between w-full h-16 border-b-[1px]">
            {/* left section  */}

            <div className="flex w-[20%] justify-start items-center gap-x-10 px-1">
                <div className='p-2 rounded-full cursor-pointer hover:bg-gray-800'>
                    <MenuDropdown />
                </div>
                <div className="flex items-center h-12 cursor-pointer gap-x-2"> 
                    <YouTubeIcon />
                    <p className='text-3xl font-fantasy'>YouTube</p>
                </div>
            </div>

            {/* middle section */}

            <div className="flex w-[40%] justify-between items-center">
                <div className="flex w-[90%] relative items-center">
                    <input className="w-full h-10 p-4 border bg-gray-950 rounded-3xl " type="text" placeholder="Search..." />
                    <img className="absolute p-2 border-l-2 cursor-pointer right-2 " src="search.png" alt="" />
                </div>
                <div className="p-2 rounded-full cursor-pointer hover:bg-gray-800">
                    <KeyboardVoiceIcon />
                </div>
            </div>

            {/* right section */}

            <div className="flex items-center justify-end gap-x-5  w-[15%] ">
                <div className='p-2 cursor-pointer hover:bg-gray-800 rounded-3xl'>
                    <Dropdown />
                </div>
                <div className='p-2 rounded-full cursor-pointer hover:bg-gray-800'>
                    <NotificationsIcon />
                </div>
                <div className="p-2 mr-2 rounded-full cursor-pointer hover:bg-gray-800">
                    <AccountCircleRoundedIcon />
                </div>

            </div>


        </nav>
    );
}

export default Navbar;