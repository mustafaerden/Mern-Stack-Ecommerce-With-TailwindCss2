import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import HomePage from "../../pages/home/HomePage";
import Navbar from "../common/navbar/Navbar";
import Footer from "../common/footer/Footer";
import Products from "../../pages/product/Products";

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="main__layout__content">
        <Switch>
          {/* <Route path="/admin" component={AdminLayout} /> */}
          <Route exact path="/" component={HomePage} />
          <Route path="/products" component={Products} />
        </Switch>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
