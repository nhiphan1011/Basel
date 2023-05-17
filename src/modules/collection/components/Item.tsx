import { Link } from "react-router-dom";
// import { IItem } from "modules/collection";
// export default function Items({ items }: Array<IItem>) {
export default function Items({ currentItems }: { currentItems: Array<any> }) {
    return (
        <div className="products grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 mb-[30px]">
            {currentItems.map((item, i) => (
                <div className="product text-center" key={i}>
                    <div className="top relative">
                        <Link to="" className="top hover:opacity-0 duration-[400ms]"><img alt="" src={item.thumbnail} /></Link>
                        <Link to="" className="top-behind absolute top-0 -z-10"><img alt="" src={item.images[0]} /></Link>
                    </div>
                    <div className="swatches"></div>
                    <h3 className="title">{item.title}</h3>
                    <p className="price">{item.price}</p>
                </div>
            ))}
        </div>
    );
}