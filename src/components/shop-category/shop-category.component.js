import ShopItem from "../shop-item/shop-item.component"

const ShopCategory = ({title, items}) => {
  return (
    <div>
      <h2>{title}</h2>
      {items.map(({ id, ...otherProps }) => (
        <ShopItem key={id} {...otherProps} />
      ))}
    </div>
  )
}

export default ShopCategory;