import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getProductsThunk } from '../store/slices/products.slice';

const Home = () => {

    const dispath = useDispatch();

    useEffect(()=>{
        dispath(getProductsThunk());
    },[])

    return (
        <div>
            <h1>Componente Home xD</h1>
        </div>
    );
};

export default Home;