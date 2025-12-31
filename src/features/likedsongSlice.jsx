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
        }
    }
})

export const { setLiked } = likedsongSlice.actions;
export default likedsongSlice.reducer