import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getProductList } from "modules/collection";
import CollectionView from "./CollectionView";

function CollectionContainer() {
    const limit = 12
    const dispatch = useDispatch()
    const { products, total } = useSelector((state: any) => state.product.list)
    const [offSet, setOffSet] = useState<number>(0);
    const [pageCount, setPageCount] = useState<number>(0);
    useEffect(() => {
        dispatch(getProductList({ offset: offSet, limit }))
        if (products.length > 0) setPageCount(total % limit)
    }, [offSet])

    const handlePageClick = (event: any) => {
        const newStartIndex = event.selected * limit
        setOffSet(newStartIndex)
    };
    return <CollectionView currentItems={products} pageCount={pageCount} handlePageClick={handlePageClick} />
}
export default CollectionContainer;