import Product from 'components/common/Product';
import { IProduct } from 'Models/types';
import React from 'react';
import { Container, Row } from 'react-bootstrap';
import ProductSkeleton from 'skeleton/ProductSkeleton';

interface IProps {
  products: IProduct[] | null;
  isLoading: boolean;
}
const Products = ({ products, isLoading }: IProps) => {
  console.log(products);
  return (
    <div className="my-5">
      <Container>
        <h2 className="mb-4">Latest Products</h2>
        {isLoading && <ProductSkeleton />}
        {!isLoading && (
          <Row>
            {products?.map((product: IProduct) => (
              <Product key={product._id} product={product} />
            ))}
          </Row>
        )}
      </Container>
    </div>
  );
};

export default Products;
