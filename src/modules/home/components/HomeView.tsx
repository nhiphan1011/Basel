import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { BANNER, BLOG, COLLECTIONS, FEEDBACK } from "constant";
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
                    {BANNER.map((item, i) => (
                        <div key={i} className={`slide relative h-[350px] sm:h-[592px] md:h-[512px] lg:h-[600px] bg-top bg-cover ${i === 0 ? "bg-[url('https://cdn.shopify.com/s/files/1/0102/4383/3952/files/highcompress-slider_1.jpg')]" : "bg-[url('https://cdn.shopify.com/s/files/1/0102/4383/3952/files/highcompress-slider_2.jpg')]"}`}>
                            <div className={`absolute top-1/2 -translate-y-1/2 px-[15%] py-[6%] md:px-[10%] lg:px-[6%] flex flex-col ${i === 0 ? 'items-start' : 'items-end text-right'} w-full z-2`}>
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
                <div className="container mt-[60px] ">
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
                        {COLLECTIONS.map((product, index) => (
                            <div className="product relative overflow-hidden" key={index}>
                                <Link to="" className="top hover:opacity-0 duration-[400ms]"><img alt="" src={product.url[0]} /></Link>
                                <Link to="" className="top-behind absolute top-0 -z-2"><img alt="" src={product.url[1]} /></Link>
                                <h3 className="title mb-[27px] text-[#1b1919]"><Link className="w-fit border-b-[1px] border-b-[rgba(0,0,0,.1)] line-clamp-2 " to="" >{product.title}</Link></h3>
                                <div className="price">
                                    <p className="">{product.price}</p>
                                    <button className="btn-add md:absolute">Add to cart</button>
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
                    <div className="w-full relative max-w-[390px] bg-transparent ">
                        <div className="absolute"><FontAwesomeIcon icon={faEnvelope} /></div>
                        <input type="email" placeholder="Your email address" className="w-full pl-[35px] pr-[10px] bg-[transparent] border-b-[2px] border-b-white lead-[18px] text-white" />
                    </div>
                    <button type="submit" className="bg-white text-[#5f5f5f]  px-[55px] py-[10px]" >SIGN UP</button>
                </form>
            </section>
            <section className="blog mb-[50px]">
                <div className="container mt-[60px] mb-[50px] grid md:grid-cols-3 gap-x-[30px] gap-y-[50px] ">
                    {BLOG.map((post, index) => (
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
                            {FEEDBACK.map((item, index) => (
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