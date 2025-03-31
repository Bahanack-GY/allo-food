import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
// import Footer from "./components/common/Footer";
import Cart from "./pages/Cart";
import User from "./pages/UserAccount";
import Menu from "./pages/Menu";
import FoodDetails from "./pages/FoodDetails";
import Favoris from "./pages/Favoris";
import ConfirmedPaiement from "./pages/ConfirmedPaiement";
import SignInUp from "./pages/SignInUp";
function App(){
  return(

    <div className="h-screen bg-pink-bg bg-opacity-50 overflow-auto mx-auto">
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Users" element={<User />} />
        <Route path="/Menu" element={<Menu />} />
        <Route path="/details" element={<FoodDetails />} />
        <Route path="/favoris" element={<Favoris />} />
        <Route path="/confirmation" element={<ConfirmedPaiement />} />
        <Route path="/signin" element={<SignInUp />} />
      </Routes>
      
    </div>
  
  )
}
export default App;