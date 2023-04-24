import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faBars, faCartShopping, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faHeart, faUser } from '@fortawesome/free-regular-svg-icons';
const array = ["home", "shop", "blog", "pages", "features"]
const URL = "https://new-basel2.myshopify.com/"
function Header({ handleShowMenu, handleShowLogin }: { handleShowMenu: () => void, handleShowLogin: () => void }) {
    return (
        <header className="main-header m-auto">
            <div className="header-container w-full md:w-[95%] md:mx-auto px-[15px] ">
                <div className="wrap-header w-full min-h-[60px] relative flex justify-between items-center">
                    <div className="left">
                        <button className="mobile w-[30px] lg:hidden my-auto"
                            onClick={handleShowMenu}
                        >
                            <FontAwesomeIcon className="w-[18px] h-[18px]" icon={faBars} />
                        </button>
                        <nav className="hidden lg:block menu-left">
                            <ul className="menu flex -mx-[8px]">
                                {array.map((item, index) => {
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
                    <div className="right flex">
                        <div className="flex items-center relative">
                            <div className="login" onClick={handleShowLogin}>
                                <div className="mobile lg:hidden w-[30px] h-[30px] flex justify-center items-center ml-[10px]">
                                    <FontAwesomeIcon className="" icon={faUser} />
                                </div>
                                <button className=" hidden lg:flex lg:items-center mr-[15px] pr-[35px] border-r-[#f5f5f5] border-r-[2px] text-[13px] italic " >
                                    <span className="relative over after:h-[1px] after:absolute after:bg-[#919191] after:bottom-0 after:right-0 after:opacity-0 after:w-0 after:transition-all after:duration-200 after:ease-linear hover:after:w-full hover:after:left-0 hover:after:opacity-100">Login / Register</span>
                                </button>
                            </div>

                            <div className="button flex">
                                <div className="hidden lg:flex">
                                    <button className="w-[30px] h-[30px] flex justify-center items-center ml-[10px]">
                                        <FontAwesomeIcon className="lead-[30px] text-[20px]" icon={faMagnifyingGlass} />
                                    </button>
                                    <button className="w-[30px] h-[30px] flex justify-center items-center ml-[10px]">
                                        <FontAwesomeIcon className="lead-[30px] text-[20px]" icon={faHeart} />
                                    </button>
                                </div>
                                <div className="cart text-[13px] flex justify-center items-center ml-[10px]">
                                    <button className="w-[30px] h-[30px] flex items-center">
                                        <FontAwesomeIcon className="" icon={faCartShopping} />
                                    </button>
                                    <span className="hidden lg:block">
                                        <span className="cartCount">0</span>
                                        <span className="subtotal-divider">/</span>
                                        <span className="money font-bold">$0.00</span>
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