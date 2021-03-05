import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getProducts, updateCiclo, updatePage } from './../redux/actions.js';
import '../styles/navbar.css'
import logo from "../static/Logo_ML.png";
import logosearch from "../static/ic_Search.png";



export default function SearchBar() {
  // DISPATCHER
  const dispatch = useDispatch();

  // HOOKS
  const [query, setQuery] = useState('');

  // HANDLERS
  function handleOnChange(event) {
    setQuery(event.target.value);
  }

  function handleFetchQuery() {
    dispatch(updateCiclo(1));
    dispatch(getProducts(query));
    dispatch(updatePage(1));
    setQuery('');
  }

  return (
    <div>
      <nav className="navbar navbar-custom navbar-primary">
        <a className="navbar-left">
        
        <img class = "img-responsive logo" src={logo}/>
        </a>
        <div className="form-inline my-2 my-lg-0">
          <input className="form-control mr-sm-2" type="search" placeholder="Buscar productos, marcas y más" aria-label="Search" value={query} onChange={handleOnChange}/>
          <button className="btn btn-outline-light my-2 my-sm-0" onClick={() => handleFetchQuery()} 
          
          ><img src={logosearch}></img></button>
        </div>
      </nav>
      
    </div>
  );
}