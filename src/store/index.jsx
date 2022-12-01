import { configureStore } from '@reduxjs/toolkit'
import cartSlice from './slices/cart.slice'
import isLoadingSlice  from './slices/isLoading' //Acordarse siempre sin llaves xD
import productsSlice  from './slices/products.slice'
import purchasesSlice from './slices/purchases.slice'

export default configureStore({
    reducer: {
        products : productsSlice,
        isLoading : isLoadingSlice,
        purchases : purchasesSlice,
        cart : cartSlice
    }
})
