import React from 'react'
import { useSelector } from 'react-redux'
import ProductItem from './ProductItem'

export default function Product(props) {

    const { shoes } = useSelector(state => state.ProductReducer)
    // console.log(shoes);
    return (
        <div className="card mx-auto mb-5 md:mx-0">
            <div className="card__top">
                <img src="./assets/images/nike.png" alt="..." />
                <h3>Our Products</h3>
            </div>
            <div className="card__body">
                {shoes.map((item, index) => <ProductItem key={index} item={item} />)}
            </div>
        </div>
    )
}
