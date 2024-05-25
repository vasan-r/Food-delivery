import { CDN_URL } from "../utils/constants";
const Cart = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, deliveryTime } =
    resData.card.card?.info;
  return (
    <div className="cart">
      <img className="food-image" src={CDN_URL + cloudinaryImageId} />
      <h2>{name}</h2>
      <p>{cuisines}</p>
      <h4>{avgRating} ratings</h4>
      <p>{deliveryTime} minutes</p>
    </div>
  );
};
export default Cart;
