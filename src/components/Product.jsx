import React, { useState } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { approveProduct, markProductMissing, updateProduct } from '../redux/actions';

const TableRow = styled.tr``;

const Tcell = styled.td``;

const Button = styled.button`
  background: transparent;
  border: none;
  padding: 10px 15px;
  cursor: pointer;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const OContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 8px;
  max-width: 400px;
  width: 100%;
`;

const CloseButton = styled.span`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
`;

const ProductImage = styled.img`
  max-width: 100%;
  max-height: 200px;
  margin-bottom: 15px;
`;

const StyledProductImage = styled(ProductImage)`
  max-width: 50px;
  max-height: 50px;
  margin-right: 10px;
`;

const EditModalHeader = styled.h2`
  margin-bottom: 15px;
`;

const InputLabel = styled.label`
  display: block;
  margin-bottom: 10px;
`;

const EditInput = styled.input`
  width: 100%;
  padding: 8px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Product = ({ product }) => {
  const dispatch = useDispatch();
  const [isEditing, setEditing] = useState(false);
  const [editedPrice, setEditedPrice] = useState(product.price);
  const [editedQuantity, setEditedQuantity] = useState(product.quantity);
  const [isUrgentMissing, setIsUrgentMissing] = useState(false);
  const imageUrl = `https://drive.google.com/uc?export=view&id=17wMahGnqw9yQx4NBi9BEFHjlqRUmv4ZV`;

  const handleApprove = () => {
    dispatch(approveProduct(product.id));
  };

  const handleMissing = () => {
    setIsUrgentMissing(true);
  };

  const handleUrgencySelection = (urgent) => {
    dispatch(markProductMissing(product.id, urgent));
    setIsUrgentMissing(false);
  };

  const handleEdit = () => {
    setEditing(true);
  };

  const handleCloseEdit = () => {
    setEditing(false);
  };

  const handleSaveEdit = () => {
    dispatch(updateProduct(product.id, editedPrice, editedQuantity));
    handleCloseEdit();
  };

  return (
    <TableRow key={product.id}>
      <Tcell style={{ display: 'flex', alignItems: 'center' }}>
        <StyledProductImage src={imageUrl} alt={product.name} />
        {product.name}
      </Tcell>
      <Tcell>{product.brand}</Tcell>
      <Tcell>{product.price}</Tcell>
      <Tcell>{product.quantity}</Tcell>
      <Tcell>{product.price*product.quantity}</Tcell>
      <Tcell>{product.status}</Tcell>
      <Tcell style={{ background: '#fbf9f9ff' }}>
        <Button onClick={handleApprove}>✔</Button>
        <Button onClick={handleMissing}>X</Button>
        <Button onClick={handleEdit}>Edit</Button>
      </Tcell>

      {isEditing && (
        <Overlay>
          <OContent>
            <CloseButton onClick={handleCloseEdit}>&times;</CloseButton>
            <EditModalHeader>Edit Product</EditModalHeader>
            <ProductImage src={imageUrl} alt={product.name} />
            <InputLabel>
              Price:
              <EditInput
                type="number"
                value={editedPrice}
                onChange={(e) => setEditedPrice(e.target.value)}
              />
            </InputLabel>
            <InputLabel>
              Quantity:
              <EditInput
                type="number"
                value={editedQuantity}
                onChange={(e) => setEditedQuantity(e.target.value)}
              />
            </InputLabel>
            <Button onClick={handleSaveEdit}>Save</Button>
          </OContent>
        </Overlay>
      )}

      {isUrgentMissing && (
        <Overlay>
          <OContent>
            <EditModalHeader>Is the Missing Item Urgent?</EditModalHeader>
            <Button onClick={() => handleUrgencySelection(true)}>Yes</Button>
            <Button onClick={() => handleUrgencySelection(false)}>No</Button>
          </OContent>
        </Overlay>
      )}
    </TableRow>
  );
};

export default Product;
