import { Component } from "react";
import "./shop.styles.scss"
import SHOP_DATA from './shop.data'
import ShopItem from "../../components/shop-item/shop-item.component";

class Shop extends Component {
  constructor(props) {
    super(props)
    this.state = { shopData: SHOP_DATA };
  }
  render() {
    return (
      <div className="shop-container">
        {this.state.shopData.map(({ title, id, items }) => (
          <div>
            <h2>{title}</h2>
            {items.map(({ id, ...otherProps }) => (
              <ShopItem key={id} {...otherProps} />
            ))}
          </div>
        ))}
      </div>
    )
  }
}

export default Shop;