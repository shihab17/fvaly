import { IProduct } from 'Models/types';
import React from 'react';
import { Card, Col } from 'react-bootstrap';

interface IProps {
  product: IProduct;
}

const baseUrl = process.env.REACT_APP_IMAGE_BASE_URL;

const Product = ({ product }: IProps) => {
  const { name, image } = product;
  console.log('image: ', baseUrl + image);
  return (
    <Col md={3} className="mb-3">
      <Card>
        <Card.Img variant="top" src={baseUrl + image} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Product;
