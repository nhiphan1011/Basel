// gồm các reducer nhỏ từ các component trong module (file là slice.ts)
import { productReducer } from "modules/collection";
import { homeReducer } from "modules/home"

const RootReducer = {
    home: homeReducer,
    product: productReducer
};

export default RootReducer