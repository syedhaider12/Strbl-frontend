import React from "react";
import Navbar from "./components/navbar";
import Brand from "./components/brand";
import Categories from "./components/categories";
import Crousles from "./components/crousles";
import Seller from "./components/seller";
import Rental from "./components/rental";
import Rent from "./components/rent";
function App() {
  return (
    <>
    <Navbar/>
    <Crousles/>
    <Brand/>
    <Categories></Categories>
    <Seller/>
    <Rental/>
    <Rent/>

    </>

  );
}

export default App;
