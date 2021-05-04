import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./containers/Header";
import Products from "./containers/Products";
// import Product from "./containers/Product";
import ProductDetails from "./containers/ProductDetails";
import ErrorPage from "./containers/ErrorPage";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Products}></Route>
          <Route path="/product/:id" exact component={ProductDetails}></Route>
          <Route component={ErrorPage}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
