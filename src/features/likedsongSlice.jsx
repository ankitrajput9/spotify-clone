import { createSlice } from "@reduxjs/toolkit";


const likedsongSlice = createSlice({
    name: 'liked',
    initialState: {
        liked: [] 
    },
    reducers: {
        setLiked: (state, action) => {
            const exist = state.liked.some((val) => val.id === action.payload.id)
            if (!exist) {
                state.liked.push(action.payload)
            }
            return
        },
        removeLiked:(state,action)=>{
const remove = state.liked.filter((val)=>val.id === action.payload.id)
//   splice ka use issliye kr rahe taki vo kisi bhi remove pr 
// click kare toh vo delete ho jaye agar sirf filter se karenge toh jo play hog a gana wahi delete hoga 
state.liked.splice(remove,1)
        }
    }
})

export const { setLiked,removeLiked } = likedsongSlice.actions;
export default likedsongSlice.reducer