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
const blog = [
    {
        img: "https://cdn.shopify.com/s/files/1/0102/4383/3952/articles/blog12-1-1024x629_1024x.progressive_cdc1289a-5733-48b8-b10f-da4825bb6644_360x.jpg",
        title: "Dapibus a at gravida",
        author: "Shopify API",
        content: "Ut cubilia metus sagittis rhoncus non suspendisse vestibulum a taciti posuere urna scelerisque neque scelerisque condimentum sed hac sem"
    },
    {
        img: "https://cdn.shopify.com/s/files/1/0102/4383/3952/articles/slider-hero-1-1024x539_360x.jpg",
        title: "Dapibus a at gravida",
        author: "Shopify API",
        content: "In suspendisse at condimentum vitae torquent eu nam a adipiscing convallis quis elit quis mi suscipit adipiscing risus nisi quis leo elementum justo"
    },
    {
        img: "https://cdn.shopify.com/s/files/1/0102/4383/3952/articles/blog-new-1-1024x629_1024x.progressive_0e983ea1-a23f-4494-af96-653ad5da78aa_360x.jpg",
        title: "Hac fames tempor",
        author: "Shopify API",
        content: "Egestas mus a mus rhoncus adipiscing iaculis facilisis a eu nunc varius a per parturient vestibulum suspendisse aenean semper velit aliquam"
    },
    {
        img: "https://cdn.shopify.com/s/files/1/0102/4383/3952/articles/blog-new-17-1024x629_1024x.progressive_d3bc5f06-ace8-4f83-914f-8a52fff1b123_360x.jpg",
        title: "Venenatis veulum peus",
        author: "Shopify API",
        content: "Sociosqu scele risque aliquet penatibus pretium vesti bulum imperdiet ad metus a tempus congue a venenatis condi mentum parturient dis"
    },
    {
        img: "https://cdn.shopify.com/s/files/1/0102/4383/3952/articles/blog-image-9-1-1024x629_1024x.progressive_6c5935e2-88bf-459b-8d0c-18fc3e3ccc8f_360x.jpg",
        title: "Condentum integer ridiculus",
        author: "Shopify API",
        content: "A sodales suspen disse vestibulum dui ultrices ferm entum a parturient scele risque potenti placerat blandit purus adipiscing eros habitasse sodales"
    },
    {
        img: "https://cdn.shopify.com/s/files/1/0102/4383/3952/articles/blog-new-photo-1-1024x629_1024x.progressive_f5f0fa32-89d2-4a2b-a83c-c423008c7517_360x.jpg",
        title: "Urna ligula inceptos",
        author: "Shopify API",
        content: "Vestibulum malesuada elit sit placerat congue viverra congue orci cras mus sociis non mi enim cum ante. Condimentum ac ac ullamcorper ar"
    }
]
const feedback = [
    {
        avatar: "https://cdn.shopify.com/s/files/1/0102/4383/3952/files/testimonial2-1-100x100_100x100.progressive.jpg",
        name: "John Doe",
        content: "Fringilla iaculis ante torquent a diam a vestibulum diam nisi augue dictumst parturient a vestibulum tortor viverra inceptos adipiscing nec a ullamcorper.Ullamcorper aliquam rutrum."
    },
    {
        avatar: "https://cdn.shopify.com/s/files/1/0102/4383/3952/files/testimonial1-100x100_100x100.progressive.jpg",
        name: "John Doe",
        content: "Fringilla iaculis ante torquent a diam a vestibulum diam nisi augue dictumst parturient a vestibulum tortor viverra inceptos adipiscing nec a ullamcorper.Ullamcorper aliquam rutrum."
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
        <main className="homepage">
            <section className="banner ">
                <Slider className="slide" {...settings}
                >
                    {banner.map((item, i) => (
                        <div key={i} className={`slide relative h-[350px] sm:h-[592px] md:h-[512px] lg:h-[600px] bg-top bg-cover ${i === 0 ? "bg-[url('https://cdn.shopify.com/s/files/1/0102/4383/3952/files/highcompress-slider_1.jpg')]" : "bg-[url('https://cdn.shopify.com/s/files/1/0102/4383/3952/files/highcompress-slider_2.jpg')]"}`}>
                            <div className={`absolute top-1/2 -translate-y-1/2 px-[15%] py-[6%] md:px-[10%] lg:px-[6%] flex flex-col ${i === 0 ? 'items-start' : 'items-end text-right'} w-full z-50`}>
                                <h2 className="uppercase font-bold text-[40px] md:text-[80px] lg:text-[119px] leading-1 text-white mb-[20px]">{item.title}</h2>
                                <h6 className="font-medium text-white text-[40px] md:text-[60px] lg:text-[73px] mb-[20px] leading-[1.3]">{item.subtitle}</h6>
                                <button className="uppercase bg-mint text-white text-[10px] lead-[14px] sm:text-[14px] sm:lead-[18px] sm:tracking-[0.3px] py-[7px] sm:py-[10px] px-[14px] sm:px-[20px] hover:opacity-[0.8] hover:duration-[250]">shop now</button>
                            </div>
                        </div>
                    ))}
                </Slider>
            </section>
            <section className="categories wrapper">
                <div className="container  mt-[60px] ">
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
                    <div className="categories grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-7 mb-[30px]">
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
                </div>
            </section>
            <section className="collection wrapper">
                <div className="container  mt-[60px] ">
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
                    <div className="collection grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-[30px] gap-y-[40px] mb-[3.5%]">
                        {collection.map((product, index) => (
                            <div className="product relative" key={index}>
                                <Link to="" className="top hover:opacity-0 duration-[400ms]"><img alt="" src={product.url[0]} /></Link>
                                <Link to="" className="top-behind absolute top-0 -z-10"><img alt="" src={product.url[1]} /></Link>
                                <h3 className="title mb-[27px] text-[#1b1919]"><Link className="w-fit border-b-[1px] border-b-[rgba(0,0,0,.1)] line-clamp-2 " to="" >{product.title}</Link></h3>
                                <div className="price">
                                    <p className="">{product.price}</p>
                                    <button className="btn-add">Add to cart</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section className=" text-center px-[15px] pt-[90px] pb-[60px] mb-[3%] text-white bg-[url('https://cdn.shopify.com/s/files/1/0102/4383/3952/files/highcompress-main-big-baner-8_1728x.jpg')]">
                <div className="">
                    <h2 className="mb-[20px] text-[26px]">Connect to Basel & Co.</h2>
                    <h2 className="mb-[20px] text-[58px]">Join Our Newsletter</h2>
                    <p className="mb-[25px] text-[14px]">Hey you, sign up it only takes a second to be the first to find out about our latest news and promotionsâ ¦</p>
                </div>
                <form className=" max-w-[590px] flex flex-wrap justify-center text-[14px] leading-[18px] mx-auto">
                    <p className="w-full relative max-w-[390px] bg-transparent ">
                        <div className="absolute"><FontAwesomeIcon icon={faEnvelope} /></div>
                        <input type="email" placeholder="Your email address" className="w-full pl-[35px] pr-[10px] bg-[transparent] border-b-[2px] border-b-white lead-[18px] text-white" />
                    </p>
                    <button type="submit" className="bg-white text-[#5f5f5f]  px-[55px] py-[10px]" >SIGN UP</button>
                </form>
            </section>
            <section className="blog mb-[50px]">
                <div className="container mt-[60px] mb-[50px] grid md:grid-cols-3 gap-x-[30px] gap-y-[50px] ">
                    {blog.map((post, index) => (
                        <div key={index} className="post text-center ">
                            <header className="relative ">
                                <div className="thumbnail overflow-hidden">
                                    <Link to="" className="">
                                        <img className="w-full h-full hover:scale-110 hover:opacity-60 ease-out duration-1000" alt="thumbnail" src={post.img} />
                                    </Link>
                                </div>
                                <div className="date absolute min-w-[53px] bg-white left-[10px] top-[10px] pt-1 pb-2">
                                    <p className="text-[24px] ">18</p>
                                    <p className="uppercase text-[12px] tracking-[0.5px]">Sep</p>
                                </div>
                                <div className="maskpost-category absolute left-1/2 bottom-0 -translate-x-1/2 bg-mint px-[10px] text-white text-[12px] h-[25px]">
                                    <Link to="">Hobbies</Link>
                                </div>
                            </header>
                            <div className="content text-[14px]">
                                <h3 className="title mb-[10px] text-[22px] hover:text-mint"><Link to="">{post.title}</Link></h3>
                                <p className="meta text-blog italic mb-[10px] ">{`By `}
                                    <span className="author text-mint">{post.author}</span>
                                    <span> / </span>
                                    <span className="reply hover:underline"><Link to="">Leave a comment</Link></span>
                                </p>
                                <p className="text-blog">{post.content}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="blog-footer text-center "><Link to="" className="w-fit border-[2px] border-[#000] font-semibold tracking-[0.3px] px-[20px] py-[10px] mx-auto hover:bg-black hover:text-white duration-[250ms]">LOAD MORE POSTS</Link></div>
            </section>
            <section className="about flex mb-[25px] min-h-[446px] bg-center bg-[url('https://cdn.shopify.com/s/files/1/0102/4383/3952/files/highcompress-main-big-baner-7_1728x.jpg')]">
                <div className="container pt-[65px] pb-[60px]">
                    <div className="wrapper h-full flex items-center bg-white mx-[4%] px-[3%] border-[5px] border-[rgba(107,107,107,0.11)]">

                        <div className="left md:w-1/2 md:px-[15px] text-center text-[#4c4c4c]">
                            <div className="w-full h-full max-w-[330px] max-h-[80px] m-auto"><img className="" alt="Basel Shopify Theme 2" src="https://cdn.shopify.com/s/files/1/0102/4383/3952/files/logo-basel.svg?v=11944076954395008056" /></div>
                            <p className="text-[14px] mb-2.5">MINIMALISTIC AJAX E-COMMERCE THEME</p>
                            <p className="text-[14px] w-[90%] mx-auto mb-5">Adipiscing dignissim euismod ad venenatis volutpat sociis feugiat purus ridiculus rhoncus nullam sodales euismod ad venenatis volutpa ridiculus.</p>
                            <Link to="collections/all" className="uppercase bg-black text-white px-3.5 py-[7px] tracking-[0.3px] text-[12px] hover:bg-[#333] duration-[250ms]">purchase basel</Link>
                        </div>
                        <div className="right hidden md:w-1/2 md:flex md:flex-col">
                            <h3 className="italic">About the shop</h3>
                            <p><span>Basel & Company</span> – is a famous worldwide fashion store dipiscing dignissim euismod ad venenatis volutpat sociis feugiat purus ridiculus.</p>
                            <button className="uppercase">shop now</button>
                        </div>
                    </div>
                </div>
            </section>
            <section className="feedback mb-[25px]">
                <div className="container w-1/2 m-auto text-center">
                    <div className="title text-center mb-[18px]">
                        <h4 className="title text-[20px] mb-[12px] uppercase">What they say about us</h4>
                        <div className="flex justify-center">
                            <div className="w-[24px] h-[1px] bg-[#dcdcdc]"></div>
                            <div className="relative w-[10px] mx-[5px]">
                                <div className="absolute w-[12px] h-[1px] bg-[#dcdcdc] rotate-45"></div>
                                <div className="absolute w-[12px] h-[1px] bg-[#dcdcdc] -rotate-45"></div>
                            </div>
                            <div className="w-[24px] h-[1px] bg-[#dcdcdc]"></div>
                        </div>
                    </div>
                    <div className="testimonial p-[15px]">
                        <Slider className="testimonial" dots={true} arrows={false}>
                            {feedback.map((item, index) => (
                                <div key={index} className={`slide ${index}`}>
                                    <div className="img-wrapper w-[100px] h-[100px] rounded-full overflow-hidden m-auto mb-[15px]"><img src={item.avatar} alt={`slide ${index}`} /></div>
                                    <p className="mb-[15px]">{item.content}</p>
                                    <p><span className="font-bold">{item.name}</span> - Happy Customer</p>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </section>
            <section className="bands flex flex-row bg-[#f4f4f4] px-[15px] md:px-[30px] pt-[35px] pb-[30px]">
                <h2 className="hidden w-1/4 xl:block uppercase tracking-[2px] text-center m-auto border-r-[#E4E4E4] border-r-[2px] px-[30px] py-[9px]">Our Partners</h2>
                <div className="terranova"><Link to=""><img src="https://cdn.shopify.com/s/files/1/0102/4383/3952/files/logo-2_250x.png" alt="terranova" /></Link></div>
                <div className="foreverf21"><Link to=""><img src="https://cdn.shopify.com/s/files/1/0102/4383/3952/files/logo-6_250x.png" alt="foreverf21" /></Link></div>
                <div className="sezane hidden sm:block"><Link to=""><img src="https://cdn.shopify.com/s/files/1/0102/4383/3952/files/logo-1_250x.png" alt="sezane" /></Link></div>
                <div className="zara hidden sm:block"><Link to=""><img src="https://cdn.shopify.com/s/files/1/0102/4383/3952/files/logo-3_250x.png" alt="zara" /></Link></div>
                <div className="bershka hidden lg:block"><Link to=""><img src="https://cdn.shopify.com/s/files/1/0102/4383/3952/files/logo-4_250x.png" alt="bershka" /></Link></div>
            </section>
        </main>
    );
}

export default HomeView;