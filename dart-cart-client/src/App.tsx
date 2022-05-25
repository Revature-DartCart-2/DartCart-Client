import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom";
import { Login } from "./features/authentication/Login";
import { ResetPassword } from "./features/authentication/ResetPassword";
import Home from "./features/Home";
import UserRegister from "./features/user-register/UserRegister";
import ProductRegister from "./features/product-register/ProductRegister";
import AdminPage from "./features/admin-page/AdminPage";
import AddInventory from "./features/shop-product-add/AddInventory";
import Display from "./features/display/Display";
import PreviousOrders from "./features/previous-orders/previous-orders";
import SellerRegister from "./features/seller-register/SellerRegister";
import Error404Page from "./components/Error";
import { Provider } from "react-redux";
import ShopProductDisplay from "./features/product-details/ShopProductDisplay";
import ProductReviewLayout from "./features/product-reviews/layouts/ProductReviewLayout";
import store from "./common/store";
import Header from "./features/layout/Header";
import Footer from "./features/layout/Footer";
import Cart from "./features/cart/Cart";
import "./App.css";
import Checkout from "./features/checkout/CheckoutDisplay";
import ListItem from "./features/list-item/ListItem";
import ShopPage from "./features/shop-page/ShopPage";
import SellerHomepage from "./features/seller-homepage/SellerHomepage";
import Product from "./Models/Product";
import UserP from "./features/userprofile/UserProfile";
import useLocalStorage from "use-local-storage";
import WishList from "./features/wishlist/WishList";
// import TechChat from "./components/TechChat";
// import TechChatModal from "./features/TechChatModal/FinalTechChatModalGroup";
import FinalAdmin from "./components/finalAdminPortal/FinalAdmin";
import AdminModal from "./components/finalAdminPortal/finalAdminPortalSub/Modal/FinalFinalTwoWay";
import AdminComments from "./features/TechChatModal/AdminComments";
// import FinalTechChatModalGroup from "./features/TechChatModal/FinalTechChatModalGroup";
import FinalTechChat from "./components/FinalTechChat";
import './components/finalAdminPortal/finalAdminPortalSub/Modal/finaModalStyling.css'
import FinalAdminTechSection from "./components/finalAdminPortal/finalAdminPortalSub/FinalAdminTechSection";
import FinalAdminTechPanel from "./components/finalAdminPortal/finalAdminPortalSub/FinalAdminTechPanel";
import TempTwoModel from "./components/finalAdminPortal/finalAdminPortalSub/Modal/TempTwoModel";


function App() {

  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');

  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  }

  useEffect(() => {
    document.title = "DartCart";

    //
  });

  return (
    <div className="App" data-theme={theme}>
      {theme === 'dark' ?
        (<input onClick={switchTheme} type="checkbox" name="" checked />)
        :
        (<input onClick={switchTheme} type="checkbox" name="" />)
      }
      <BrowserRouter>
        <Provider store={store}>
          <Header />
          <Routes>
            <Route path="/" element={<Display />}></Route>
            <Route
              path="/sellers/:seller_homepage"
              element={<SellerHomepage />}
            >

            </Route>
            {/*THIS THE DEV TEST SECTION FOR CHAT FEATURES*/}
            <Route path="/techchat" element={<FinalAdmin />} />
            {/*OFFICAL CLIENT INTERFCEE FOR THE CLIENT*/}
            <Route path="/techchatmodal" element={<TempTwoModel/>} />
            {/*ADMIN ACCESS TO THE ADMIN FEATURE*/}
            <Route path="/adminpage" element={<FinalAdmin/>}></Route>
            <Route path="/adminmodal" element={<AdminModal/>}></Route>
            <Route path="/shops/:shop_id" element={<ShopPage />}></Route>
            <Route path="/shops/:shop_id/list" element={<ListItem />}></Route>
            <Route path="/cart" element={<Cart />}></Route>
            <Route path="/register" element={<UserRegister />}></Route>
            <Route path="/product-register" element={<ProductRegister />}></Route>
            <Route path="/shop-product-add" element={<AddInventory />}></Route>
            <Route path="/signup" element={<SellerRegister />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/ResetPassword" element={<ResetPassword />}></Route>
            <Route path="/orders" element={<PreviousOrders />}></Route>
            <Route path="/checkout" element={<Checkout />}></Route>
            <Route path="/display" element={<Display />}></Route>
            <Route path="/userprofile" element={<UserP />}></Route>
            <Route path="/stuff" element={<AdminComments />} />
            <Route
              path="/shop-product/:shop_product_id"
              element={<ShopProductDisplay />}
            ></Route>
            <Route path="/wishlist" element={<WishList/>}></Route>
            <Route
              path="/FeatureProduct/:product_id"
              element={<Product />}
            ></Route>
            <Route
              path="/product-review/:product_id"
              element={<ProductReviewLayout />}
            ></Route>
            <Route path="/*" element={<Error404Page />}></Route>
          </Routes>
          <Footer />
        </Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
