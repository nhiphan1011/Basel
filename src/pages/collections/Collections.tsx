import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
const nav = [
    "all", "bags", "accessories", "jewellery", "man", "shoes", "watches", "woman", "other"
]
const products = [
    {
        url: ["https://cdn.shopify.com/s/files/1/1933/6253/products/bag-12_526x.progressive.jpg",
            "https://cdn.shopify.com/s/files/1/1933/6253/products/bag-3_526x.progressive.jpg"],
        title: "Backpack double strap",
        price: "£12.00 – £15.00"
    },
    {
        url: ["https://cdn.shopify.com/s/files/1/1933/6253/products/bag-12_526x.progressive.jpg",
            "https://cdn.shopify.com/s/files/1/1933/6253/products/bag-3_526x.progressive.jpg"],
        title: "Basic contrast sneakers",
        price: "£10.00"
    },
    {
        url: ["https://cdn.shopify.com/s/files/1/1933/6253/products/bag-12_526x.progressive.jpg",
            "https://cdn.shopify.com/s/files/1/1933/6253/products/bag-3_526x.progressive.jpg"],
        title: "Basic knit dress chest",
        price: "£10.00"
    },
    {
        url: ["https://cdn.shopify.com/s/files/1/1933/6253/products/bag-12_526x.progressive.jpg",
            "https://cdn.shopify.com/s/files/1/1933/6253/products/bag-3_526x.progressive.jpg"],
        title: "Basic Korean-style coat",
        price: "£219.00"
    },
    {
        url: ["https://cdn.shopify.com/s/files/1/1933/6253/products/bag-12_526x.progressive.jpg",
            "https://cdn.shopify.com/s/files/1/1933/6253/products/bag-3_526x.progressive.jpg"],
        title: "Before decaf phone case",
        price: "£49.00 – £59.00"
    },
    {
        url: ["https://cdn.shopify.com/s/files/1/1933/6253/products/bag-12_526x.progressive.jpg",
            "https://cdn.shopify.com/s/files/1/1933/6253/products/bag-3_526x.progressive.jpg"],
        title: "Black sphere and beads",
        price: "£19.00"
    },
    {
        url: ["https://cdn.shopify.com/s/files/1/1933/6253/products/bag-12_526x.progressive.jpg",
            "https://cdn.shopify.com/s/files/1/1933/6253/products/bag-3_526x.progressive.jpg"],
        title: "Black umbrella in handle",
        price: "£99.00"
    },
    {
        url: ["https://cdn.shopify.com/s/files/1/1933/6253/products/bag-12_526x.progressive.jpg",
            "https://cdn.shopify.com/s/files/1/1933/6253/products/bag-3_526x.progressive.jpg"],
        title: "Bold metallic watch",
        price: "£10.00"
    },
    {
        url: ["https://cdn.shopify.com/s/files/1/1933/6253/products/bag-12_526x.progressive.jpg",
            "https://cdn.shopify.com/s/files/1/1933/6253/products/bag-3_526x.progressive.jpg"],
        title: "Cem and cutwork jacket",
        price: "£459.00 – £479.00"
    },
    {
        url: ["https://cdn.shopify.com/s/files/1/1933/6253/products/bag-12_526x.progressive.jpg",
            "https://cdn.shopify.com/s/files/1/1933/6253/products/bag-3_526x.progressive.jpg"],
        title: "Cen’s dress shoes",
        price: "£299.00"
    },
    {
        url: ["https://cdn.shopify.com/s/files/1/1933/6253/products/bag-12_526x.progressive.jpg",
            "https://cdn.shopify.com/s/files/1/1933/6253/products/bag-3_526x.progressive.jpg"],
        title: "Classic Square Buckle Belt",
        price: "£115.00"
    },
    {
        url: ["https://cdn.shopify.com/s/files/1/1933/6253/products/bag-12_526x.progressive.jpg",
            "https://cdn.shopify.com/s/files/1/1933/6253/products/bag-3_526x.progressive.jpg"],
        title: "Clutch printed bag",
        price: "£67.00"
    },

]
function Collections() {
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
            <div className="content container">
                <div className="shop-head"></div>
                <section className="products grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
                    {products.map((item, i) => (
                        <div className="product text-center">
                            <div className="top relative">
                                <Link to="" className="top hover:opacity-0 duration-[400ms]"><img alt="" src={item.url[1]} /></Link>
                                <Link to="" className="top-behind absolute top-0 -z-10"><img alt="" src={item.url[0]} /></Link>
                            </div>
                            <div className="swatches"></div>
                            <h3 className="title">{item.title}</h3>
                            <p className="price">{item.price}</p>
                        </div>
                    ))}
                </section>
                <div className="footer"></div>
            </div>

        </div>
    );
}

export default Collections;