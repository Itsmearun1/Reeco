import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: green;
  padding: 10px 20px;
  margin-bottom:5px;
`;

const Brand = styled.div`
  color: white;
  margin-right:10px
`;
const Div = styled.div`
display: flex;
margin:10px;
`
const LinksContainer = styled.div`
  display: flex;
  align-items: left;
`;

const NavLink = styled.div`
  margin-right: 20px;
  color: white;
  cursor: pointer;
  display: flex;
  align-items: left;
  justify-content: space-around;
`;

const ShoppingCart = styled.div`
  display: flex;
  align-items: center;
`;

const CartIcon = styled.div`
  background-color: white;
  color: green;
  padding: 10px;
  border-radius: 50%;
  margin-right: 10px;
`;

const Greeting = styled.div`
  color: white;
`;

const Navbar = () => {
  return (
    <HeaderContainer>
      <Div>
      <Brand>Reeco</Brand>
      <LinksContainer>
        <NavLink>Market</NavLink>
        <NavLink>Transactions</NavLink>
        <NavLink>Insights</NavLink>
      </LinksContainer>
      </Div>
      <ShoppingCart>
        <CartIcon>🛒</CartIcon>
        <Greeting>Hello, John</Greeting>
      </ShoppingCart>
    </HeaderContainer>
  );
};

export default Navbar;
