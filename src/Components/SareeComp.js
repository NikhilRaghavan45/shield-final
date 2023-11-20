import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import "../Components/cloths.css";
import AddToCart from './AddToCart';

const SareeComp = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:3001/saree`)
      .then(res => setData(res.data))
      .catch(err => console.log(err))
  }, []);

  return (
    <div className="container-fluid backgroundphoto p-3">
      <div className="product-container">
        {data.map((data, index) => {
          return (
            <div className="card col-2 shadow-lg p-3 mb-5 rounded" key={index}>
              <div className="card-body">
                <img
                  src={data?.imgsrc || 'https://static.vecteezy.com/system/resources/thumbnails/004/141/669/small/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg'}
                  className="card-img-top"
                  alt="Profile"
                />
              </div>
              <div className="card-footer">
                <h6 className="card-title">₹{data.price}</h6>
                <p className="card-text">
                  {data.name}
                </p>
                <button className="btn btn-warning m-3" onClick={() => { AddToCart(data.id, data.name, data.price) }}>Add to Cart</button>

                <a href="https://www.limeroad.com/green-silk-fashion-basket-p19351008?imgIdx=3&src_id=fromsearch__0">
                  <button className="btn btn-primary">Buy Now</button>
                </a>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  );
};

export default SareeComp;
