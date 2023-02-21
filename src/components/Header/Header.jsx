import React from "react";
import Logo from "../../img/Logo.png";
import SwitchDark from "../../img/SwitchDark.png";
import SwitchWhite from "../../img/SwitchWhite.png";
function Header(props) {
  let switchImg = props.styleToggle ? SwitchWhite : SwitchDark;

  return (
    <header>
      <div className="header_content">
        <div>
          <img src={Logo} alt="" />
        </div>
        <div>
          <img
            src={switchImg}
            alt=""
            className="header_content_switch"
            onClick={props.setStyleToggle}
          />
        </div>
      </div>
    </header>
  );
}

export default Header;
