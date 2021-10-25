import Product from 'components/common/Product';
import { IProduct } from 'Models/types';
import React from 'react';
import { Container, Row } from 'react-bootstrap';
interface IPros {
  products: IProduct[];
}
const Products = ({ products }: IPros) => {
  console.log(products);
  return (
    <div className="my-5">
      <Container>
        <h2 className="mb-4">Latest Products</h2>
        <Row>
          {products?.map((product: IProduct) => (
            <Product key={product._id} product={product} />
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Products;
