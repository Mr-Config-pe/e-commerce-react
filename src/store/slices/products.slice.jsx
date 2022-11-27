import { createSlice } from '@reduxjs/toolkit';
import { setIsLoading } from './isLoading';
import axios from 'axios';

export const productsSlice = createSlice({
    name: 'products',
    initialState: [],
    reducers: {
        setProducts: (state, action) => {
            return action.payload
        }
    }
})

export const getProductsThunk = () => dispath => {
    dispath(setIsLoading(true));
    axios.get("https://e-commerce-api.academlo.tech/api/v1/products")
    .then(res => dispath(setProducts(res.data.data.products)))
    .finally(()=> dispath(setIsLoading(false)));
}

export const { setProducts } = productsSlice.actions;

export default productsSlice.reducer;
