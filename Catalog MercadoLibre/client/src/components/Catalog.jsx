import React from 'react';
import { useSelector } from 'react-redux';
import { v4 } from 'uuid';
import ProductCard from './ProductCard.jsx';

export default function Catalog() {
  // SELECTORS
  const catalog = useSelector(state => state.catalog);
  const ciclo = useSelector(state => state.ciclo);
  const page = useSelector(state => state.page);

  return (
    <div>
      {
        ciclo === 0 ? (
          <h3 className="my-5 display-4">Esperando busqueda</h3>
        ) : ciclo === 1 ? (
          <div className="spinner-border text-dark my-5" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        ) : ciclo === 2 ? (
          <div className="container my-1">
            <div className="row justify-content-md- row-cols-1" >
              {
                catalog.map((product, index) => (
                  <React.Fragment>
                    {
                      index >= (page - 1) * 30 && index < page * 30 ? (
                        <div className="col my-3">
                          <ProductCard product={product} key={ v4() }/>
                        </div>
                      ) : (<React.Fragment></React.Fragment>)
                    }
                  </React.Fragment>
                ))
              }
            </div>
          </div>
        ) : (
          <h3 className="my-5">Ooops! No encontramos lo que buscas, prueba algo mas!</h3>
        )
      }
    </div>
  );
}