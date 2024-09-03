import React from 'react'
import brand_item from '../Assets/brands'
import { Link } from 'react-router-dom'
import './BrandProduct.css'

const BrandProduct = () => {
    return (
        <div className="product">
            <h1>Top Products</h1>
            <div className="product-item">
                {brand_item.map((item, i) => {
                    return (
                        <div className='brand-item' key={i}>
                            <Link to={`/product/${item.id}`}>
                                <img onClick={() => window.scrollTo(0,0)} src={item.image} alt={item.name} />
                            </Link>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default BrandProduct
