import React, { useContext } from "react";
import './ProductDisplay.css';
// import star_icon from '../Assets/star_icon.png';
// import star_dull_icon from '../Assets/star_dull_icon.png';
import { ShopContext } from "../../Context/ShopContext";

const ProductDisplay = (props) => {
    const { product } = props;
    const { addToCart } = useContext(ShopContext);

    // Kiểm tra sự tồn tại của product và các thuộc tính của nó
    const image = product?.image || 'default_image_url'; // Thay 'default_image_url' bằng URL hình ảnh mặc định nếu cần
    const name = product?.name || 'Unknown Product';    
    const oldPrice = product?.old_price || 'N/A';
    const newPrice = product?.new_price || 'N/A';

    return (
        <div className="productdisplay">
            <div className="productdisplay-left">
                <div className="productdisplay-img-list">
                    {/* Thay các ảnh mặc định hoặc quản lý danh sách ảnh khác nếu có */}
                </div>
                <div className="productdisplay-img">
                    <img className="productdisplay-main-img" src={image} alt={name} />
                </div>
            </div>
            <div className="productdisplay-right">
                <h1>{name}</h1>
                <div className="productdisplay-right-star">
                    {/* Thay thế các sao mặc định nếu cần */}
                    <p>(122)</p>
                </div>
                <div className="productdisplay-right-prices">
                    <div className="productdisplay-right-price-old">${oldPrice}</div>
                    <div className="productdisplay-right-price-new">${newPrice}</div>
                </div>
                <div className="productdisplay-right-description">
                    A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.
                </div>
                <div className="productdisplay-right-size">
                    <h1>Select Size</h1>
                    <div className="productdisplay-right-sizes">
                        <div>S</div>
                        <div>M</div>
                        <div>L</div>
                        <div>XL</div>
                        <div>XXL</div>
                    </div>
                </div>
                <button onClick={() => addToCart(product?.id)}>ADD TO CART</button>
                <p className="productdisplay-right-category"><span>Category :</span>Women, T-Shirt, Crop Top</p>
                <p className="productdisplay-right-category"><span>Tags :</span>Modern, Latest</p>
            </div>
        </div>
    );
}

export default ProductDisplay;
