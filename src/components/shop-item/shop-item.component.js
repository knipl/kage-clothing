import "./shop-item.styles.scss"

const ShopItem = ({name, imgaeUrl, price}) => {
  return (
    <span className="shop-item">
      {name}
    </span>
  )
}
export default ShopItem;