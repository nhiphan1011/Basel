import { Link } from "react-router-dom";
import ReactPaginate from "react-paginate";
import Items from "./Item";
import { MENU_NAV } from "constant";
import { faCaretLeft, faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function CollectionView({ currentItems, pageCount, handlePageClick }: { currentItems: Array<any>, pageCount: number, handlePageClick: (event: any) => void }) {
    return (
        <div className="collections">
            <div className=" nav-shop bg-black">
                <div className="container relative">
                    <button className="back absolute left-0 h-[40px] w-[50px]  ">
                        <p className="relative w-[25px] h-[2px] m-auto bg-white">
                            <span className="absolute -left-[4px] top-1/2 -translate-y-1/2 text-white"><FontAwesomeIcon icon={faCaretLeft} /></span>
                            <span className="absolute right-0 -top-[5px] w-[2px] h-[7px] bg-white"></span>
                        </p>
                    </button>
                    <Link to="" className="text-white absolute lg:hidden left-1/2 -translate-x-1/2">CATEGORIES
                        <span className="relative w-[20px] h-[20px] ml-4">
                            <span className="absolute top-1/2 -right-[4px] w-[10px] h-[2px] bg-[#dcdcdc] rotate-[50deg]"></span>
                            <span className="absolute top-1/2 w-[10px] h-[2px] bg-[#dcdcdc] -rotate-[50deg]"></span>
                        </span>
                    </Link>
                    <ul className="hidden lg:flex text-white -mx-2.5 justify-center">
                        {MENU_NAV.map((item, i) => (
                            <li className="uppercase px-2.5 tracking-[1px] leading-[50px] " key={i}><Link className="" to={`collections/${item}`}>{item}</Link></li>
                        ))}
                    </ul>

                </div>
            </div>
            <div className="content container mb-10">
                <div className="shop-head"></div>
                {currentItems?.length > 0 && <Items currentItems={currentItems} />}
                <ReactPaginate
                    breakLabel="..."
                    nextLabel={<FontAwesomeIcon icon={faChevronRight} />}
                    previousLabel={<FontAwesomeIcon icon={faChevronLeft} />}
                    pageCount={pageCount}
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={5}
                    marginPagesDisplayed={1}
                    pageClassName="page-item"
                    pageLinkClassName="page-link"
                    previousClassName="page-arrow page-previous "
                    previousLinkClassName="page-previous-link"
                    nextClassName="page-arrow page-next "
                    nextLinkClassName="page-next-link"
                    breakClassName="page-item page-break"
                    breakLinkClassName="page-link page-break-link "
                    containerClassName="container flex text-center justify-center text-[16px]"
                    activeClassName="active disabled"
                    disabledClassName="hidden"
                />
                <div className="footer"></div>
            </div>

        </div>
    );
}

export default CollectionView;