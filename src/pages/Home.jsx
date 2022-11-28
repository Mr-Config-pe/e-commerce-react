import '../assets/css/Home.css'
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterProductsThunk, filterQueryThunk, getProductsThunk } from '../store/slices/products.slice';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Card, ListGroup } from 'react-bootstrap';

const Home = () => {

    const dispatch = useDispatch();
    const products = useSelector(state => state.products);
    const [categoriesList, setCategoriesList] = useState([]);
    const [inputSearch, setInputSearch] = useState("")

    useEffect(() => {
        dispatch(getProductsThunk());

        axios.get('https://e-commerce-api.academlo.tech/api/v1/products/categories')
            .then(res => setCategoriesList(res.data.data.categories))

    }, [])

    console.log(categoriesList)

    return (
        <div className='home'>

            <Row>
                {/* CATEGORIAS */}
                <Col lg={3} className='col1'>
                    <ListGroup className="col1-category">
                        <h5>Category</h5>
                        <div className="container-category">
                            {
                                categoriesList.map(category => (
                                    <ListGroup.Item className="btn-category" onClick={() => dispatch(filterProductsThunk(category.id))} key={category.id}>
                                        {category.name}
                                    </ListGroup.Item>
                                ))
                            }
                        </div>
                    </ListGroup>
                </Col>
                <Col lag={9} className='col2'>
                    {/* BUSCADOR + PRODUCTOS */}
                    <InputGroup className="mb-3">
                        <Form.Control
                            placeholder="Search Product"
                            aria-label="Search Product"
                            aria-describedby="basic-addon2"
                            value={inputSearch}
                            onChange={e => setInputSearch(e.target.value)}
                        />
                        <Button
                            variant="outline-secondary"
                            onClick={() => dispatch(filterQueryThunk(inputSearch))}
                        >
                            Search
                        </Button>
                    </InputGroup>
                    {/* INICIO COLUMNAS BOOTSTRAP PRODUCTOS HOME */}
                    <Row xs={1} md={2} lg={3} className="g-4" >
                        {/* INICIO MAPEANDO PRODUCTOS EN HOME */}
                        {
                            products.map(product => (
                                <Col key={product.id} >
                                    <Card >
                                        <Link to={`/product/${product.id}`} className="link-mapeo-home">
                                            <Card.Img
                                                variant="top"
                                                src={product.productImgs[0]}
                                                className="card-img-home"
                                            />
                                            <Card.Body className="card-body-home">
                                                <Card.Title className='card-title-home'>{product.title}</Card.Title>
                                                <Card.Text>
                                                    <b>Price: ${product.price}</b>
                                                </Card.Text>
                                            </Card.Body>
                                        </Link>
                                    </Card>
                                </Col>
                            ))}
                        {/* FIN MAPEANDO PRODUCTOS EN HOME */}
                    </Row>
                    {/* FIN COLUMNAS BOOTSTRAP PRODUCTOS HOME */}
                </Col>

            </Row>

        </div>
    );
};

export default Home;