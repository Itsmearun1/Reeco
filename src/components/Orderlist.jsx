import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import Product from './Product';
import { fetchProducts } from '../redux/actions';

const StyledTable = styled.table`
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
  width: 80%;
  margin: auto;
  border-radius:10px 10px 0 0;
  padding :10px;
`;

const StyledThead = styled.thead`
text-align:left
`;

const Theader = styled.th`

`;

const OrderList = () => {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.order.products);

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    return (
        
        <StyledTable>
            <StyledThead>
                <tr>
                    <Theader>Product Name</Theader>
                    <Theader>Brand</Theader>
                    <Theader>Price</Theader>
                    <Theader>Quantity</Theader>
                    <Theader>Total</Theader>
                    <Theader>Status</Theader>
                    <Theader>Action</Theader>
                </tr>
            </StyledThead>

            <tbody>
                {products.map((product) => (
                    <Product key={product.id} product={product} />
                ))}
            </tbody>
        </StyledTable>
    );
};

export default OrderList;
