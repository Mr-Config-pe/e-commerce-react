import '../assets/css/Purchases.css'
import React, { useEffect } from 'react';
import { Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getPurchasesThunk } from '../store/slices/purchases.slice';
import { Link } from 'react-router-dom';

const Purchases = () => {

    const dispatch = useDispatch();

    const purchases = useSelector(state => state.purchases);

    useEffect(() => {

        dispatch(getPurchasesThunk());

    }, [])

    return (
        <div className='purchases'>
            <h1>Purchases</h1>
            <ul>
                {
                    purchases.map(purchase => (

                        <li key={purchase.id}>
                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                        <th>
                                            {purchase.createdAt}
                                        </th>
                                    </tr>
                                </thead>

                                <tbody>
                                    <tr>
                                        <td>
                                            {purchase.cart.products.map(product => (
                                                <Link to={`/product/${product.id}`} key={product.id} className="Link1">
                                                    <div className='container-product-purchase'>
                                                        <div>{product.title}</div>
                                                        <div>{product.productsInCart.quantity}</div>
                                                        <div className='purchase-product-price'> $ {product.price}</div>
                                                    </div>
                                                </Link>

                                            ))}
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>
                        </li>

                    ))
                }
            </ul>

        </div>
    );
};

{/* <li key={product.id}>
 Name : {product.title} <br />
Price : {product.price} <br />
</li> */}

export default Purchases;