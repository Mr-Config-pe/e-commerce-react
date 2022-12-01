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
        <Offcanvas show={show} onHide={handleClose} placement={"end"}>
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Offcanvas</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                {cart.map(product => (
                    <div key={product.id}>{product.title}</div>
                ))}
                <Button onClick={() => dispatch(checkoutCartThunk())}>Checkout</Button>
            </Offcanvas.Body>
        </Offcanvas>
        //    Fin SideBar
    );
};

export default Cart;