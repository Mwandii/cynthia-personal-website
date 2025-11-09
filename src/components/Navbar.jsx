function Navbar () {
    return (
        <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 shadow-sm">
        <div className="flex justify-between items-center px-6 md:px-12 lg:px-24 py-4">
          <h1 className="text-xl md:text-2xl font-bold text-gray-900">Cynthia</h1>
          <ul className="flex gap-2 md:gap-6 text-sm md:text-base">
            <li>
              <a href="#about" className="hover:text-indigo-600 transition-colors px-2 md:px-3 py-2">
                About
              </a>
            </li>
            <li>
              <a href="#skills" className="hover:text-indigo-600 transition-colors px-2 md:px-3 py-2">
                Skills
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:text-indigo-600 transition-colors px-2 md:px-3 py-2">
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-indigo-600 transition-colors px-2 md:px-3 py-2">
                Contact Me
              </a>
            </li>
          </ul>
        </div>
      </nav>
    )
}

export default Navbar;