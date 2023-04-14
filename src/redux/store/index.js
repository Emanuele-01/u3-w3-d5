import { configureStore } from "@reduxjs/toolkit";
import functionStorage from "../reducer";


const store = configureStore({
    reducer : functionStorage
})

export default store;