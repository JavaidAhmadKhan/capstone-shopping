/* eslint-disable react/prop-types */

import Hats from "../../assets/hats.jpg";
import Sneakers from "../../assets/sneakers.webp";
import Jeans from "../../assets/jeans.jpg";
import Hoodies from "../../assets/hoodies.webp";
import Shirts from "../../assets/shirts.webp";
import Jackets from "../../assets/jackets.webp";
import Mens from "../../assets/mens.webp";
import Womens from "../../assets/womens.webp";

import DirectoryItem from "../DirectoryItem/DirectoryItem";
import { useState } from "react";
import Spinner from "../../components/Spinner/Spinner";

const categories = [
  {
    id: 1,
    title: "Hats",
    imageUrl: Hats,
    route: "shop/hats",
  },
  {
    id: 2,
    title: "Sneakers",
    imageUrl: Sneakers,
    route: "shop/sneakers",
  },
  {
    id: 3,
    title: "Jeans",
    imageUrl: Jeans,
    route: "shop/jeans",
  },
  {
    id: 4,
    title: "Hoodies",
    imageUrl: Hoodies,
    route: "shop/hoodies",
  },
  {
    id: 5,
    title: "Shirts",
    imageUrl: Shirts,
    route: "shop/shirts",
  },
  {
    id: 6,
    title: "Jackets",
    imageUrl: Jackets,
    route: "shop/jackets",
  },
  {
    id: 7,
    title: "Mens",
    imageUrl: Mens,
    route: "shop/mens",
  },
  {
    id: 8,
    title: "Womens",
    imageUrl: Womens,
    route: "shop/womens",
  },
];

const Directory = () => {
  const [loading, setLoading] = useState(false);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
      {loading ? (
        <div className="flex items-center justify-center">
          <Spinner />
        </div>
      ) : (
        categories.map((category) => (
          <DirectoryItem key={category.id} category={category} />
        ))
      )}
    </div>
  );
};

export default Directory;
