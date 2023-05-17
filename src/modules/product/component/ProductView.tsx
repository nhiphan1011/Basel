import Delivery from "./Delivery";
import Description from "./Despcription";
import ProductImage from "./ProductImage";
import Information from "./Information";

interface IProductView {
    product: any,
    index: number,
    handleTabIndex: (i: number) => void
}
const tabs = ["Description", "Additional Information", "Reviews", "Shipping & Delivery"]
function ProductView({ product, index, handleTabIndex }: IProductView) {
    const { image, title, price } = product
    return (
        <div className="">
            <section className="summary ">
                <div className="container grid grid-cols-2">
                    <ProductImage items={image} />
                    <div className="content px-[15px]">
                        <h1 className="mb-2.5 text-[38px]">{title}</h1>
                        <p className="my-5">{price}</p>
                        <form>
                            <div className="quantity">
                                <input type="button" value="-" />
                                <input type="number" />
                                <input type="button" value="+" />
                            </div>
                            <button className="w-full bg-black text-white mt-[15px] mb-[20px] py-[11px]">ADD TO CART</button>
                            <button className="w-full bg-mint text-white py-[14px]">BUY IT NOW</button>
                        </form>
                        <div>Login to use Wishlist</div>
                    </div>
                </div>
            </section>
            <section className="tab bg-[#f9f9f9] pt-[30px] pb-[50px]">
                <div className="container">
                    <div className="heading flex mb-[25px]">
                        {tabs.map((tab, i) => (
                            <button className={`tab ${index === 1 ? 'tab-active' : ''}`} key={i} onClick={() => handleTabIndex(i)}>{tab}</button>
                        ))}
                    </div>
                    <div className="content">
                        {index === 0 && <Description />}
                        {index === 1 && <Information />}
                        {index === 2 && <div>Review</div>}
                        {index === 3 && <Delivery />}
                    </div>
                </div>
            </section>
            <section className="related">

            </section>
            <section className="recent">

            </section>
        </div>
    );
}

export default ProductView;