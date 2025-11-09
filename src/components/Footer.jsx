    import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-blue-950 text-white py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-24">
        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8">
          {/* Left - Name and Title */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">Cynthia</h2>
            <p className="text-indigo-200">IT Support Specialist & Software Developer</p>
          </div>

          {/* Center - Navigation Links */}
          <nav className="flex flex-wrap justify-center gap-6 md:gap-8">
            <a 
              href="#skills" 
              className="text-indigo-100 hover:text-white transition-colors"
            >
              Skills
            </a>
            <a 
              href="#projects" 
              className="text-indigo-100 hover:text-white transition-colors"
            >
              Projects
            </a>
            <a 
              href="#contact" 
              className="text-indigo-100 hover:text-white transition-colors"
            >
              Contact
            </a>
          </nav>

          {/* Right - Social Icons */}
          <div className="flex gap-4 text-xl md:text-2xl">
            <a
              href="https://www.linkedin.com/in/cynthia-muinde/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-indigo-300 transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://x.com/CyntiaMumbua"
              target="_blank"
              rel="noreferrer"
              className="hover:text-indigo-300 transition-colors"
              aria-label="Twitter"
            >
              <FaTwitter />
            </a>
            <a
              href="https://github.com/cynmumbua"
              target="_blank"
              rel="noreferrer"
              className="hover:text-indigo-300 transition-colors"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
          </div>
        </div>

        {/* Bottom - Copyright */}
        <div className="text-center pt-8 border-t border-indigo-700">
          <p className="text-indigo-200 text-sm">
            © cynthiamumbua. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
    )
}

export default Footer;