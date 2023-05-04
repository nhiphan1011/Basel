import { faCaretLeft, faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { Link } from "react-router-dom";
const nav = [
    "all", "bags", "accessories", "jewellery", "man", "shoes", "watches", "woman", "other"
]
function Items({ currentItems }: { currentItems: Array<any> }) {
    return (
        <div className="products grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 mb-[30px]">
            {currentItems.map((item, i) => (
                <div className="product text-center" key={i}>
                    <div className="top relative">
                        {/* <Link to="" className="top hover:opacity-0 duration-[400ms]"><img alt="" src={item.url[1]} /></Link> */}
                        <Link to="" className="top hover:opacity-0 duration-[400ms]"><img alt="" src={item.url} /></Link>
                        {/* <Link to="" className="top-behind absolute top-0 -z-10"><img alt="" src={item.url[0]} /></Link> */}
                    </div>
                    <div className="swatches"></div>
                    <h3 className="title">{item.name}</h3>
                    <p className="price">{item.name}</p>
                </div>
            ))}
        </div>
    );
}
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
                        {nav.map((item, i) => (
                            <li className="uppercase px-2.5 tracking-[1px] leading-[50px] " key={i}><Link className="" to={`collections/${item}`}>{item}</Link></li>
                        ))}
                    </ul>

                </div>
            </div>
            <div className="content container mb-10">
                <div className="shop-head"></div>
                <Items currentItems={currentItems} />
                <ReactPaginate
                    breakLabel="..."
                    nextLabel={<FontAwesomeIcon icon={faChevronRight} />}
                    previousLabel={<FontAwesomeIcon icon={faChevronLeft} />}
                    pageCount={pageCount}
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={5}
                    marginPagesDisplayed={1}
                    pageClassName="page-item w-[34px] leading-[32px] mr-[3px] border-[1px] border-white border-b-[#b1b1b1] hover:border-[#b1b1b1]"
                    pageLinkClassName="page-link"
                    previousClassName="page-previous w-[34px] flex justify-center items-center"
                    previousLinkClassName="page-previous-link"
                    nextClassName="page-next w-[34px] flex justify-center items-center"
                    nextLinkClassName="page-next-link"
                    breakClassName="page-break w-[34px] leading-[32px] mr-[3px] border-[1px] border-b-[#b1b1b1] border-white"
                    breakLinkClassName="page-break-link "
                    containerClassName="container flex text-center justify-center text-[16px]"
                    activeClassName="active text-white bg-black border-black border-b-black hover:border-black"
                    disabledClassName="hidden"
                />
                <div className="footer"></div>
            </div>

        </div>
    );
}

export default CollectionView;