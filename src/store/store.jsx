import {configureStore} from "@reduxjs/toolkit"
import ToggleReducer from '../features/toggleSlice'
import dataReducer from "../features/dataSlice"
import musicReducer from "../features/songSlice"
import authReducer from "../features/authSlice"
import likedReducer from "../features/likedsongSlice"

export const store = configureStore({
    reducer:{
        toggle:ToggleReducer,
        data:dataReducer,
        music:musicReducer,
        auth:authReducer,
        liked:likedReducer,
    }
})