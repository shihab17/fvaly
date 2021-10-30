import Banner from 'components/home/Banner';
import Products from 'components/home/Products';
import useAsync from 'hooks/useAsync';
import React from 'react';
import ProductService from 'services/ProductService';

const Home = () => {
  const { data: products, isLoading } = useAsync(ProductService.getProducts);
  return (
    <div>
      <Banner />
      <Products isLoading={isLoading} products={products} />
    </div>
  );
};

export default Home;
