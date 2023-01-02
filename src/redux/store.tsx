import { configureStore } from "@reduxjs/toolkit";
import closeNavbar from './closeNavbar'

const store = configureStore({
    reducer: {
        closer: closeNavbar.reducer
    }
})

export default store