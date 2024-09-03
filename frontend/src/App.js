import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
// import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Footer from './Components/Footer/Footer';
// import men_banner from './Components/Assets/banner_mens.png';
// import women_banner from './Components/Assets/banner_women.png';
// import kid_banner from './Components/Assets/banner_kids.png';
import NavbarSearch from './Components/NavbarSearch/NavbarSearch'; // Đã sửa

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        <NavbarSearch/>
        <Routes>
          <Route path='/' element={<Shop/>}/>
          {/* banner={men_banner}  */}
          <Route path='/store' element={<ShopCategory category="store"/>}/>
          {/* banner={women_banner}  */}
          <Route path='/news' element={<ShopCategory category="news"/>}/>
          {/* banner={kid_banner}  */}
          <Route path='/pre-orders' element={<ShopCategory category="pre-orders"/>}/>
          {/* banner={kid_banner}  */}
          <Route path='/comming-soon' element={<ShopCategory category="comming-soon"/>}/>
          <Route path="/product" element={<Product/>}>
            <Route path=":productId" element={<Product/>}/>
          </Route>
          {/* <Route path='/cart' element={<Cart/>}/> */}
          <Route path='/login' element={<LoginSignup/>}/>
        </Routes>
        {/* <Footer/> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
