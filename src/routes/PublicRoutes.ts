import { Collection, Home, Product } from "pages"



const PublicRoutes = [
    { path: '/', element: Home },
    { path: '/collections', element: Collection },
    { path: '/products', element: Product },
    // { path: '/products/:id', element: {} },

]
export default PublicRoutes