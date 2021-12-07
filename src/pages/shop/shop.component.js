import { Component } from "react";
import "./shop.styles.scss"
import SHOP_DATA from './shop.data'

class Shop extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <>
        {SHOP_DATA.map(({ title, id, ...otherProps }) => (
          <p key={id}>{title}</p>
        ))}
      </>
    )
  }
}

export default Shop;