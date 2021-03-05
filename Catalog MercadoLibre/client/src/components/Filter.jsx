import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ascProducts, descProducts, newProducts, usedProducts } from './../redux/actions.js';

export default function Pager() {
  const dispatch = useDispatch();

  const products = useSelector(state => state.products);
  
  function handleSetAsc() {
    dispatch(ascProducts());
  }
  
  function handleSetDesc() {
    dispatch(descProducts());
  }

  function handleSetNew() {
    dispatch(newProducts());
  }

  function handleSetUsed() {
    dispatch(usedProducts());
  }

  return (
    products.length > 0 ? (
      <div className="mt-4">
        <nav aria-label="Page navigation example">
          <ul className="pagination justify-content-center">
            <li className="page-item"><button className="page-link" onClick={ () => handleSetAsc() }>Ascendente</button></li>
            <li className="page-item"><button className="page-link" onClick={ () => handleSetDesc() }>Descendente</button></li>
            <li className="page-item"><button className="page-link" onClick={ () => handleSetNew() }>Nuevo</button></li>
            <li className="page-item"><button className="page-link" onClick={ () => handleSetUsed() }>Usado</button></li>
          </ul>
        </nav>
      </div>
    ) : (
      <React.Fragment></React.Fragment>
    )
  );
}