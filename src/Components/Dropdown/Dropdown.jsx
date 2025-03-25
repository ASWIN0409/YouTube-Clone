import AddIcon from '@mui/icons-material/Add';
import { useState } from 'react';
import UploadOutlinedIcon from '@mui/icons-material/UploadOutlined';
import PostAddIcon from '@mui/icons-material/PostAdd';
import LiveTvIcon from '@mui/icons-material/LiveTv';

function Dropdown() {

    const [isOpen, setIsOpen] = useState(false);
    
    return (
        <div className='relative'>
            <div 
            onClick={() => setIsOpen(!isOpen)}
            className='flex gap-2'>
                <AddIcon />
                <p>Create</p>
            </div>

            {/* dropdown bar */}

            {isOpen && (
                <div className='absolute w-48 h-[11rem] mt-2 bg-gray-900 border p-2 shadow-lg flex flex-col justify-evenly items-center rounded-3xl top-10 r-0'>
                    <div className='flex w-full p-1 gap-x-2 hover:bg-gray-600'>
                        <UploadOutlinedIcon />
                        <p>Upload Video</p>
                    </div>
                    <div className='flex w-full p-1 gap-x-3 hover:bg-gray-600'>
                        <LiveTvIcon />
                        <p>Go Live</p>
                    </div>
                    <div className='flex w-full p-1 gap-x-2 hover:bg-gray-600'>
                        <PostAddIcon />
                        <p>Create Post</p>
                    </div>
                </div>
            )}

        </div>

    );
}

export default Dropdown;