import axios from "axios";
import CollectionView from "./CollectionView";
import { useEffect, useState } from "react";


function CollectionContainer() {
    const [data, setData] = useState(null)
    const getData = async () => {
        const result = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=400')
        if (result) setData(result.data.results)
    }
    useEffect(() => {
        getData()
    }, [])
    return <CollectionView data={data} />
}

export default CollectionContainer;