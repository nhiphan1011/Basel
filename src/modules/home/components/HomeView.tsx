import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
const banner = [
    {
        title: 'Man Bags',
        subtitle: "New Men's Collection",
    },
    {
        title: 'NEW STYLE',
        subtitle: "Boot's Collection For Men",
    }
]
const collection = [
    {
        url: [
            "https://cdn.shopify.com/s/files/1/0102/4383/3952/products/jewelry-12_8a0e17aa-c879-4127-98ea-6242dbf9568c_360x.jpg",
            "https://cdn.shopify.com/s/files/1/0102/4383/3952/products/jewelry-2_a1d9a402-b051-4c85-8761-6e2a489eddcc_360x.jpg"],
        title: "Jeptum ring earrings",
        price: 299.00
    },
    {
        url: ["https://cdn.shopify.com/s/files/1/0102/4383/3952/products/man-25_1_1f371745-0e3b-471d-9dbe-e4514eae9fd2_360x.jpg",
            "https://cdn.shopify.com/s/files/1/0102/4383/3952/products/man-24_dcba02de-7b5b-40fb-842b-b5f9ce959465_360x.jpg"],
        title: "Jhecked flannel shirt",
        price: 89.00
    },
    {
        url: ["https://cdn.shopify.com/s/files/1/0102/4383/3952/products/man-26_d7bf32dd-6a90-453f-acb6-1be183262632_360x.jpg",
            "https://cdn.shopify.com/s/files/1/0102/4383/3952/products/man-23_aeef1f21-0f1a-4173-bcb7-e0fb3fe8bc32_360x.jpg"],
        title: "Basic Korean-style coat",
        price: 219.00
    },
    {
        url: ["https://cdn.shopify.com/s/files/1/0102/4383/3952/products/accessories-23_421d7906-0b30-4ab1-8f01-392a1419ad6f_360x.jpg",
            "https://cdn.shopify.com/s/files/1/0102/4383/3952/products/accessories-241_7c9b49ad-9f62-42cb-bb36-4ad90c5eea70_360x.jpg"],
        title: "Eingerless gloves in camel",
        price: 390.00
    },
    {
        url: ["https://cdn.shopify.com/s/files/1/0102/4383/3952/products/accessories-16_64fd0422-07ec-4407-b434-a573bbdf3300_360x.jpg",
            "https://cdn.shopify.com/s/files/1/0102/4383/3952/products/accessories-5_f85ee6be-135b-445f-b539-c7f4482e7c7f_360x.jpg"],
        title: "Classic Square Buckle Belt",
        price: 115.00
    },
    {
        url: ["https://cdn.shopify.com/s/files/1/0102/4383/3952/products/stiky-image-1_6dc7c6c4-fbad-4480-aa87-dad443314842_360x.jpg",
            "https://cdn.shopify.com/s/files/1/0102/4383/3952/products/stiky-image-2_697a3b2d-0e4d-494e-b395-3903a1d0dc97_360x.jpg"],
        title: "Erinted dress with trimmi",
        price: 399.00
    },
    {
        url: ["https://cdn.shopify.com/s/files/1/0102/4383/3952/products/woman-17_d09cf354-6a46-4cf4-a56e-9aa6e0724577_360x.jpg",
            "https://cdn.shopify.com/s/files/1/0102/4383/3952/products/woman-26_e67d6a30-9fba-4e7f-b8c9-df7cf85477f4_360x.jpg"],
        title: "Basic knit dress chest",
        price: 10.00
    },
    {
        url: ["https://cdn.shopify.com/s/files/1/0102/4383/3952/products/watches-3_9c41f2e9-1350-4850-94db-256335e36670_360x.jpg",
            "https://cdn.shopify.com/s/files/1/0102/4383/3952/products/watches-14_fb856b17-4e25-4a61-8648-b111606daefc_360x.jpg"],
        title: "Jasic rubber watch",
        price: 333.00
    },

]
function HomeView() {
    const settings = {
        fade: true,
        arrows: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div className="relative">
            <div className="banner ">
                <Slider className="slide" {...settings}
                >
                    {banner.map((item, i) => (
                        <div key={i} className={`slide relative h-[350px] sm:h-[592px] md:h-[512px] lg:h-[600px] bg-top bg-cover ${i === 0 ? "bg-[url('https://cdn.shopify.com/s/files/1/0102/4383/3952/files/highcompress-slider_1.jpg')]" : "bg-[url('https://cdn.shopify.com/s/files/1/0102/4383/3952/files/highcompress-slider_2.jpg')]"}`}>
                            <div className={`absolute top-1/2 -translate-y-1/2 px-[15%] py-[6%] md:px-[10%] lg:px-[6%] flex flex-col ${i === 0 ? 'items-start' : 'items-end text-right'} w-full z-50`}>
                                <h2 className="uppercase font-bold text-[40px] sm:text-[80px] lg:text-[119px] leading-1 text-white mb-[20px]">{item.title}</h2>
                                <h6 className="font-medium text-white text-[40px] sm:text-[60px] lg:text-[73px] mb-[20px] leading-[1.3]">{item.subtitle}</h6>
                                <button className="uppercase bg-[#1aada3] text-white text-[10px] lead-[14px] sm:text-[14px] sm:lead-[18px] sm:tracking-[0.3px] py-[7px] sm:py-[10px] px-[14px] sm:px-[20px] hover:opacity-[0.8] hover:duration-[250]">shop now</button>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
            <div className="container sm:w-[750px] md:w-[970px] lg:w-[1170px] mx-auto mt-[60px] px-[15px]">
                <div className="title text-center mb-[18px]">
                    <p className="subtitle text-[16px] text-[#9b9b9b] mb-[10px]">MADE THE HARD WAY</p>
                    <h4 className="title text-[20px] mb-[12px]">FEATURED CATEGORIES</h4>
                    <div className="flex justify-center">
                        <div className="w-[24px] h-[1px] bg-[#dcdcdc]"></div>
                        <div className="relative w-[10px] mx-[5px]">
                            <div className="absolute w-[12px] h-[1px] bg-[#dcdcdc] rotate-45"></div>
                            <div className="absolute w-[12px] h-[1px] bg-[#dcdcdc] -rotate-45"></div>
                        </div>
                        <div className="w-[24px] h-[1px] bg-[#dcdcdc]"></div>
                    </div>
                </div>
                <div className="px-[9%] mb-[25px] text-center">Basel & Co. is a powerful eCommerce theme for Shopify. Visit our shop page to see all main features for <span><Link className="italic text-[#1daaa3] underline" to="#">Your Store</Link></span></div>
                <div className="categories grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-7 mb-[30px]">
                    <Link to='collections/bag' className="bag relative lg:col-span-2 lg:row-span-2 overflow-hidden">
                        <div><img alt="bag" className="w-full h-full hover:scale-[1.11] duration-[600ms]" src="https://cdn.shopify.com/s/files/1/0102/4383/3952/files/cat-bag-5_370x.jpg " /></div>
                        <p className="absolute left-1/2 bottom-[20px] -translate-x-[50%] bg-[#fff] px-[25px] py-[12px]">Bag</p>
                    </Link>
                    <Link to='collections/shoes' className="footwear relative overflow-hidden">
                        <div><img alt="footwear" className="w-full h-full hover:scale-[1.11] duration-[600ms]" src="https://cdn.shopify.com/s/files/1/0102/4383/3952/files/boot-category-1-3-min_370x.jpg" /></div>
                        <p className="absolute left-1/2 bottom-[20px] -translate-x-[50%] bg-[#fff] px-[25px] py-[12px]">Footwear</p>
                    </Link>
                    <Link to='collections/watches' className="watches row-span-2 relative overflow-hidden">
                        <div><img alt="watches" className="w-full h-full hover:scale-[1.11] duration-[600ms]" src="https://cdn.shopify.com/s/files/1/0102/4383/3952/files/cat-watch-2_370x.jpg" /></div>
                        <p className="absolute left-1/2 bottom-[20px] -translate-x-[50%] bg-[#fff] px-[25px] py-[12px]">Watches</p>
                    </Link>
                    <Link to='collections/woman' className="woman relative overflow-hidden">
                        <div><img alt="woman" className="w-full h-full hover:scale-[1.11] duration-[600ms]" src="https://cdn.shopify.com/s/files/1/0102/4383/3952/files/wooman-cat_370x.jpg" /></div>
                        <p className="absolute left-1/2 bottom-[20px] -translate-x-[50%] bg-[#fff] px-[25px] py-[12px]">Woman</p>
                    </Link>
                </div>
                <div className="mb-[65px] bg-[#0a0a0a] text-[rgba(255,255,255,.8)]">
                    <h6 className="px-[20px] py-[12px] text-center tracking-[1.5px]">UP TO 70% OFF THE ENTIRE STORE!. MADE WITH LOVE by <span className="underline"><a href="#">The4 studio</a></span></h6>
                </div>
                <div className="title text-center mb-[18px]">
                    <p className="subtitle text-[16px] text-[#9b9b9b] mb-[10px]">MADE THE HARD WAY</p>
                    <h4 className="title text-[20px] mb-[12px]">FEATURED CATEGORIES</h4>
                    <div className="flex justify-center">
                        <div className="w-[24px] h-[1px] bg-[#dcdcdc]"></div>
                        <div className="relative w-[10px] mx-[5px]">
                            <div className="absolute w-[12px] h-[1px] bg-[#dcdcdc] rotate-45"></div>
                            <div className="absolute w-[12px] h-[1px] bg-[#dcdcdc] -rotate-45"></div>
                        </div>
                        <div className="w-[24px] h-[1px] bg-[#dcdcdc]"></div>
                    </div>
                </div>
                <div className="collection grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-[30px] gap-y-[40px] mb-[3.5%]">
                    {collection.map((product, index) => (
                        <div className="product relative" key={index}>
                            <Link to="" className="top hover:opacity-0 duration-[400ms]"><img alt="" src={product.url[0]} /></Link>
                            <Link to="" className="top-behind absolute top-0 -z-10"><img alt="" src={product.url[1]} /></Link>
                            <h3 className="title mb-[27px] text-[#1b1919]"><Link className="border-b-[1px] border-b-[rgba(0,0,0,.1)] " to="" >{product.title}</Link></h3>
                            <div className="price">
                                <p className="">{product.price}</p>
                                <button className="btn-add">Add to cart</button>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="w-screen absolute left-0 text-center px-[15px] pt-[90px] pb-[60px] mb-[3%] text-white bg-[url('https://cdn.shopify.com/s/files/1/0102/4383/3952/files/highcompress-main-big-baner-8_1728x.jpg')]">
                    <div className="">
                        <h2 className="mb-[20px] text-[26px]">Connect to Basel & Co.</h2>
                        <h2 className="mb-[20px] text-[58px]">Join Our Newsletter</h2>
                        <p className="mb-[25px] text-[14px]">Hey you, sign up it only takes a second to be the first to find out about our latest news and promotionsâ ¦</p>
                    </div>
                    <form className="relative max-w-[590px] flex flex-wrap justify-center text-[14px] leading-[18px] mx-auto">
                        <p className="w-full max-w-[390px] bg-transparent ">
                            <div className="absolute"><FontAwesomeIcon icon={faEnvelope} /></div>
                            <input type="email" placeholder="Your email address" className="w-full h-full pl-[35px] pr-[10px] bg-transparent border-b-[2px] border-b-white text-white" />
                        </p>
                        <input type="submit" value="SIGN UP" className="bg-white text-[#5f5f5f]  px-[55px] py-[10px]" />
                    </form>
                </div>


            </div>
        </div>
    );
}

export default HomeView;