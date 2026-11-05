import { configureStore } from "@reduxjs/toolkit";
import sidebarSlice from "./sidebarSlice";
import searchSlice from "./searchSlice";
import chatSlice from "./chatSlice";

const appStore = configureStore({
    reducer : {
        sidebarMenu : sidebarSlice,
        search: searchSlice,
        chat : chatSlice
    }
})

export default appStore