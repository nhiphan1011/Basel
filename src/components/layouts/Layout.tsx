import { Link, Outlet } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneSquare, faUserLarge } from "@fortawesome/free-solid-svg-icons";
import { Register } from "modules/auth";
import Header from "./Header";
import MenuNav from "./MenuNav";
import Footer from "./Footer";

function Layout() {
    const [showMenu, setShowMenu] = useState<boolean>(false)
    const [showLogin, setShowLogin] = useState<boolean>(false)
    const handleShowLogin = () => setShowLogin(!showLogin)
    const menuRef = useRef<any>()

    useEffect(() => {
        let handler = (e: any) => {
            if (!menuRef.current.contains(e.target)) setShowMenu(false)
            if (!document.getElementById("Register")?.contains(e.target)) setShowLogin(false)
        }
        document.addEventListener("mousedown", handler)
        return () => document.removeEventListener("mousedown", handler)
    })
    const handleShowMenu = () => setShowMenu(!showLogin)
    return (
        <div className="website-wrapper w-full h-screen overflow-x-hidden relative">
            <div className="top-bar bg-mint text-[rgba(255,255,255,.8)] tracking-[0.3px] text-[13px]">
                <div className="w-[95%] h-[42px] flex justify-center lg:justify-between items-center px-[15px] mx-auto">
                    <div className="left">
                        <span><FontAwesomeIcon className="mr-[1px]" icon={faPhoneSquare} /></span>
                        {" OUR PHONE NUMBER:"}
                        <span className="ml-[10px] border-b-[rgba(255,255,255,0.3)] border-b-[1px]">+77 (756) 334 876</span>
                    </div>
                    <ul className="menu hidden lg:flex text-[12px]">
                        <li className="uppercase pr-[5px]"><Link to="" className="line after:bg-white flex items-center"><span className="pr-[5px]"><FontAwesomeIcon icon={faUserLarge} /></span>My Account</Link></li>
                        <li className="uppercase px-[10px] border-x-[rgba(255,255,255,.1)] border-x-[1px]"><Link to="" className="line after:bg-white">Cart</Link></li>
                        <li className="uppercase px-[10px] border-x-[rgba(255,255,255,.1)] border-x-[1px]"><Link to="" className="line after:bg-white">Our Location</Link></li>
                        <li className="uppercase pl-[5px]"><Link to="" className="line after:bg-white">Contact us</Link></li>
                    </ul>
                </div>

            </div>
            <Register showLogin={showLogin} setShowLogin={setShowLogin} />
            <MenuNav showMenu={showMenu} menuRef={menuRef} />
            <Header handleShowMenu={handleShowMenu} handleShowLogin={handleShowLogin} />
            <Outlet />
            <Footer />
            <div className={`close-side transition-all duration-300 w-screen h-screen bg-[rgba(0,0,0,.7)] absolute top-0 ${showLogin || showMenu ? 'visible' : 'hidden'} `}></div>
        </div>);
}

export default Layout;