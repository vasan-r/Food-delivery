import { LOGO_URL } from "../utils/constants";
const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav">
        <ul>
          <li>home</li>
          <li>About</li>
          <li>contact</li>
          <li>cart</li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
