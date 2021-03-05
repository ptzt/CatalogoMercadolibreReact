import React from 'react';
import "../styles/ProductCard.css"

export default function ProductCard({product = {}}) {
  return (
    <div class="container py-5">

 

    <div class="row">
      <div class="col-lg-8 mx-auto">

      
      <ul class="list-group shadow">

        <li class="list-group-item">
          <div class="media align-items-lg-center flex-column flex-lg-row p-3">
            <div class="media-body order-2 order-lg-1">
              <h5 class="mt-0 font-weight-bold mb-2">{product.title}</h5>
              
              <div class="d-flex align-items-center justify-content-between mt-1">
                <h6 class="font-weight-bold my-2">${product.money}{product.price}</h6>
                <ul class="list-inline small">
                <a href={product.link} target="_blank" className="btn btn-primary" rel="noreferrer">Ver más</a>
                <p className="card-text">Disponible: {product.stock}</p>
                </ul>
              </div>
            </div><img src={product.image} class="card-img-top img-fluid" alt="Responsive image" />
          </div>
        </li>
        </ul>
  </div>
</div>
</div>


);
}
