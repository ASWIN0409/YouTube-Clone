import YouTubeIcon from '@mui/icons-material/YouTube';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Dropdown from '../Dropdown/Dropdown';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router-dom';
import NavbarIconButton from '../Button/NavbarIconButton/NavbarIconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useContext } from 'react';
import { GlobalContext } from '../../Context/GlobalContext';

function Navbar() {

    const navigate = useNavigate();
    const { toggleMenu } = useContext(GlobalContext);

    return (
        <nav className="sticky top-0 left-0 flex items-center justify-between w-full h-16 bg-black ml-7">
            {/* left section  */}
            <div className="flex items-center justify-start px-1 gap-x-10">
                <NavbarIconButton
                    onClickHandler={toggleMenu}
                    icon={MenuIcon}
                />
                <div
                    onClick={() => navigate("/")}
                    className="flex items-center h-12 cursor-pointer gap-x-2" >
                    <YouTubeIcon fontSize='large' />
                    <p className='text-3xl text-red-600 font-fantasy'>YouTube <sup className='text-sm text-gray-500'>IN</sup></p>
                </div>
            </div>

            {/* middle section */}
            <div className="flex items-center justify-between gap-2">
                <div className="flex items-center w-full bg-[#1c1c1c] gap-2 rounded-3xl border border-gray-600">
                    <input className=" overflow-hidden h-10 w-[500px] bg-[#3a3a3a2b] rounded-3xl p-4 border-none border outline-none  "
                        type="text"
                        placeholder="Search..."
                    />
                    <SearchIcon fontSize='large' className="mr-2 rounded-full cursor-pointer" />
                </div>
                <NavbarIconButton
                className="p-2 rounded-full cursor-pointer active:bg-[#1a1a1a88] hover:bg-[#444444] bg-[#1a1a1a]"
                    icon={KeyboardVoiceIcon}
                />
            </div>

            {/* right section */}
            <div className="flex items-center justify-end mr-10 gap-x-2">
                <div className='p-2 cursor-pointer active:bg-[#1a1a1a88] hover:bg-[#1a1a1a] rounded-3xl'>
                    <Dropdown />
                </div>

                <NavbarIconButton
                    icon={NotificationsIcon}
                />
                <NavbarIconButton
                    icon={AccountCircleRoundedIcon}
                />
            </div>


        </nav>
    );
}

export default Navbar;