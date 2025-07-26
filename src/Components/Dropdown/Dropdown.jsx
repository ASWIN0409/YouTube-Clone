import AddIcon from '@mui/icons-material/Add';
import { useState } from 'react';
import UploadOutlinedIcon from '@mui/icons-material/UploadOutlined';
import PostAddIcon from '@mui/icons-material/PostAdd';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import DropdownButton from '../Button/DropdownButton/DropdownButton';

function Dropdown() {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className='relative'>
            <div
                onClick={() => setIsOpen(!isOpen)}
                className='flex gap-2 p-1'>
                <AddIcon />
                <p>Create</p>
            </div>

            {/* dropdown bar */}

            {isOpen && (
                <div className='absolute w-48 h-[full] border-none mt-2 bg-[#1c1c1c] border pt-3 pb-3 shadow-lg flex flex-col justify-evenly items-center rounded-lg top-10 r-0'>
                    <DropdownButton
                        icon={UploadOutlinedIcon}
                        buttonText="Upload Video"
                    />
                    <DropdownButton
                        icon={LiveTvIcon}
                        buttonText="Go Live"
                    />
                    <DropdownButton
                        icon={PostAddIcon}
                        buttonText="Create Post"
                    />
                </div>
            )}

        </div>

    );
}

export default Dropdown;