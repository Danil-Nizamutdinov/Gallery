import React, { useState } from "react";

function SearchCreated(props) {
  let updateCreatedFromText = (e) => {
    let text = e.target.value;
    props.updateCreatedFromText(text);
  };

  let updateCreatedBeforeText = (e) => {
    let text = e.target.value;
    props.updateCreatedBeforeText(text);
  };

  const [btnState, setBtnState] = useState(false);

  let toggleClassCheckDropdown = btnState
    ? "search_content_dropdown_created--active"
    : "";
  let toggleClassCheckBars = btnState ? "search_content_bars--active" : "";
  let toggleClassCheckBarsCreated = btnState
    ? "search_content_bars--created--active"
    : "";

  let toggleClassCheckBarsDark = btnState
    ? "search_content_bars--active--dark"
    : "";

  let dropDownToggler = () => {
    setBtnState((btnState) => !btnState);
  };

  let addClassDarkBars = props.styleToggle ? "search_content_bars--dark" : "";
  let addClassDarkDropDownCreated = props.styleToggle
    ? "search_content_dropdown_created--dark"
    : "";
  let addClassDarkDropSelect = props.styleToggle
    ? "search_content_select--dark"
    : "";
  let addClassDarkBarsActive = props.styleToggle
    ? toggleClassCheckBarsDark
    : "";

  return (
    <div className={`search_content_select ${addClassDarkDropSelect}`}>
      <button
        className={`${"search_content_bars"} ${addClassDarkBars} ${toggleClassCheckBarsCreated} ${toggleClassCheckBars} ${addClassDarkBarsActive}`}
        onClick={dropDownToggler}
      >
        Created
      </button>

      <div
        className={`search_content_dropdown_created  ${toggleClassCheckDropdown} ${addClassDarkDropDownCreated}`}
      >
        <input
          type="text"
          placeholder="from"
          onChange={updateCreatedFromText}
          value={props.bodyTextCreatedFrom}
        />
        <span></span>
        <input
          type="text"
          placeholder="before"
          onChange={updateCreatedBeforeText}
          value={props.bodyTextCreatedBefore}
        />
      </div>
    </div>
  );
}

export default SearchCreated;
