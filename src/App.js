import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import SignInPage from './SignInPage'
import Product from './ProductPage'

export default function App() {
  return (
    <Router>
      <div>
        { 
        // <nav>
        //   <ul>
        //     <li>
        //       <Link to="/">Home</Link>
        //     </li>
        //     <li>
        //       <Link to="/product">Product</Link>
        //     </li>
        //     <li>
        //       <Link to="/users">Users</Link>
        //     </li>
        //   </ul>
        // </nav> 
        }
        {
        /* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/login">
            <SignInPage />
          </Route>
          <Route path="/">
            <Product />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}