import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Footer from "../components/Footer";
import Menu from "../components/Menu";
import Navbar from "../components/Navbar";
import "../css/Products.css"
import { PRODUCTS } from "../utils/urls";

function Products() {

    const [ products, setProducts] = useState([])
    const [catProduct, setCatProduct] = useState([])
    const [category, setCategory] = useState('')
    const params = useParams()


    const getCategory = () => {
        axios.get('http://localhost:1337/api/categories/' + Number(params.id))
            .then(res => setCategory(res.data.data))
    }

    useEffect(() => {
        getCategory()
    }, [])

    useEffect(() => {
        axios.get(PRODUCTS + '&pagination[page]=1&pagination[pageSize]=100')
            .then(res => setProducts(res.data.data))
    }, [products])

    useEffect(() => {
        getCategory()
        setCatProduct(products.filter(product => product.attributes.category.data.id === Number(params.id)))
    }, [params, products])

    return (
        <React.StrictMode>
            <Navbar />
            <Menu />
            <div className="section__pr">
                <h1 className="products_h1">{(category) ? category.attributes.title : ""}</h1>
                <div className="flex">
                    {catProduct && catProduct.map(product => (
                        <Link to={`/product/${product.id}`}><div className="card">
                            <img src={`http://localhost:1337${product.attributes.image.data.attributes.url}`} alt="" />
                            <p className="title">{product.attributes.title}</p>
                        </div>  </Link>
                    ))}
                </div>
            </div>
            <Footer />
        </React.StrictMode>

    );
}
export default Products;