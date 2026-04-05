import { Suspense, useMemo, useState } from "react";
import "./App.css";
import Banner from "./Components/Banner/Banner";
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
  const cardsPromise = useMemo(() => fetchCard(), []);
  const [cartProducts, setCartProducts] = useState([]);
  const [price, setPrice] = useState(0);

  return (
    <>
      <Navbar cartProducts={cartProducts} />
      <Banner />
      <Count />
      <Suspense
        fallback={<span className="loading loading-ring loading-xl"></span>}
      >
        <Products
          cardsPromise={cardsPromise}
          cartProducts={cartProducts}
          setCartProducts={setCartProducts}
          price={price}
          setPrice={setPrice}
        />
      </Suspense>
      <GetStarted />
      <TransparentPricing />
      <WorkFlow />
      <Footer />
      <ToastContainer
        position="top-right"
        autoClose={2000}
        style={{ zIndex: 9999 }}
      />
    </>
  );
}

export default App;
