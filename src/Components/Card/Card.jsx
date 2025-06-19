import MoreVertSharpIcon from '@mui/icons-material/MoreVertSharp';
import { useNavigate } from 'react-router-dom';

function Card({imageUrl, imageUrl2, title, channelName, views, time}) {

    const navigate = useNavigate();

    function handleClick() {
        navigate("/video/20/4156");
    }

    return (

        <div onClick={handleClick} className="flex flex-col justify-between p-4 w-[450px] h-96">

            <div className="w-[100%] h-56 rounded-lg ">
                <img className="w-full h-full rounded-lg " src={imageUrl} />
            </div>

            <div className='flex [w-100%] gap-4'>
                <div className='w-10 h-10 basis-[10%] '>
                    <img className="w-full h-full border rounded-full" src={imageUrl2} />
                </div>
                <h2 className='basis-[80%]'>{title}</h2>
                <div className='p-2 rounded-full basis-[10%] cursor-pointer hover:bg-gray-800'>
                    <MoreVertSharpIcon />
                </div>
            </div>

            <div className='ml-12 '>
                <h3>{channelName}</h3>
                <p>{views} views &bull; {time}</p>
            </div>
        </div>
    );
}

export default Card;