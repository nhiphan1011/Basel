import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { MENU_HEADER } from "constant";
function MenuNav({ showMenu, menuRef }: { showMenu: any, menuRef: any }) {
    return (
        <section ref={menuRef} id="navMenu" className={`z-20 fixed top-0 menu-nav w-[270px] h-screen bg-[#0c0c0c] transition-transform duration-300 ${showMenu ? 'translate-x-0' : 'translate-x-[-270px]'}`}>
            <form className="search relative p-[10px] border-b-[2px] border-b-[rgba(92,92,92,.43)] ">
                <input className="w-full h-[40px] bg-[rgba(255,255,255,.1)] text-[#fff] border-[1px] border-[rgba(208,208,208,.09)] py-[14px] pl-[18px] pr-[50px]"
                    placeholder="Search for products" />
                <button className="w-[48px] h-[48px] absolute right-0 top-[6px] text-[rgba(255,255,255,.8)]" type="submit">
                    <FontAwesomeIcon className="h-[20px]" icon={faMagnifyingGlass} />
                </button>
            </form>
            <div className="menu-container">
                <ul className="menu">
                    {MENU_HEADER.map((item, i) => (
                        <li key={i} className=" flex justify-between  border-b-[rgba(92,92,92,.23)] border-b-[1px]">
                            <Link className="leading-[26px] pl-[15px] py-[12px] text-[rgba(255,255,255,.8)] " to='/'>{item.toUpperCase()}</Link>
                            <div className="w-[49px] flex justify-center items-center border-l-[rgba(92,92,92,.23)] border-l-[1px]"><FontAwesomeIcon className="text-[#bbb]" icon={faAngleDown} /></div>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="login-register flex justify-between  border-b-[rgba(92,92,92,.23)] border-b-[1px]">
                <Link className="leading-[26px] pl-[15px] py-[12px] text-[rgba(255,255,255,.8)] " to='/'>LOGIN / REGISTER</Link>
            </div>
        </section>
    );
}

export default MenuNav;