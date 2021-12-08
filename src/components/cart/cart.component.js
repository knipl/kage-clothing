import React from "react";
function Cart({ items, editCart }) {
  return (
    <>
      <div className="profile-item">
        <div>
          <label htmlFor="cart">Cart items</label>
          <span >{items.length}</span>
        </div>
          
        <div className="cart-input">
          <span onClick={() => editCart({ id: items.length+1, name: "new Product" })} className="addBtn">+</span>
          <span onClick={() => editCart()}  className="deleteBtn">-</span>
        </div>
      
      </div>
      {items.map(({ id, name }) => {
        return(
          <div className="profile-item sub-item" key={id}>
            <label htmlFor="isTheKingOfTheUniverse">Product name:</label>
            <span>{id}</span><span>{ name }</span>
          </div>
        )
      })}
    </> 
  )
}

export default Cart;