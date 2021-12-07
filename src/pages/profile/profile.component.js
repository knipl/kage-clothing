import "./profile.styles.scss" 
import { useState } from "react";
import Cart from "../../components/cart/cart.component";
let initialState = {
  name: "KáGé",
  cart: [{id: 1, name: "stuff"}, {id: 2, name: "other stuff"}],
  isTheKingOfTheUniverse: true
}
function Profile() {
  const [userData, setUserData] = useState(initialState)
  function editCart(item) {
    let data = userData;
    item ? data.cart.push(item) : data.cart.pop();
    setUserData(data);
    console.log(item, userData.cart.length)
  }

  return(
    <div className="profile-content">
      <h1>This is my profile page</h1>
      <p>you can see my personal information so please be careful with it.</p>
      
      <div className="profile-item">
        <label htmlFor="name">Name</label>
        <input id="name" defaultValue={userData.name} />
      </div>
      
      <Cart items={userData.cart} editCart={(payload) => editCart(payload) }/>
      
      <div className="profile-item">
        <label htmlFor="isTheKingOfTheUniverse">isTheKingOfTheUniverse</label>
        <input type="checkbox" id="isTheKingOfTheUniverse" defaultChecked={userData.isTheKingOfTheUniverse}/>
      </div>
    </div>
  )
}
export default Profile;