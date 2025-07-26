function SidebarButton({icon: Icon, buttonText, onClick}) {
    return (
        <div 
        onClick={onClick}
        className='flex gap-5 p-2 m-1 rounded-lg active:bg-[#1a1a1a88] hover:bg-[#1a1a1a]'>
            <Icon fontSize="small" />
            <p className="text-sm">{buttonText}</p>
        </div>
    );
}

export default SidebarButton;