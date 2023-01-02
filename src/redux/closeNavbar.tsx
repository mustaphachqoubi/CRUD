import { createSlice } from "@reduxjs/toolkit";

const closeNavbar = createSlice({
    name: 'nav_closer',
    initialState: {
        close_nav: 'flex'
    },
    reducers: {
        close: (state) => {
            state.close_nav = 'hidden'
        },
        open: (state) => {
            state.close_nav = 'flex'
        }
    }
})

export const { close, open } = closeNavbar.actions;
export default closeNavbar