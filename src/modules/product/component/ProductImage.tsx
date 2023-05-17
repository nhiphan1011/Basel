import { useState } from "react";
import Slider from "react-slick";

interface IImage {
    items: Array<string>
}
function Image({ items }: IImage) {
    const [index, setIndex] = useState<number>(0)
    const handleClick = (i: number) => {
        setIndex(i)
    }
    return (
        <div className="flex">
            <div className="w-1/3 overflow-hidden">
                <Slider
                    vertical
                    infinite={false}
                    slidesToShow={3}
                    slidesToScroll={3}
                >
                    {items.map((item, i) => (
                        <div onClick={() => handleClick(i)} key={i}>
                            <img alt="" src={item} />
                        </div>
                    ))}
                </Slider>
            </div>
            <div className="w-2/3">
                <div>
                    <img alt="" src={items[index]} />
                </div>
            </div>
        </div>
    );
}

export default Image;