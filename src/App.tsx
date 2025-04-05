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
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <AuthProvider>
      <div className="h-screen bg-pink-bg bg-opacity-50 overflow-auto mx-auto">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Cart" element={<ProtectedRoute><Cart /></ProtectedRoute>} />
          <Route path="/Users" element={<ProtectedRoute><User /></ProtectedRoute>} />
          <Route path="/Menu" element={<Menu />} />
          <Route path="/details" element={<FoodDetails />} />
          <Route path="/favoris" element={<ProtectedRoute><Favoris /></ProtectedRoute>} />
          <Route path="/confirmation" element={<ProtectedRoute><ConfirmedPaiement /></ProtectedRoute>} />
          <Route path="/signin" element={<ProtectedRoute requireAuth={false}><SignInUp /></ProtectedRoute>} />
        </Routes>
      </div>
    </AuthProvider>
  );
}

export default App;