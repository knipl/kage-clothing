import "./profile.styles.scss" 
import React, { useState } from "react";
import Cart from "../../components/cart/cart.component";

const initialState = {
  name: "KáGé",
  cart: [{id: 1, name: "stuff"}, {id: 2, name: "other stuff"}],
  isTheKingOfTheUniverse: true
}
function Profile() {
  const [userData, setUserData] = useState(initialState)
  const [cart, setCart] = useState(initialState.cart)
  function editCart(item) {
    item ? setCart([...cart, item]) : setCart([...cart.slice(0, cart.length-1)]);
  }

  return(
    <div className="profile-content">
      <h1>This is my profile page</h1>
      <p>you can see my personal information so please be careful with it.</p>
      
      <div className="profile-item">
        <label htmlFor="name">Name</label>
        <input id="name" defaultValue={userData.name} />
      </div>
      
      <Cart items={cart} editCart={(payload) => editCart(payload) }/>
      
      <div className="profile-item">
        <label htmlFor="isTheKingOfTheUniverse">isTheKingOfTheUniverse</label>
        <input type="checkbox" id="isTheKingOfTheUniverse" defaultChecked={userData.isTheKingOfTheUniverse}/>
      </div>
    </div>
  )
}
export default Profile;