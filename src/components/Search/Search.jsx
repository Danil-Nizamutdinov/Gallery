import React from "react";
import SearchAuthor from "./SearchAuthor/SearchAuthor";
import SearchLocation from "./SeacrchLocation/SearchLocation";
import SearchCreated from "./SearchCreated/SearchCreated";

function Search(props) {
  let updateNameText = (e) => {
    let text = e.target.value;
    props.updateNameText(text);
  };

  let addClassDarkBarsInput = props.styleToggle
    ? "search_content_bars_input--dark"
    : "";

  console.log(props.maxSymbols);

  return (
    <section>
      <div className="search_content">
        <input
          type="text"
          placeholder="Name"
          className={`search_content_bars search_content_bars_input ${addClassDarkBarsInput}`}
          onChange={updateNameText}
          value={props.bodyText}
        />

        <SearchAuthor
          authors={props.authors}
          setAuthorToggleFalse={props.setAuthorToggleFalse}
          author={props.author}
          setAuthor={props.setAuthor}
          authorToggler={props.authorToggler}
          styleToggle={props.styleToggle}
          maxSymbols={props.maxSymbols}
        />

        <SearchLocation
          locationToggler={props.locationToggler}
          setLocationToggleFalse={props.setLocationToggleFalse}
          location={props.location}
          locations={props.locations}
          setLocation={props.setLocation}
          styleToggle={props.styleToggle}
          maxSymbols={props.maxSymbols}
        />

        <SearchCreated
          updateCreatedBeforeText={props.updateCreatedBeforeText}
          updateCreatedFromText={props.updateCreatedFromText}
          bodyTextCreatedFrom={props.bodyTextCreatedFrom}
          bodyTextCreatedBefore={props.bodyTextCreatedBefore}
          styleToggle={props.styleToggle}
        />
      </div>
    </section>
  );
}

export default Search;
