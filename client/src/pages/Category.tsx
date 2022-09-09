import React, { useEffect, useState } from 'react';
import LoadingIndicator from '../components/LoadingIndicator';
import { useParams } from 'react-router-dom';
import ProductList from '../components/ProductList';
import { getProductsByCategory } from '../api/products';
import instance from '../api/axios';
import { ProductType } from '../models/product.model';

const Category = () =>  {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const { slug } = useParams();

  useEffect(() => {
    (async () => {
        setLoading(true);
        const products = await getProductsByCategory(instance, slug);
        setProducts(products);
        setLoading(false);
    })();
}, [slug]);

    return (
      loading ?
        <LoadingIndicator /> :
        <ProductList products={products} />
    );
}

export default Category