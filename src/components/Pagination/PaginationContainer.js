import Pagination from "./Pagination";
import { connect } from "react-redux";
import {
  page,
  nextPageSlider,
  previousPageSlider,
  previousPageSliderX2,
  nextPageSliderX2,
} from "../../redux/Gallery-Reducer";

const mapStateToProps = (state) => {
  return {
    currentPage: state.galleryReducer.currentPage,
    styleToggle: state.searchReducer.styleToggle,
    pages: state.galleryReducer.pages,

    toggleButtonNext: state.galleryReducer.toggleButtonNext,
    toggleButtonPrevious: state.galleryReducer.toggleButtonPrevious,
  };
};

const PaginationContainer = connect(mapStateToProps, {
  page,
  nextPageSlider,
  previousPageSlider,
  previousPageSliderX2,
  nextPageSliderX2,
})(Pagination);

export default PaginationContainer;
