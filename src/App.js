import React from 'react';
import Layout from "./Layout/Layout";
import {
    BrowserRouter,
    Redirect,
    Route,
    Link,
    Switch,
    NavLink,
} from 'react-router-dom';
import Content from "./Content/Content";
import AllProductsSection from "./AllProductsSection/AllProductsSection";
import OneProductSection from "./OneProductSection/OneProductSection";
import Login from "./Login/Login";
import Registration from "./Registration/Registration";

function App() {
  return (
    <>
    <BrowserRouter>
        <Layout>
                <Switch>
                    <Route exact path="/"  component={Content}/>
                    <Route path="/products/:type" component={AllProductsSection}/>
                    <Route path="/one-product/:index" component={OneProductSection}/>
                    <Route path="/login" component={Login}/>
                    <Route path="/registration" component={Registration}/>
                    <Redirect to="/" />
                </Switch>
        </Layout>
    </BrowserRouter>
    </>
  );
}

export default App;
