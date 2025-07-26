function DropdownButton({icon: Icon, buttonText}) {
    return (
        <div className='flex w-full p-3 gap-x-2 items-center hover:bg-[#444444] active:bg-[#555555]'>
            <Icon fontSize="small" />
            <p className="ml-2 text-sm">{buttonText}</p>
        </div>
    );
}

export default DropdownButton;