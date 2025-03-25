import { useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import Sidebar from "../Sidebar/Sidebar";
import MainSidebar from "../Sidebar/MainSidebar";


function MenuDropdown() {

    const [isOpen, setIsOpen] = useState(false);

    return (

        <div className="relative">
            <div onClick={() => setIsOpen(!isOpen)}>
                <MenuIcon />
            </div>

        {/* Menu Dropdown */}
            {isOpen && (
                <div className="absolute w-[15vw] h-full left-0 top-12">
                    <Sidebar />
                </div>
            )}
            {!isOpen && (
                <div className="absolute left-0 top-12">
                    <MainSidebar />
                </div>
            )}
        </div>
    );
}

export default MenuDropdown;