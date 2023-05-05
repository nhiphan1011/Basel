import axios from "axios"

const shopApi = {
    getAllProduct(offset: number, limit: number): Promise<any> {
        return axios.get(`https://dummyjson.com/products?limit=${limit}&skip=${offset}`)
    }
}
export default shopApi