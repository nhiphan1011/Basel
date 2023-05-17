import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CollectionView from "./CollectionView";

import { getProductList } from "modules/collection";

function CollectionContainer() {
    const limit = 12
    const dispatch = useDispatch()
    const [offSet, setOffSet] = useState<number>(0);
    const [pageCount, setPageCount] = useState<number>(0);
    const { list, total } = useSelector((state: any) => state.product)
    useEffect(() => {
        dispatch(getProductList({ offset: offSet, limit }))
        if (list?.length > 0) setPageCount(total % limit)
    }, [list.length])

    const handlePageClick = (event: any) => {
        const newStartIndex = event.selected * limit
        setOffSet(newStartIndex)
    };
    return <CollectionView currentItems={list} pageCount={pageCount} handlePageClick={handlePageClick} />
}
export default CollectionContainer;