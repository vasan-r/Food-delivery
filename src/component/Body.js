import React, { useState } from "react";
import Cart from "./Cart";
import resList from "../utils/mockdata"; // Ensure mockdata.js is properly exporting resList

const Body = () => {
  const [ListofRestaruant, setListofRestaruant] = useState(resList);

  const filterTopRatedRestaurants = () => {
    const filteredList = ListofRestaruant.filter(
      (res) =>
        res.card &&
        res.card.card &&
        res.card.card.info &&
        res.card.card.info.avgRating > 4.3
    );
    setListofRestaruant(filteredList);
  };

  return (
    <div className="body-container">
      <div className="btn">
        <button onClick={filterTopRatedRestaurants}>
          Top Rated Restaurants
        </button>
      </div>
      <div className="cart-container">
        {ListofRestaruant.map((restaurant) => (
          <Cart key={restaurant.card.card.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
