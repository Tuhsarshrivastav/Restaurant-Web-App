import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Policy from "./components/Policy";
import NavBar from "./components/NavBar";
import HomeScreen from "./screens/HomeScreen";
import CartScreen from "./screens/CartScreen";
import Registe from "./screens/Registe";
import Login from "./screens/Login";
import OrderScreen from "./screens/OrderScreen";
import AdminScreen from "./screens/AdminScreen";
import HomeCardScreen from "./screens/HomeCardScreen";
import Special from "./screens/Special";
import ReviewsScreen from "./screens/ReviewsScreen";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path="/admin" component={AdminScreen} />
        <Route path="/orders" component={OrderScreen} exact />
        <Route path="/register" component={Registe} exact />
        <Route path="/cart" component={CartScreen} exact />
        <Route path="/about" component={About} exact />
        <Route path="/contact" component={Contact} exact />
        <Route path="/policy" component={Policy} exact />
        <Route path="/menus" component={HomeScreen} />
        <Route path="/special" component={Special} />
        <Route path="/reviews" component={ReviewsScreen} />

        <Route path="/cards" component={HomeCardScreen} />
        <Route path="/" component={Login} exact />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
