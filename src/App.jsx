import React from "react";
import HeaderContainer from "./components/Header/HeaderContainer";
import SearchContainer from "./components/Search/SearchContainer";
import GalleryContainer from "./components/Gallery/GalleryContainer";
import PaginationContainer from "./components/Pagination/PaginationContainer";
import "./css/style.css";
import { useSelector } from "react-redux";

function App() {
  const styleToggle = useSelector((state) => state.searchReducer.styleToggle);

  return (
    <div className={styleToggle ? "all_content" : ""}>
      <div className="container">
        <HeaderContainer />
        <SearchContainer />
        <GalleryContainer />
        <PaginationContainer />
      </div>
    </div>
  );
}

export default App;
