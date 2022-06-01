import {createSlice} from '@reduxjs/toolkit'

const uislice=createSlice({
    name:'ui',
    initialState:{itemisvisible:false},
    reducers:{
        toggle(state){
            state.itemisvisible=!state.itemisvisible
        }
    }
});

export const uiActions=uislice.actions

export default uislice;