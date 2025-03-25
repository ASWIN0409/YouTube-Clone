import HomeIcon from '@mui/icons-material/Home';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';

function MainSidebar() {
    return (
        <div className='w-[5vw]'>
            <div className='flex flex-col items-center justify-center h-20 gap-2 p-2 rounded-xl hover:bg-gray-800'>
                <HomeIcon />
                <p>Home</p>
            </div>
            <div className='flex flex-col items-center justify-center h-20 gap-2 p-2 rounded-xl hover:bg-gray-800'>
                <img className='w-[22px] h-[22px] ' src="shorts2.png" />
                <p>Shorts</p>
            </div>
            <div className='flex flex-col items-center justify-center h-20 gap-2 p-2 rounded-xl hover:bg-gray-800'>
                <SubscriptionsIcon />
                <p>Subscribed</p>
            </div>
            <div className='flex flex-col items-center justify-center h-20 gap-2 p-2 rounded-xl hover:bg-gray-800'>
                <AccountCircleRoundedIcon />
                <p>You</p>
            </div>

        </div>
    );
}

export default MainSidebar;