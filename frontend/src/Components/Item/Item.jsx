import React from 'react';
import { Link } from 'react-router-dom';
import './Item.css';

const Item = (props) => {
    return (
        // ${props.variant}
        <div className={`item-container ${props.type} ${props.variant}`} style={props.color ? { background: props.color } : {}}>
            <Link to={`/product/${props.id}`}>
                {props.variant === "itemm" && (
                    <div className="item">
                        <div className="item-img">
                            <img onClick={window.scrollTo(0,0)} src={props.image} alt="" />
                        </div>
                        <div className='item-name'>
                            {props.type === 'category' && (
                                <div className='category-name character-limit'>{props.name}</div>
                            )}
                            {props.type === 'trendy' && (
                                <p className='trendy-name character-limit'>{props.name}</p>
                            )}
                        </div>
                        <p className='item-subtitle character-limit'>{props.subtitle}</p>
                        <div className="item-prices">
                            {props.type === 'category' && (
                                <div className="item-price-sale">
                                    -{props.discount}% <p>off</p>
                                </div>
                            )} 
                            {props.type === 'trendy' && (
                                <div className="item-price-wrapper">
                                    <div className="item-price">
                                        {props.current_price} đ
                                    </div>
                                    <div className="previous">
                                        {props.previous_price} đ
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                )}
                {props.variant === "Itembanner" && (
                    <div className="item-banner">
                        <p>{props.name}</p>
                        <div className="banner">
                            <img onClick={window.scrollTo(0,0)} src={props.image} alt="" />
                        </div>
                        <div className="banner-sale">
                            -{props.discount}% <p>off</p>
                        </div>
                    </div>
                )}
            </Link>
        </div>
    );
};

export default Item;
