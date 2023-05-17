import axiosClient from "./axiosClient"
// axiosClient là 1 axios custom với URL sẵn và thêm header
const shopApi = {
    getAllProduct(query: any): Promise<any> {
        const url = '/products'
        return axiosClient.get(url, {
            params: query
        })
    }
}
//     getAllProduct(offset: number, limit: number): any {
//         // return axios.get(`https://dummyjson.com/products?limit=${limit}&skip=${offset}`)


//     }
// }
export default shopApi