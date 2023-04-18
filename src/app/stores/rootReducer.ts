// gồm các reducer nhỏ từ các component trong module (file là slice.ts)
import { homeReducer } from "modules/home"

const RootReducer = {
    home: homeReducer,
};

export default RootReducer