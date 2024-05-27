import React, { useState, useEffect } from "react";
import Cart from "./Cart";
import Shimmer from "./Shimmer";

const Body = () => {
  const [ListofRestaruant, setListofRestaruant] = useState([]);
  const [FilterListofRestaruant,setFilterListofRestaruant] = useState([]);
  const [SearchText, setSearchText] = useState("");
  console.log("body rendered");
  useEffect(() => {
    fetchDate();
  }, []);
  const fetchDate = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=11.0796991&lng=76.9997393&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    const obj =
      json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants;
    setListofRestaruant(obj);
    setFilterListofRestaruant(obj);
  };
  const filterTopRatedRestaurants = () => {
    const filteredList = ListofRestaruant.filter(
      (res) => res.info.avgRating > 4.3
    );
    setFilterListofRestaruant(filteredList);
  };
  if (ListofRestaruant.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body-container">
      <div className="filter">
        <div className="search-container">
          <input
            type="text"
            className="search-box"
            value={SearchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          ></input>
          <button
            className="search-btn"
            onClick={() => {
              const filterRes = ListofRestaruant.filter((res) =>
                res.info.name.toLowerCase().includes(SearchText.toLowerCase())
              );
              setFilterListofRestaruant(filterRes);
            }}
          >
            search
          </button>
        </div>
        <button className="filter-btn" onClick={filterTopRatedRestaurants}>
          Top Rated Restaurants
        </button>
      </div>
      <div className="cart-container">
        {FilterListofRestaruant.map((restaurant) => (
          <Cart key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
