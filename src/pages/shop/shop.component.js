import { Component } from "react";
import "./shop.styles.scss"
import SHOP_DATA from './shop.data'
import ShopCategory from "../../components/shop-category/shop-category.component";

class Shop extends Component {
  constructor(props) {
    super(props)
    this.state = { shopData: SHOP_DATA };
  }
  render() {
    return (
      <div className="shop-container">
        {this.state.shopData.map(({ id, ...otherProps }) => (
          <ShopCategory key={id} {...otherProps} />
        ))}
      </div>
    )
  }
}

export default Shop;