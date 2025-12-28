import { createSlice, isPlain } from "@reduxjs/toolkit";

const songSlice=createSlice({
    name:"music",
    initialState:{
        currentSong :null ,
        isPlaying:false
    },
    reducers:{
        setcurrentSong :(state,action)=>{
            state.currentSong = action.payload;
            state.isPlaying = true;
        },
        PlayorPause:(state)=>{
          if(  state.isPlaying){
            state.isPlaying=false
            return;
          }
          state.isPlaying=true
        }
    }

})
export const {setcurrentSong,PlayorPause}= songSlice.actions;
export default songSlice.reducer ;