import React from "react";

import { ProductCard } from "../../components/ProductCard";

const products = [
  {
    id: 0,
    title:
      "Ноутбук Asus ZenBook 14 UM431DA-AM063 (90NB0PB3-M02200) Utopia Blue + фирменный чехол и мышка",
    image:
      "https://i8.rozetka.ua/goods/18370385/copy_asus_90nb0pb3_m01610_5ec7c842e6083_images_18370385083.jpg",
    price: 19999,
  },
];

export const Home = () => {
  return (
    <div className="Home">
      Home
      <div className="product-list">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            image={product.image}
          />
        ))}
      </div>
    </div>
  );
};
