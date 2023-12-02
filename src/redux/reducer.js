import { FETCH_PRODUCTS_SUCCESS, APPROVE_PRODUCT, MARK_PRODUCT_MISSING, UPDATE_PRODUCT } from './actions';

const initialState = {
  products: [],
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: action.payload.products,
      };
    case APPROVE_PRODUCT:
      return {
        ...state,
        products: state.products.map((product) =>
          product.id === action.payload.productId ? { ...product, status: 'approved' } : product
        ),
      };
    case MARK_PRODUCT_MISSING:
      return {
        ...state,
        products: state.products.map((product) =>
          product.id === action.payload.productId
            ? { ...product, status: action.payload.urgent ? 'Missing - Urgent' : 'Missing' }
            : product
        ),
      };
    case UPDATE_PRODUCT:
      return {
        ...state,
        products: state.products.map((product) =>
          product.id === action.payload.productId
            ? { ...product, price: action.payload.price, quantity: action.payload.quantity }
            : product
        ),
      };
    default:
      return state;
  }
};

export default Reducer;
