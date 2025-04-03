
import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  border: 1px solid #ccc;
  padding: 20px;
  margin: 10px;
  text-align: center;
  border-radius: 8px;
  width: 200px;
  background-color: #f9f9f9;
`;

const Title = styled.h2`
  color: #333;
`;

const Price = styled.p`
  font-size: 24px;
  font-weight: bold;
  color: #007bff;
`;

const Button = styled.button`
  background-color: #007bff;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 15px;
  
  &:hover {
    background-color: #0056b3;
  }
`;

const PlanosCard = ({ titulo, preco, tipo }) => (
  <Card>
    <Title>{titulo}</Title>
    <Price>{preco}</Price>
    <p>{tipo}</p>
    <Button>Assinar</Button>
  </Card>
);

export default PlanosCard;
