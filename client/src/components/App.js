import React, { Suspense } from 'react';
import { Route, Switch } from "react-router-dom";
import Auth from "../hoc/auth";
import LandingPage from "./views/LandingPage/LandingPage.js";
import LoginPage from "./views/LoginPage/LoginPage.js";
import RegisterPage from "./views/RegisterPage/RegisterPage.js";
import RegisterPage_ from "./views/RegisterPage_/RegisterPage_.js";
import NavBar from "./views/NavBar/NavBar";
import UploadProductPage from "./views/UploadProductPage/UploadProductPage.js";
import UploadMartPage from "./views/UploadMartPage/UploadMartPage.js";
import DetailProductPage from "./views/DetailProductPage/DetailProductPage";
import CartPage from './views/CartPage/CartPage';
import HistoryPage from './views/HistoryPage/HistoryPage';
import MartPage from './views/MartPage/MartPage';

// option
    // null => 아무나 출입이 가능한 페이지 
    // true => 로그인한 유저만 출입이 가능한 페이지
    // false => 로그인한 유저는 출입 불가능한 페이지 

function App() {
  return (
    <Suspense fallback={(<div>Loading...</div>)}>
      <NavBar />
      <div style={{ minHeight: 'calc(100vh - 80px)' }}>
        <Switch>
          <Route exact path="/" component={Auth(LandingPage, null)} />
          <Route exact path="/login" component={Auth(LoginPage, false)} />
          <Route exact path="/register" component={Auth(RegisterPage, false)} />
          <Route exact path="/register_" component={Auth(RegisterPage_, false)} />
          <Route exact path="/product/upload" component={Auth(UploadProductPage, true)} />
          <Route exact path="/mart/upload" component={Auth(UploadMartPage, null)} />
          <Route exact path="/product/:productId" component={Auth(DetailProductPage, null)} />
          <Route exact path="/user/cart" component={Auth(CartPage, true)} />
          <Route exact path="/history" component={Auth(HistoryPage, true)} />
          <Route exact path="/mart" component={Auth(MartPage, null)} />

        </Switch>
      </div>
    </Suspense>
  );
}

export default App;
