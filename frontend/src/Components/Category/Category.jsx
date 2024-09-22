import React from 'react';
import './Category.css'
import data_product from '../Assets/categories';
import CategoryItem from '../Item/Item';

const Popular = () => {
    return (
        <div className='popular'>
            <h1>CATEGORY</h1>
            <hr/>
            <div className="popular-item">
                {data_product.map((item, i) => {
                    return <CategoryItem type="category" variant="itemm" key={i} id={item.id} name={item.name} subtitle={item.subtitle} image={item.image} discount={item.discount} color={item.color}/>
                })}
            </div>
        </div>
    )
}


export default Popular;
