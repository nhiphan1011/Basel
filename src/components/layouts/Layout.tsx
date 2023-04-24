import { Outlet } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneSquare } from "@fortawesome/free-solid-svg-icons";
import { Register } from "modules/auth";
import Header from "./Header";
import MenuNav from "./MenuNav";

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
        <div className="website-wrapper w-screen h-screen overflow-x-hidden relative">
            <div className="top-bar  bg-[#1aada3] text-[rgba(255,255,255,.8)] tracking-[0.3px] text-[13px]">
                <div className="w-[95%] h-[42px] flex justify-center lg:justify-between items-center px-[15px] mx-auto">
                    <div className="left">
                        <span><FontAwesomeIcon icon={faPhoneSquare} /></span>
                        OUR PHONE NUMBER:
                        <span>+77 (756) 334 876</span>
                    </div>
                    <div className="menu hidden lg:flex"></div>
                </div>

            </div>
            <Register showLogin={showLogin} setShowLogin={setShowLogin} />
            <MenuNav showMenu={showMenu} menuRef={menuRef} />
            <Header handleShowMenu={handleShowMenu} handleShowLogin={handleShowLogin} />
            <Outlet />
            <div className={`close-side transition-all duration-300 w-screen h-screen bg-[rgba(0,0,0,.7)] absolute top-0 ${showLogin || showMenu ? 'visible' : 'hidden'} `}></div>
        </div>);
}

export default Layout;