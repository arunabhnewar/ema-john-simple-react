import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import Shop from './Components/Shop/Shop';
import OrderReview from './Components/OrderReview/OrderReview';
import Inventory from './Components/Inventory/Inventory';
import NotFound from './Components/NotFound/NotFound';
import PlaceOrder from './Components/PlaceOrder/PlaceOrder';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import AuthProvider from './Components/Context/AuthProvider';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Shipping from './Components/Shipping/Shipping';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Shop></Shop>
            </Route>
            <Route exact path="/shop">
              <Shop></Shop>
            </Route>
            <Route exact path="/review">
              <OrderReview></OrderReview>
            </Route>
            <PrivateRoute exact path="/inventory">
              <Inventory></Inventory>
            </PrivateRoute>
            <PrivateRoute exact path="/shipping">
              <Shipping></Shipping>
            </PrivateRoute>
            <PrivateRoute exact path="/placeorder">
              <PlaceOrder></PlaceOrder>
            </PrivateRoute>
            <Route exact path="/login">
              <Login></Login>
            </Route>
            <Route exact path="/register">
              <Login></Login>
            </Route>
            <Route exact path="/register">
              <Register></Register>
            </Route>
            <Route exact path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
