function NavbarIconButton({icon: Icon}) {
    return (
        <div className="p-2 rounded-full cursor-pointer active:bg-[#1a1a1a88] hover:bg-[#1a1a1a]">
            <Icon />
        </div>
    );
}

export default NavbarIconButton;