import React, { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";


const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);

  let componenMounted = true;

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products");
      if (componenMounted) {
        setData(await response.clone().json());
        setFilter(await response.json());
        setLoading(false);
        console.log(filter);
      }
      return () => {
        componenMounted = false;
      };
    };
    getProducts();
  }, []);

  const Loading = () => {
    return (
      <>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
      </>
    );
  };

  const filterProduct = (c) => {
    const updatedList = data.filter((x)=> x.category === c)
    setFilter(updatedList)
  }

  const ShowProducts = () => {
    return (
      <>
        <div className="buttons d-flex justify-content-center mb-5 pb-5">
          <button className="btn btn-outline-dark me-2" onClick={()=>setFilter(data)}>Tüm Ürünler</button>
          <button className="btn btn-outline-dark me-2" onClick={()=>filterProduct( "men's clothing")}>
        Erkek
          </button>
          <button className="btn btn-outline-dark me-2" onClick={()=>filterProduct( "women's clothing")}>Kadın</button>
          <button className="btn btn-outline-dark me-2" onClick={()=>filterProduct("electronics")}>Elektronik</button>

        </div>
        {filter.map((product) => {
          return (
            <>
              <div className="col-md-3 mb-4">
                <div class="card h-100 text-center p-4" key={product.id}>
                  <img
                    src={product.image}
                    class="card-img-top"
                    alt={product.title}
                    height="300px"
                  />
                  <div class="card-body">
                    <h5 class="card-title fw-normal">{product.title}</h5>
                    <p class="card-text lead fw-bolder">{product.price} TL</p>
                    <a href={`/products/${product.id}`} class="btn btn-outline-dark">
                      Şimdi Satın Al
                    </a>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </>
    );
  };

  return (
    <div>
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-12 mb-5">
            <h1 className="display-6 fw-bolder text-center">Son Eklenenler</h1>
            <hr />
          </div>
        </div>
        <div className="row justify-content-center">
          {loading ? <Loading /> : <ShowProducts />}
        </div>
      </div>
    </div>
  );
};

export default Products;
