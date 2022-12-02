import axios from 'axios';
import '../assets/css/Cart.css'
import React, { useEffect } from 'react';
import { Button, Offcanvas } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { checkoutCartThunk, getCartThunk } from '../store/slices/cart.slice';

const Cart = ({ show, handleClose }) => {

    const dispatch = useDispatch();

    const cart = useSelector(state => state.cart);

    useEffect(() => {

        dispatch(getCartThunk())

    }, [])


    return (
        //    Inicio SideBar
        <Offcanvas show={show} onHide={handleClose} placement={"end"} className='Offcanvas'>
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>You Cart</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                {cart.map(product => (
                    <div key={product.id} >
                        <div className="container-product-cart">
                            <b>{product.brand}</b> <br />
                            <div className='product-title'>{product.title}</div>
                            Quantity : <b>{product.productsInCart.quantity}</b><br />
                            Total : $ <b>{product.productsInCart.quantity * product.price}</b>
                        </div>
                    </div>
                ))}
                <Button className='cart-btn-checkout' onClick={() => dispatch(checkoutCartThunk())} >Checkout</Button>
            </Offcanvas.Body>
        </Offcanvas>
        //    Fin SideBar
    );
};

export default Cart;