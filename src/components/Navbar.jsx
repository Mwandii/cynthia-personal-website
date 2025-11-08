function Navbar () {
    return (
        <div className="flex justify-between items-center p-6 shadow-md">
        <h1 className="text-2xl font-semibold">Cynthia</h1>
        <nav>
            <ul className="flex gap-4 md:mr-6">
                <a className="hover:text-gray-500 hover:cursor-pointer p-2">About</a>
                <a className="hover:text-gray-500 hover:cursor-pointer p-2">Skills</a>
                <a className="hover:text-gray-500 hover:cursor-pointer p-2">Projects</a>
                <a className="hover:text-gray-500 hover:cursor-pointer p-2">Contact Me</a>
            </ul>
        </nav>
        </div>
    )
}

export default Navbar;