import React, { useEffect, useState } from 'react';
import LoadingIndicator from '../components/LoadingIndicator';
import { useParams } from 'react-router-dom';
import ProductList from '../components/ProductList';
import getProducts from '../api/getProducts';
import instance from '../api/axios';
import { ProductInstance } from '../models/product';

const Category = () =>  {
  const [products, setProducts] = useState<ProductInstance[] | undefined>(undefined);
  const [loading, setLoading] = useState<boolean>(false);
  const [updatedSlug, setUpdatedSlug] = useState<string | undefined>(undefined);
  const { slug } = useParams();

  useEffect(() => {
      const myproducts = getProducts(instance);
      setUpdatedSlug(slug);
      setLoading(false);
  }, []);

    return (
      loading ?
        <LoadingIndicator /> :<></>
        // <ProductList products={products} />
    );
}

export default Category