function SidebarButton2({imgSrc, buttonText}) {
    return (
        <div
            className='flex gap-5 p-2 m-1 rounded-lg active:bg-[#1a1a1a88] hover:bg-[#1a1a1a]'>
            <div className='w-5 h-5'>
                <img
                    className='object-cover w-full h-full rounded-full'
                    src={imgSrc}
                    alt={buttonText}
                />
            </div>
            <p className="text-sm">{buttonText}</p>
        </div>
    );
}

export default SidebarButton2;