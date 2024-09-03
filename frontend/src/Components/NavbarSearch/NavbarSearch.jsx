import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { LayoutGrid, ShoppingCart, Heart, Search } from "lucide-react";
import { ShopContext } from "../../Context/ShopContext";    

import './NavbarSearch.css';

const NavbarSearch = () => {

    const { getTotalCartItems } = useContext(ShopContext);
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 800) {
                setIsSmallScreen(true);
            } else {
                setIsSmallScreen(false);
            }
        };

        handleResize(); // Gọi ngay lập tức để thiết lập ban đầu

        window.addEventListener('resize', handleResize);
        
        // Dọn dẹp sau khi component unmount
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className="navbar-search">
            <Link style={{ textDecoration: 'none', display: 'flex', justifyContent: 'center', alignItems: 'center' }} to='/login'>
                <button style={{ background: '#28282a' }} >
                    <LayoutGrid className="category-icon" style={{ width: '30px', height: '30px', color: '#8262d2' }} />
                    <p>Category List</p>
                </button>
            </Link>

            <div className="search-container">
                <div className="search-child">
                    <Search style={{ width: '30px', height: '30px', color: '#8262d2', fontWeight: '400', margin: '0 15px 0 15px'  }} />
                    <input type="text" id="searchInput" placeholder="Search..." />
                </div>
            </div>
            
            <div className="search-icons">
                <div className={`shopping-cart ${isSmallScreen ? 'cart-none' : ''}`}>
                    <Link to='/cart'>
                        <Heart style={{ width: '30px', height: '30px', color: '#8262d2', fontWeight: '400' }} />
                    </Link>
                </div>

                <div className={`shopping-cart ${isSmallScreen ? 'cart-none' : ''}`}>
                    <Link to='/cart'>
                        <Heart style={{ width: '30px', height: '30px', color: '#8262d2', fontWeight: '400' }} />
                    </Link>
                </div>

                <div>
                    <div className="shopping-cart">
                        <Link to='/cart'>
                            <ShoppingCart style={{ width: '30px', height: '30px', color: '#8262d2', fontWeight: '400' }} />
                        </Link>
                    </div>
                    <div className="nav-cart-count">{getTotalCartItems()}</div> 
                </div>
            </div>
        </div>
    );
}

export default NavbarSearch;
