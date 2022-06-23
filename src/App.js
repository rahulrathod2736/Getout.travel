import "./App.css";
import React, { useEffect, useState } from "react";
import { NavBar } from "./components/navBar/navBar";
import { Products } from "./components/productListing/products";
import { Categories } from "./components/category/category";
import { BottomNavigation } from "./components/bottomNavigation/bottomNavigation";
import { categories, products } from "./seedData/seedData";

function App() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 3000);
    }, []);
    return (
      <div className="container-screen">
        <NavBar isLoading={isLoading} />
        <div>
          {isLoading ? (
            <div className="image skeleton banner-skeleton"></div>
          ) : (
            <img
              src="https://images.pexels.com/photos/179909/pexels-photo-179909.jpeg"
              className="image"
              alt="Cloth Brand 1"
            />
          )}
        </div>
        <Categories categories={categories} isLoading={isLoading} />
        <div>
          {isLoading ? (
            <div className="image skeleton banner-skeleton"></div>
          ) : (
            <img
              src="https://images.pexels.com/photos/2292953/pexels-photo-2292953.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              className="image"
              alt="Sell Brand 1"
            />
          )}
        </div>

        <Products products={products} isLoading={isLoading} />
        <BottomNavigation isLoading={isLoading} />
      </div>
    );
}

export default App;
