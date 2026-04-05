import { Suspense, useState } from "react";
import "./App.css";
import Banner from "./Components/Banner/Banner";
import Cards from "./Components/Products/Products";
import Count from "./Components/Count/Count";
import Footer from "./Components/Footer/Footer";
import GetStarted from "./Components/GetStarted/GetStarted";
import Navbar from "./Components/Navbar/Navbar";

import TransparentPricing from "./Components/TransparentPricing/TransparentPricing";
import WorkFlow from "./Components/WorkFlow/WorkFlow";
import Products from "./Components/Products/Products";
import { ToastContainer } from "react-toastify";

const fetchCard = async () => {
  const res = await fetch("/data1.json");
  return res.json();
};



function App() {
  const cardsPromise = fetchCard();
  const [cartProducts, setCartProducts] = useState([]);
  
  return (
    <>
      <Navbar cartProducts={cartProducts} />
      <Banner />
      <Count />
      <Suspense fallback={<span className="loading loading-ring loading-xl"></span>} >
        <Products cardsPromise={cardsPromise} cartProducts={cartProducts} setCartProducts={setCartProducts}/>
      </Suspense>
      <GetStarted />
      <TransparentPricing />
      <WorkFlow />
      <Footer />
      <ToastContainer/>
    </>
  );
}

export default App;
