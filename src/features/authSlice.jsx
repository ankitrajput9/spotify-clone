import { createSlice } from "@reduxjs/toolkit";

let authslice = createSlice({
    name:'auth',
    initialState:{
        user:JSON.parse(localStorage.getItem("loguser"))|| null
    },
    reducers:{
        setUser:(state,action)=>{
            state.user = action.payload
        }
    }
})
export const {setUser}= authslice.actions;
export default authslice.reducer;