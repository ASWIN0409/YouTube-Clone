import HomeIcon from '@mui/icons-material/Home';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';

function MainSidebar() {
    return (
        <div className='flex-1 w-full h-screen p-2 mt-2 bg-black'>
            <div className='flex flex-col items-center justify-center h-20 gap-2 p-2 text-xs rounded-xl hover:bg-[#1a1a1a]'>
                <HomeIcon />
                <p>Home</p>
            </div>
            <div className='flex flex-col items-center justify-center h-20 gap-2 p-2 text-xs rounded-xl hover:bg-[#1a1a1a]'>
                <img className='w-[22px] h-[22px] ' src="shorts2.png" />
                <p>Shorts</p>
            </div>
            <div className='flex flex-col items-center justify-center h-20 gap-2 p-2 text-xs rounded-xl hover:bg-[#1a1a1a]'>
                <SubscriptionsIcon />
                <p>Subscribed</p>
            </div>
            <div className='flex flex-col items-center justify-center h-20 gap-2 p-2 text-xs rounded-xl hover:bg-[#1a1a1a]'>
                <AccountCircleRoundedIcon />
                <p>You</p>
            </div>

        </div>
    );
}

export default MainSidebar;