export function getProducts(query) {
  return function (dispatch) {
    return fetch("http://localhost:8080/api/search?query=" + query, {
      method: 'GET',
      redirect: 'follow'
    })
      .then(results => results.json())
      .then(data => {
        if (Array.isArray(data))
          dispatch({ type: "GET_CATALOGO", payload: data })
        else
          dispatch({ type: "UPDATE_CICLO", payload: 3 });
      })
  }
}

export function updateCiclo(number) {
  return { type: "UPDATE_CICLO", payload: number }
}

export function updatePage(number) {
  return { type: "UPDATE_PAGE", payload: number }
}

export function ascProducts() {
  return { type: "ASC_PRODUCTS", payload: null}
}

export function descProducts() {
  return { type: "DESC_PRODUCTS", payload: null}
}

export function newProducts() {
  return { type: "NEW_PRODUCTS", payload: null}
}

export function usedProducts() {
  return { type: "USED_PRODUCTS", payload: null}
}