import { CDN_URL } from "../utils/constants";
const Cart = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, sla, costForTwo } = resData?.info;
  
  return (
    <div className="cart">
      <img className="food-image" src={CDN_URL + cloudinaryImageId} />
      <h2>{name}</h2>
      <p>{cuisines.join(", ")}</p>
      <h4>{avgRating} ratings</h4>
      <h3>{costForTwo}</h3>
      <p>{sla.deliveryTime} minutes</p>
    </div>
  );
};
export default Cart;
