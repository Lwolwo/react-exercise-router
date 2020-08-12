import React, {Component} from 'react';
import '../styles/App.scss';
import Home from './home/Home';
import MyProfile from './myProfile/MyProfile';
import AboutUs from './aboutUs/AboutUs';
import Products from './products/Products'
import {Router, Link, Switch, Route} from 'react-router-dom';
import {createBrowserHistory} from 'history';
import ProductDetails from './productDetails/ProductDetail';

const history = createBrowserHistory();

class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      index: 1,
    }   
  }

  componentDidUpdate() {
    // const pathname = history.location.pathname;
    // console.log(pathname);
  }

  handleSwitchPage = (index) => {
    this.setState({
      index: index
    });
    
  }

  render() {
    const {index} = this.state;
    return (
      <div className="app">
        <Router history={history}>
          <div className="linkList">
            <div className="linkItem" onClick={() => this.handleSwitchPage(1)}>
              <Link to="/" className={index === 1 ? "link isSelected" : "link"}>Home</Link>
            </div>
            <div className="linkItem" onClick={() => this.handleSwitchPage(2)}>
              <Link to="/products" className={index === 2 ? "link isSelected" : "link"}>Products</Link>
            </div>
            <div className="linkItem" onClick={() => this.handleSwitchPage(3)}>
              <Link to="/my-profile" className={index === 3 ? "link isSelected" : "link"}>My Profile</Link>
            </div>
            <div className="linkItem" onClick={() => this.handleSwitchPage(4)}>
              <Link to="/about-us" className={index === 4 ? "link isSelected" : "link"}>About us</Link>
            </div>
          </div>
          <div className="page">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/products" component={Products} />
              <Route exact path="/products/:id" component={ProductDetails} />
              <Route exact path="/goods" component={Products} />
              <Route exact path="/my-profile" component={MyProfile} />
              <Route exact path="/about-us" component={AboutUs} />
              <Route path="/*" component={Home} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;

