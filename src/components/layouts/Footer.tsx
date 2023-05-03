import { faEnvelope, faLocationArrow, faMobileScreenButton } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const footer = [
    {
        title: "OUR STORIES",
        menu: ["Ha Noi", "New York", "London SF", "Los Angeles", "Chicago", "Las Vegas"]
    },
    {
        title: "INFORMATION",
        menu: ["About Store", "New Collection", "Woman Dress", "Contact Us", "Latest News", "Our Sitemap"]
    },
    {
        title: "USEFUL LINKS",
        menu: ["Privacy Policy", "Returns", "Terms & Conditions", "Contact Us", "Latest News", "Our Sitemap"]
    },
    {
        title: "FOOTER MENU",
        menu: ["Instagram profile", "New Collection", "Woman Dress", "Contact Us", "Latest News", "Purchase Theme"]
    },
]
function Footer() {
    return (
        <footer className="footer bg-black pt-[50px] pb-[20px]">
            <div className="container ">
                <div className="social-icon m-auto mb-[30px] text-footerText flex justify-center gap-[10px]">
                    <Link to="" className="fb text-[18px] hover:text-white "><FontAwesomeIcon icon={faFacebookF} /></Link>
                    <Link to="" className="twitter text-[18px] hover:text-white "><FontAwesomeIcon icon={faTwitter} /></Link>
                    <Link to="" className="mail text-[18px] hover:text-white "><FontAwesomeIcon icon={faEnvelope} /></Link>
                </div>
                <div className="footer lg:flex">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 lg:w-4/5">
                        {footer.map((menu, index) => (
                            <div key={index} className={`footer ${index} mb-[30px]`}>
                                <h5 className="relative text-white pb-[4px] font-bold mb-[25px] before:w-[30px] before:h-[2px] before:bg-[rgba(255,255,255,.8)] before:absolute before:bottom-0">{menu.title}</h5>
                                {menu.menu.map((item, i) => (
                                    <p key={i} className="mb-[15px]"><Link className="text-footerText" to="">{item}</Link></p>
                                ))}
                            </div>
                        ))}
                    </div>
                    <div className="md:w-1/2 lg:w-1/5">
                        <h5 className="relative text-white pb-[4px] font-bold mb-[25px] before:w-[30px] before:h-[2px] before:bg-[rgba(255,255,255,.8)] before:absolute before:bottom-0">ABOUT THE STORE</h5>
                        <p className="mb-[15px] text-footerText">STORE - worldwide fashion store since 1978. We sell over 1000+ branded products on our web-site.</p>
                        <p className="text-footerText"><span className="mr-[4px]"><FontAwesomeIcon icon={faLocationArrow} /></span> 451 Wall Street, USA, New York</p>
                        <p className="text-footerText"><span className="mr-[4px]"><FontAwesomeIcon icon={faMobileScreenButton} /></span> Phone: (064) 332-1233</p>
                    </div>
                </div>
            </div>

        </footer>
    );
}

export default Footer;