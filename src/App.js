import './App.css';
import HomePage from './pages/homepage/homepage.component';
import Profile from './pages/profile/profile.component';
import { Route, Routes } from 'react-router'
import Shop from './pages/shop/shop.component';
import Navbar from './components/navbar/navbar.component';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/profile" element={<Profile/>} />
        <Route path="/shop" element={<Shop/>} />
        <Route exact path="/" element={<HomePage/>} />
      </Routes>
    </div>
  );
}

export default App;
