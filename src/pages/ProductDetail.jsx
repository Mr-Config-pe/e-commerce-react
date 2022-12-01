import '../assets/css/ProductDetail.css'
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { getProductsThunk } from '../store/slices/products.slice';
import { Row, Col, Carousel, Card, Button } from 'react-bootstrap';
import { createCartThunk } from '../store/slices/cart.slice';


const ProductDetail = () => {

    const { id } = useParams();

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProductsThunk());
    }, [])

    const productList = useSelector(state => state.products)

    const product = productList.find(productItem => productItem.id === Number(id))
    const relatedProducts = productList.filter(productItem =>
        productItem.category.id === product.category.id &&
        productItem.id !== product.id
    )



    // console.log(relatedProducts)

    // Button para Agregar al Carrito

const [quantity, setQuantity] = useState("");

  
    const addToCart = () => {
        const productSelect = {
            id : product.id,
            quantity : quantity
        }

        console.log(productSelect)
        dispatch(createCartThunk(productSelect))
        
    }


    return (
        <div className='product-detail'>
            <h1>{product?.title}</h1>
            <Row>
                <Col lg={6} className="col1-product-detail">
                    {/* INICIO DE CAROUSEL PRODUCTO DETAIL */}
                    <Carousel variant="dark" className="carousel-item-detail">
                        <Carousel.Item >
                            <img
                                className="d-block"
                                src={product?.productImgs[0]}
                                alt="First slide"
                            />

                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block"
                                src={product?.productImgs[1]}
                                alt="Second slide"
                            />

                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block"
                                src={product?.productImgs[2]}
                                alt="Third slide"
                            />

                        </Carousel.Item>
                    </Carousel>
                    {/* FIN DE CAROUSEL PRODUCTO DETAIL */}
                </Col>

                <Col lg={6} className="col2-product-detail">
                    {product?.description}
                    <div><b>Price:</b> ${product?.price}</div>
                    <div>Quantity : 
                    <input type="text" value={quantity} onChange={(e) => setQuantity(e.target.value)} style={{width:"50px"}}/>
                    </div>
                    <Button onClick={addToCart}>Add to Cart</Button>

                </Col>
            </Row>

           
            {/* INICIO COLUMNAS BOOTSTRAP PRODUCTOS POR CATEGORIA O SIMILAR*/}
            <Row xs={1} md={2} lg={3} className="g-4 container-product-suggested" >
                {/* INICIO MAPEANDO PRODUCTOS POR CATEGORY */}
                {
                    relatedProducts.map(relatedProduct => (
                        <Col key={relatedProduct.id} >
                            <Card >
                                <Link to={`/product/${relatedProduct.id}`} className="link-mapeo-detail">
                                    <Card.Img
                                        variant="top"
                                        src={relatedProduct.productImgs[0]}
                                        className="card-img-detail"
                                    />
                                    <Card.Body className="card-body-detail">
                                        <Card.Title className='card-title-detail'>{relatedProduct.title}</Card.Title>
                                        <Card.Text>
                                            <b>Price : {relatedProduct.price}</b>
                                        </Card.Text>
                                    </Card.Body>
                                </Link>
                            </Card>
                        </Col>
                    ))}
                {/* FIN MAPEANDO PRODUCTOS POR CATEGORY */}
            </Row>
            {/* FIN COLUMNAS BOOTSTRAP PRODUCTOS POR CATEGORIA O SIMILAR*/}

        </div>
    );
};

export default ProductDetail;