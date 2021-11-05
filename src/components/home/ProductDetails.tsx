import useAsync from 'hooks/useAsync';
import { IProduct } from 'Models/types';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import ProductService from 'services/ProductService';
import imageUrlParser from 'utils/imageUrlParser';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { addToCart } from 'redux/actions/cartAction';

interface IParams {
  id: string;
}
const ProductDetails = () => {
  const { id } = useParams<IParams>();
  const disPatch = useDispatch();
  const { data, isSuccess, isError, error } = useAsync<IProduct>(() =>
    ProductService.getProductsById(id)
  );
  console.log(data, 'is success' + isSuccess);
  return (
    <div>
      <Container>
        <div className="wrapper bg-white rounded border">
          <Row>
            <Col md={4}>
              <img
                className="img-fluid"
                src={imageUrlParser(data ? data.image : '')}
                alt={data?.name}
              />
            </Col>
            <Col md={8}>
              <h3 className="mb-3">{data?.name}</h3>
              <h4>{data?.price}</h4>
              <button
                onClick={() => disPatch(addToCart(data as IProduct))}
                className="btn btn-primary"
              >
                <AiOutlineShoppingCart />
                Add to Cart
              </button>
              <h6>{data?.description}</h6>
            </Col>
          </Row>
          {isError && <h1>{error}</h1>}
        </div>
      </Container>
    </div>
  );
};

export default ProductDetails;
