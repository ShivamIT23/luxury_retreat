import { Link } from "react-router-dom"
import Button from "../common/Button"

function Navbar() {
  return (
    <nav className="bg-[#FFF6EB] absolute top-0 z-50 left-0 w-full flex justify-between items-center px-[4vw] h-[100px]">
        <Links />
        <img src="/logo.png" alt="Logo" className="max-h-[100px] w-auto absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2" />
        <Button buttonText="contact us" />
    </nav>
  )
}

function Links(){
    return (
        <div className="flex gap-4 text-[#BE8F00] text-[16px] font-semibold crimson -tracking-1 leading-[21px]">
            <Link to="/home">Home</Link>
            <Link to="/about">About Us</Link>
            <Link to="/destination">Destinations</Link>
            <Link to="/contact">Contact</Link>
        </div>
    )
}

export default Navbar