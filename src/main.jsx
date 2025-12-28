import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AppRouter from "./router/AppRouter"
import {Provider} from "react-redux"
import { store } from './store/store'
import { ToastContainer, toast } from 'react-toastify';

createRoot(document.getElementById('root')).render(
    <Provider store={store}>
<AppRouter/>
 <ToastContainer />

    </Provider>
)
