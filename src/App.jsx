import { Suspense } from "react";
import "./App.css";
import Banner from "./Components/Banner/Banner";
import Cards from "./Components/Cards/Cards";
import Count from "./Components/Count/Count";
import Footer from "./Components/Footer/Footer";
import GetStarted from "./Components/GetStarted/GetStarted";
import Navbar from "./Components/Navbar/Navbar";
import Products from "./Components/Products/Products";
import TransparentPricing from "./Components/TransparentPricing/TransparentPricing";
import WorkFlow from "./Components/WorkFlow/WorkFlow";

const fetchCard = async () => {
  const res = await fetch("/data1.json");
  return res.json();
};

function App() {
  const cardsPromise = fetchCard();
  return (
    <>
      <Navbar />
      <Banner />
      <Count />
      <Suspense fallback={<span className="loading loading-ring loading-xl"></span>} >
        <Cards cardsPromise={cardsPromise} />
      </Suspense>
      <Products />
      <GetStarted />
      <TransparentPricing />
      <WorkFlow />
      <Footer />
    </>
  );
}

export default App;
