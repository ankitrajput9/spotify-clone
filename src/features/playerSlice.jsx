import { createSlice } from "@reduxjs/toolkit";

const playerSlice=createSlice({
    name:"player",
    initialState:{
        isExpanded:false
    },
    reducers:{
        setIsExpanded:(state,action)=>{
            state.isExpanded= action.payload

        }
    }
})
export const {setIsExpanded}=playerSlice.actions;
export default playerSlice.reducer;