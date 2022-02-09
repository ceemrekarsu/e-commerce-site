import React from "react";
import Products from "./Products";

const Home = () => {
  return (
    <div className="hero">
      <div class="card bg-dark text-white border-0">
        <img src="/assets/bg.jpg" class="card-img" alt="background" />
        <div class="card-img-overlay d-flex flex-column mt-5">
         
        </div>
        <div class="card-img-overlay d-flex flex-column justify-content-center mt-5">
          <div className="conainer">    
            <p class="card-text lead fs-2 bg-success w-50 p-3 opacity-75 text-center">200 TL VE ÜZERİ ÜCRETSİZ KARGO! </p>
          </div>
        </div>
      </div>
      <Products/>
    </div>
  );
};

export default Home;
