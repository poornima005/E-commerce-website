import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from './pages/MainLayout';
import SignIn from './common/Auth/SignIn';
import SignUp from './common/Auth/SignUp';
import CheckoutLayout from './pages/CheckoutLayout';
import CompleteLayout from './pages/CompleteLayout';
import ProductDetailsLayout from './pages/ProductDetailsLayout';
import CartLayout from './pages/CartLayout';
import ProductLayout from './pages/ProductLayout';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './index.css';
import './App.css';

// Import the Cart context provider
import { CartCounterProvider } from './common/Context/CartContext';

function App() {
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    const storedUserData = JSON.parse(localStorage.getItem("userData"));
    if (storedUserData && storedUserData.isAuth === true) {
      setIsAuth(true);
    }
  }, []);

  return (
    <main>
      {/* Wrap the entire app with CartCounterProvider */}
      <CartCounterProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            {isAuth ? (
              <>
                <Route path="/" element={<MainLayout />} />
                <Route path="/shop" element={<ProductLayout />} />
                <Route path="/product" element={<ProductDetailsLayout />} />
                <Route path="/cart" element={<CartLayout />} />
                <Route path="/check" element={<CheckoutLayout />} />
                <Route path="/complete" element={<CompleteLayout />} />
              </>
            ) : (
              <>
                <Route path="/" element={<SignIn setIsAuth={setIsAuth} />} />
                <Route path="/signup" element={<SignUp />} />
              </>
            )}
          </Routes>
          <Footer />
          <ToastContainer />
        </BrowserRouter>
      </CartCounterProvider>
    </main>
  );
}

export default App;
