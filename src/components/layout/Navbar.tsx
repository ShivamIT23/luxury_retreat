import { useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { Menu, X } from "lucide-react"
import { motion } from "motion/react"
import Button from "../common/Button"

const navLinks = [
  { href: "/home", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/destination", label: "Destinations" },
  { href: "/contact", label: "Contact" },
]

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setIsMenuOpen(false)
  }, [location.pathname])

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }

    return () => {
      document.body.style.overflow = ""
    }
  }, [isMenuOpen])

  return (
    <nav className="bg-[#FFF6EB]/95 backdrop-blur-md fixed top-0 left-0 z-50 w-full h-[70px] md:h-[90px] lg:h-[100px] flex items-center px-4 md:px-8 lg:px-[4vw] shadow-sm">
      <div className="flex items-center gap-3 text-[#BE8F00] text-sm md:text-base lg:text-[16px] font-semibold crimson -tracking-[0.5px] leading-[21px]">
        <button
          type="button"
          aria-label="Toggle navigation"
          className="flex items-center justify-center rounded-full border border-[#BE8F00]/40 p-2 text-[#285F69] md:hidden"
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
        <div className="hidden md:flex items-center gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className="transition-colors duration-200 hover:text-[#285F69]"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>

      <Link
        to="/home"
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        aria-label="Luxury Retreat Home"
      >
        <img
          src="/logo.png"
          alt="Luxury Retreat logo"
          className="h-10 md:h-16 lg:h-[100px] w-auto"
        />
      </Link>

      <div className="ml-auto flex items-center">
        <Button buttonText="contact us" handleClick={"/contact"} className="hidden md:inline-flex text-sm md:text-base lg:text-[16px]" />
        <Button
          buttonText="contact"
          className="md:hidden text-sm px-4 py-2"
          handleClick={"/contact"}
        />
      </div>

      <motion.div
        initial={false}
        animate={isMenuOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: -24 }}
        transition={{ type: "spring", stiffness: 280, damping: 30 }}
        className={`fixed inset-x-0 top-[70px] z-40 px-4 pb-8 pt-4 md:hidden ${
          isMenuOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        <div className="rounded-3xl border border-[#BE8F00]/30 bg-[#FFF6EB]/95 shadow-lg backdrop-blur-md">
          <div className="flex flex-col gap-4 px-6 py-8 text-[#285F69] text-base font-semibold uppercase">
            {navLinks.map((link) => (
              <Link to={link.href} key={link.href} className="tracking-[1px]">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </motion.div>
    </nav>
  )
}

export default Navbar
