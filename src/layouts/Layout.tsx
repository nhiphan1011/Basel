import { Outlet } from "react-router-dom";
import Header from "./Header";
import MenuNav from "components/MenuNav";
import { useEffect, useRef, useState } from "react";
import { Register } from "modules/auth";

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
            <Register showLogin={showLogin} setShowLogin={setShowLogin} />
            <MenuNav showMenu={showMenu} menuRef={menuRef} />
            <Header handleShowMenu={handleShowMenu} handleShowLogin={handleShowLogin} />
            <Outlet />
            <div className={`close-side transition-all duration-300 w-screen h-screen bg-[rgba(0,0,0,.7)] absolute top-0 ${showLogin || showMenu ? 'visible' : 'hidden'} `}></div>
        </div>);
}

export default Layout;