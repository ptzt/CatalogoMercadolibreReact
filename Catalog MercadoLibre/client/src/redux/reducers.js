const initialState = {
  // Productos a cargar en el catalogo
  products: [],

  // Catalogo de productos a visualizar
  catalog: [],

  /**
   * Ciclo de busqueda
   * 0: No se registra busqueda
   * 1: Buscando
   * 2: Resultados
   * 3: No hay resultados
   */
  ciclo: 0,

  // Pagina a visualizar
  page: 1,
}

export default function rootReducer(state = initialState, action = null) {
  switch (action.type) {
    case 'GET_CATALOGO':
      return {
        ...state,
        products: action.payload,
        catalog: action.payload,
        ciclo: 2,
      };
    case 'UPDATE_CICLO':
      return {
        ...state,
        ciclo: action.payload,
      };
    case 'UPDATE_PAGE':
      return {
        ...state,
        page: action.payload
      };
    case 'ASC_PRODUCTS':
      return {
        ...state,
        catalog: [...state.products.sort((curr, next) => curr.price - next.price)]
      }
    case 'DESC_PRODUCTS':
      return {
        ...state,
        catalog: [...state.products.sort((curr, next) => next.price - curr.price)]
      }
    case 'NEW_PRODUCTS':
      return {
        ...state,
        catalog: [...state.products.filter((prod) => prod.condition === "new")]
      }
    case 'USED_PRODUCTS':
      return {
        ...state,
        catalog: [...state.products.filter((prod) => prod.condition === "used")]
      }
    default:
      return state;
  }
}