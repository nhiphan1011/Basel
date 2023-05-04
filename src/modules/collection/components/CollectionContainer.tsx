import axios from "axios";
import CollectionView from "./CollectionView";
import { useEffect, useState } from "react";


function CollectionContainer() {
    const limit = 12
    const [currentItems, setCurrentItems] = useState<Array<any>>([]);
    const [offSet, setOffSet] = useState<number>(0);
    const [pageCount, setPageCount] = useState<number>(0);

    const handlePageClick = (event: any) => {
        const newStartIndex = event.selected * limit
        setOffSet(newStartIndex)
    };
    const getData = async () => {
        const result = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${offSet}&limit=${limit}`)
        // if (result) setData(result.data.results)
        if (result) {
            console.log(result)
            setPageCount(result.data.count % limit)
            setCurrentItems(result.data.results)
        }

    }
    useEffect(() => {
        getData()
    }, [offSet]);

    return <CollectionView currentItems={currentItems} pageCount={pageCount} handlePageClick={handlePageClick} />
}

export default CollectionContainer;