import { Link } from "react-router-dom";
import { MENU_HEADER } from "constant";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as heart, faAngleDown, faBars, faCartShopping, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faHeart, faUser } from '@fortawesome/free-regular-svg-icons';

const URL = "https://new-basel2.myshopify.com/"
function Header({ handleShowMenu, handleShowLogin }: { handleShowMenu: () => void, handleShowLogin: () => void }) {
    return (
        <header className="main-header sticky top-0 z-[5] m-auto bg-white">
            <div className="container w-full md:w-[95%] mx-auto">
                <div className="wrap-header w-full min-h-[60px] lg:min-h-[95px] relative flex justify-between items-center">
                    <div className="left">
                        <button className="mobile flex w-[30px] mxl:hidden my-auto"
                            onClick={handleShowMenu}
                        >
                            <FontAwesomeIcon className="w-[18px] h-[18px]" icon={faBars} />
                        </button>
                        <nav className="menu-left hidden mxl:block ">
                            <ul className="menu flex -mx-[8px]">
                                {MENU_HEADER.map((item, index) => {
                                    return (
                                        <li className="px-[8px]"
                                            key={index}>
                                            <Link
                                                className="h-[95px] leading-[95px] pr-[1px] text-[14px]"
                                                to={URL}
                                                target="_self"
                                            >{item.toUpperCase()}</Link>
                                            <FontAwesomeIcon className="text-[12px] text-[#bbb]" icon={faAngleDown} />
                                        </li>
                                    )
                                })}
                            </ul>
                        </nav>
                    </div>
                    {/* <div className="site-logo  flex flex-col justify-center text-center px-[15px] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"> */}
                    <Link to="/" className="site-logo flex items-center object-contain text-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 max-w-[200px] max-h-[60px] lg:max-h-[95px] lg:max-w-[196px]">
                        <img className="w-full h-full" alt="Basel Shopify Theme 2" src="https://cdn.shopify.com/s/files/1/0102/4383/3952/files/logo-basel.svg?v=11944076954395008056" />
                    </Link>
                    {/* </div> */}
                    <div className="right h-full flex">
                        <div className="flex items-center relative">
                            <div className="login" onClick={handleShowLogin}>
                                <Link to="" className="mobile lg:hidden w-[30px] h-[30px] flex justify-end items-center ml-[10px]">
                                    <FontAwesomeIcon className="lead-[30px] text-[20px]" icon={faUser} />
                                </Link>
                                <Link to="" className="hidden lg:h-[95px] lg:flex lg:justify-end lg:items-center mr-[15px] pr-[35px] border-r-[#f5f5f5] border-r-[2px] text-[13px] italic " >
                                    <span className="line after:bg-[#919191] ">Login / Register</span>
                                </Link>
                            </div>

                            <div className="button flex">
                                <div className="hidden lg:flex">
                                    <Link to="" className="w-[30px] h-[30px] flex justify-center items-center ml-[10px]">
                                        <FontAwesomeIcon className="lead-[30px] text-[20px]" icon={faMagnifyingGlass} />
                                    </Link>
                                    <Link to="" className="relative w-[30px] h-[30px] flex justify-center items-center ml-[10px]">
                                        <FontAwesomeIcon className="lead-[30px] text-[20px] absolute top-1/2 -translate-y-1/2" icon={faHeart} />
                                        <FontAwesomeIcon className="lead-[30px] text-[20px] duration-300 opacity-0 hover:opacity-100" icon={heart} />
                                    </Link>
                                </div>
                                <div className="cart text-[13px] ml-[10px] flex">
                                    <button className="w-[30px] h-[30px] flex justify-end items-center">
                                        <FontAwesomeIcon className="lead-[30px] text-[20px]" icon={faCartShopping} />
                                    </button>
                                    <span className="hidden mxl:flex items-center">
                                        <span className="cartCount pl-1">0</span>
                                        <span className="subtotal-divider pl-1">/</span>
                                        <span className="money font-bold pl-1">$0.00</span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header >
    )
}

export default Header;