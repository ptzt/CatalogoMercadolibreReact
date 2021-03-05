import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updatePage } from './../redux/actions.js';

export default function Pager() {
  const dispatch = useDispatch();

  const catalog = useSelector(state => state.catalog);
  
  function handleSetPage(number) {
    dispatch(updatePage(number));
  }

  return (
    catalog.length > 0 ? (
      <div>
        <nav aria-label="Page navigation example">
          <ul className="pagination justify-content-center">
            {
              catalog.length < 30 ? (
                <li className="page-item"><button className="page-link">1</button></li>
              ) : (
                <React.Fragment>
                  <li className="page-item"><button className="page-link" onClick={ () => handleSetPage(1)}>1</button></li>
                  <li className="page-item"><button className="page-link" onClick={ () => handleSetPage(2)}>2</button></li>
                </React.Fragment>
              )
            }
          </ul>
        </nav>
      </div>
    ) : (
      <React.Fragment></React.Fragment>
    )
  );
}