import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
const Header = () => {
  const [Btn, setBtn] = useState(["login"]);
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
          <button className="btn" onClick={()=>{
            Btn==="login" ? setBtn("logout") :setBtn("login");
          }}>{Btn}</button>
        </ul>
      </div>
    </div>
  );
};
export default Header;
