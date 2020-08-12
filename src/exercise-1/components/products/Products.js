import React, { Component } from 'react';
import './Products.scss'
import {Link} from 'react-router-dom';

class Products extends Component {
  render() { 
    return (<div className="products">
      <p>All Products:</p>
      <p><Link to="/products/1">Bicycle</Link></p>
      <p><Link to="/products/2">TV</Link></p>
      <p><Link to="/products/3">Pencil</Link></p>
    </div>);
  }
}
 
export default Products;