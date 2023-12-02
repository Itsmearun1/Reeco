export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const APPROVE_PRODUCT = 'APPROVE_PRODUCT';
export const MARK_PRODUCT_MISSING = 'MARK_PRODUCT_MISSING';
export const UPDATE_PRODUCT = 'UPDATE_PRODUCT';

export const fetchProductsSuccess = (products) => ({
  type: FETCH_PRODUCTS_SUCCESS,
  payload: { products },
});

export const fetchProducts = () => {
  return async (dispatch) => {
    try {
      const response = await fetch('https://my-json-server-6nvb.onrender.com/products');
      const products = await response.json();
      dispatch(fetchProductsSuccess(products));
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };
};

export const approveProductSuccess = (productId) => ({
  type: APPROVE_PRODUCT,
  payload: { productId },
});

export const markProductMissingSuccess = (productId, urgent) => ({
  type: MARK_PRODUCT_MISSING,
  payload: { productId, urgent },
});

export const updateProductSuccess = (productId, price, quantity) => ({
  type: UPDATE_PRODUCT,
  payload: { productId, price, quantity },
});

export const approveProduct = (productId) => {
  return async (dispatch) => {
    try {

      await fetch(`https://my-json-server-6nvb.onrender.com/products/${productId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status: 'approved' }),

      });

      dispatch(approveProductSuccess(productId));
    } catch (error) {
      console.error('Error approving product:', error);
    }
  };
};

export const markProductMissing = (productId, urgent) => {
  return async (dispatch) => {
    try {
      await fetch(`https://my-json-server-6nvb.onrender.com/products/${productId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ urgent }),
      });
      dispatch(markProductMissingSuccess(productId, urgent));
    } catch (error) {
      console.error('Error marking product missing:', error);
    }
  };
};

export const updateProduct = (productId, price, quantity) => {
  return async (dispatch) => {
    try {
      await fetch(`https://my-json-server-6nvb.onrender.com/products/${productId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ price, quantity }),
      });

      dispatch(updateProductSuccess(productId, price, quantity));
    } catch (error) {
      console.error('Error updating product:', error);
    }
  };
};
