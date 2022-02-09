import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const state = useSelector((state)=> state.handleCart)
  return (
    <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-white py-3
    shadow-sm">
      <div class="container">
        <a  class="navbar-brand fw-bold fs-2" href="/">
          LILPHA
        </a>
        <buthrefn
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </buthrefn>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a href="/" class="nav-link active" aria-current="page" >
               Anasayfa
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/products">
                Ürünler
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/about">
                Hakkımızda
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/contact"> 
                İletişim
              </a>
            </li>
          </ul>
          <div className="buttons">
           <NavLink to="/login" className="btn btn-outline-dark">
            <i className="fa fa-sign-in me-1"></i> Üye Girişi
           </NavLink>
           <NavLink to="/register" className="btn btn-outline-dark ms-2">
            <i className="fa fa-user-plus me-1"></i> Kayıt
           </NavLink>
           <NavLink to="/cart" className="btn btn-outline-dark ms-2">
            <i className="fa fa-shopping-cart me-1"></i> Sepetiniz ({state.length})
           </NavLink>
          </div>
        </div>
      </div>
    </nav>
  </div>
  )
}

export default Navbar