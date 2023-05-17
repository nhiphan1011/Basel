import { ProductView } from "modules/product";
import { useState } from "react";
const product = {
    image: ['https://cdn.shopify.com/s/files/1/0102/4383/3952/products/man-25_1_1f371745-0e3b-471d-9dbe-e4514eae9fd2.progressive.jpg?v=1575433476', 'https://cdn.shopify.com/s/files/1/0102/4383/3952/products/man-25_1_1f371745-0e3b-471d-9dbe-e4514eae9fd2.progressive.jpg?v=1575433476', 'https://cdn.shopify.com/s/files/1/0102/4383/3952/products/man-25_1_1f371745-0e3b-471d-9dbe-e4514eae9fd2.progressive.jpg?v=1575433476', 'https://cdn.shopify.com/s/files/1/0102/4383/3952/products/man-25_1_1f371745-0e3b-471d-9dbe-e4514eae9fd2.progressive.jpg?v=1575433476', 'https://cdn.shopify.com/s/files/1/0102/4383/3952/products/man-24_dcba02de-7b5b-40fb-842b-b5f9ce959465.progressive.jpg?v=1575433476', 'https://cdn.shopify.com/s/files/1/0102/4383/3952/products/man-24_dcba02de-7b5b-40fb-842b-b5f9ce959465.progressive.jpg?v=1575433476'],
    title: 'Jhecked flannel shirt',
    range: '$79.00 – $89.00',
    sold: ' 5 sold in last 21 hours',
    description: 'Viverra a consectetur Enim in malesuada fusce dolor mi massa leo taciti nulla vestibulum dignissim senectus vitae elit ullamcorper primis. Facilisis scelerisque mi Amet quisque adipiscing scelerisque vestibulum a parturient aptent...',
    color: ['black', 'brown', 'blue'],
    size: ['L', 'M', 'XS'],
    price: '$89.00'

}
function ProductContainer() {
    const [index, setIndex] = useState<number>(0)
    const handleTabIndex = (i: number) => {
        setIndex(i)
    }
    return (<ProductView product={product} handleTabIndex={handleTabIndex} index={index} />);
}

export default ProductContainer;