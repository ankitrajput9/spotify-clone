import { createSlice } from "@reduxjs/toolkit";

const likedsongSlice =createSlice({
    name:'liked',
    initialState:{
        liked:null
    },
    reducers:{
        setLiked:(state,action)=>{
            state.liked = action.payload
        }
    }
})
export const {setLiked}= likedsongSlice.actions;
export default likedsongSlice.reducer