import { createSlice } from "@reduxjs/toolkit";

const sideBarSlice = createSlice({
    name : "sidebarMenu ",
    initialState : {
        isMenuOpen : true
    },
    reducers : {
        toggleMenu : (state) =>{
            state.isMenuOpen = !state.isMenuOpen
        },
        defaultclose : (state) =>{
            state.isMenuOpen = false
        }
    }
})

export const {toggleMenu,defaultclose} = sideBarSlice.actions
export default sideBarSlice.reducer