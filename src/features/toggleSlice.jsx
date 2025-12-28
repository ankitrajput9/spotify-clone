import {createSlice} from '@reduxjs/toolkit';

const ToggleSlice = createSlice({
    name:'toggle',
    initialState:{
        toggle:false
    },
    reducers:{
        setToggle:(state,action)=>{
            state.toggle = action.payload
        }
    }
})
export const  {setToggle} = ToggleSlice.actions;
export default ToggleSlice.reducer;