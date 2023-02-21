import React from "react";
import Gallery from "./Gallery";
import { connect } from "react-redux";
import {
  getPaintings,
  getPaintingsSearch,
  setPaintings,
} from "../../redux/Gallery-Reducer";
import { setLocationAuthorToggle } from "../../redux/Search-Reducer";

class GalleryAPIContainer extends React.Component {
  componentDidUpdate() {
    const bodyTextToggler = this.props.bodyText !== "" ? true : false;

    this.props.setLocationAuthorToggle(
      this.props.locationToggler,
      this.props.authorToggler,
      bodyTextToggler
    );

    const locationId = this.props.locationToggler
      ? this.props.locationId
      : null;
    const authorId = this.props.authorToggler ? this.props.authorId : null;
    const bodyText = this.props.bodyText !== "" ? this.props.bodyText : null;

    this.props.locationAuthorToggle
      ? this.props.getPaintingsSearch(authorId, locationId, bodyText)
      : this.props.getPaintings(this.props.currentPage);
  }

  render() {
    return (
      <Gallery
        paintings={this.props.paintings}
        authors={this.props.authors}
        locations={this.props.locations}
        maxSymbols={this.props.maxSymbols}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    paintings: state.galleryReducer.paintings,
    authors: state.searchReducer.authors,
    locations: state.searchReducer.locations,
    locationId: state.searchReducer.locationId,
    currentPage: state.galleryReducer.currentPage,
    authorToggler: state.searchReducer.authorToggler,
    authorId: state.searchReducer.authorId,
    locationAuthorToggle: state.searchReducer.locationAuthorToggle,
    locationToggler: state.searchReducer.locationToggler,
    bodyText: state.searchReducer.bodyText,
    maxSymbols: state.searchReducer.maxSymbols,
  };
};

const GalleryContainer = connect(mapStateToProps, {
  getPaintings,
  getPaintingsSearch,
  setPaintings,
  setLocationAuthorToggle,
})(GalleryAPIContainer);

export default GalleryContainer;
