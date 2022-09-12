import React from 'react';
import { ObjectId } from 'mongoose';
import { ProductType } from '../types/product.model';
import ProductCard from './ProductCard';
import './styles/OrderSummary.css';

type OrderSummaryProps = {
    products: ProductType[];
}

const OrderSummary = ({products}: OrderSummaryProps) => {
    return (
      <div className="OrderSummary">
        <div className="OrderSummaryProducts">
          {products.map((product, index) =>
            <ProductCard
              key={`${product._id}_${index}`}
              productName={product.name}
              images={product.images}
              productPrice={+product.price}
            />
          )}
        </div>
      </div>
    );
  }

export default OrderSummary;