import { configureStore } from '@reduxjs/toolkit'
import isLoadingSlice  from './slices/isLoading' //Acordarse siempre sin llaves xD
import productsSlice  from './slices/products.slice'

export default configureStore({
    reducer: {
        products : productsSlice,
        isLoading : isLoadingSlice
    }
})
