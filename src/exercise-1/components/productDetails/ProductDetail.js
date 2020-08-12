import React, { Component } from 'react';
import data from '../../../exercise-2/mockups/data.json'
import './ProductDetails.scss'

class ProductDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'TV'
    }
  }
  componentDidMount() {
    const index = this.props.location.pathname.split('/')[2];
    let name = '';
    if (index === "1") {
      name = "bicycle";
    } else if (index === "2") {
      name = "TV";
    } else if (index === "3") {
      name = "pencil"
    }
    this.setState({
      name: name
    })
  }
  render() { 
    const {name} = this.state;
    return (
    <div className="productDetails">
      <p>Name: {data[name].name}</p>
      <p>Id: {data[name].id}</p>
      <p>Price: {data[name].price}</p>
      <p>Quantity: {data[name].quantity}</p>
      <p>Desc: {data[name].desc}</p>
      <p>URL: {this.props.location.pathname}</p>
    </div>);
  }
}
 
export default ProductDetails;