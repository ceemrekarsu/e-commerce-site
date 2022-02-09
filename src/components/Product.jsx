import React, { useState, useEffect } from "react";
import {useDispatch} from 'react-redux';
import { addCart } from "../redux/actions/actionTypes";
import Skeleton from "react-loading-skeleton";
import { useParams } from "react-router-dom";

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false); 

  const dispatch = useDispatch();
  const addProduct = (product) => {
      dispatch(addCart(product))
  } 

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      setProduct(await response.json());
      setLoading(false);
    };
    getProduct();
  }, []);

  const Loading = () => {
    return <>
    <div className="col-md-6">
        <Skeleton height={400}/>
        </div>
       <div className="col-md-6" style={{lineHeight:2}}>
           <Skeleton height={50} width={300}/>
           <Skeleton height={75} />
           <Skeleton height={25} width={150}/>
           <Skeleton height={50} />
           <Skeleton height={150} />
           <Skeleton height={50} width={300}/>
           <Skeleton height={50} width={300} style={{marginLeft:6}}/>


           </div> 
        </>;
  };

  const ShowProduct = () => {
    return (
      <>
        <div className="col-md-6">
          <img
            src={product.image}
            className="rounded mt-3 ms-5 "
            alt={product.title}
            height="528"
            width="auto"
          />
        </div>
        <div className="col-md-6">
          <h4 className="text-ppercase text-black-50">{product.category}</h4>
          <h1 className="display-5">{product.title}</h1>
          <p className="lead fw-bolder">
            {product.rating && product.rating.rate}
            <i className="fa fa-star"> | 497 değerlendirme</i>
          </p>
          <h3 className="display-6 fw-bold my-4">{product.price} TL</h3>
          <p className="lead">{product.description}</p>
          <button className="btn btn-outline-dark px-4 py-2" onClick={()=>addProduct(product)} >
              Sepete Ekle
          </button>
          <a href="/cart" className="btn btn-dark ms-2 px-3 py-2">
              Sepete Git
          </a>
        </div>
      </>
    );
  };

  return (
    <div>
      <div className="container py-5">
        <div className="row py-4">{loading ? <Loading /> : <ShowProduct />}</div>
      </div>
    </div>
  );
};

export default Product;
