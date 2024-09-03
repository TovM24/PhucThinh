import React from 'react'
import './OffersBanner.css'
import data_product from '../Assets/offers.js'
import OffersItem from '../Item/Item.jsx'

const OffersBanner = () => {
    return (
        <div className='OffersBanner'>
            <div className="OffersBanner-item">
                {data_product.map((item, i) => {
                    return <OffersItem type="category" variant="Itembanner" key={i} id={item.id} name={item.name} image={item.image} discount={item.discount} color={item.color}/>
                })}
            </div>
        </div>
    )
}

export default OffersBanner
