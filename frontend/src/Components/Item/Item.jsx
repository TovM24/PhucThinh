import React from "react";
import { Link } from "react-router-dom";

// Import style item 
import './Item.css'

const Item = (props) => {
    return (
        <div className="item" style={props.color ? { background: props.color } : {}}>
            <Link to={`/product/${props.id}`}>
                <div className="item-container">
                    <div className="item-container__img">
                        <img onClick={window.scrollTo(0,0)} src={props.image} alt="" />
                    </div>

                    <div className="item-container__name">{props.name}</div>
                    <p className="item-container__subtitle">{props.subtile}</p>

                    <div className="item-container__prices">
                        <div className="item-container__price-current">{props.current_price} đ</div>

                        <div className="item-container__price-wrapper">
                            <div className="item-container__price-previous">{props.previous_price} đ</div>
                            <div className="item-container__discount">
                                {props.discount ? (
                                    <>
                                        -{props.discount}% 
                                        <p>off</p>
                                    </>
                                ) : ''}
                            </div>
                        </div>
                    </div>
                </div>  
            </Link>
        </div>
    )
}

export default Item;