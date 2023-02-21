import React from "react";
import { connect } from "react-redux";

import {getAuthors, getLocations, updateNameText, 
  setLocation, setLocationToggleFalse, 
  setAuthor, setAuthorToggleFalse,
  updateCreatedBeforeText,updateCreatedFromText, newMaxSymbols} from "../../redux/Search-Reducer"

import Search from "./Search"

class SearchAPIContainer extends React.Component {

    componentDidMount() {
      this.props.getAuthors();
      this.props.getLocations();

      if(window.innerWidth < 1366) {

        this.props.newMaxSymbols(20)

      } if(window.innerWidth < 1024) {

        this.props.newMaxSymbols(10)

      } if(window.innerWidth < 768) {

        this.props.newMaxSymbols(25)

      }

    }

    render() {
      return <Search {...this.props}/>;
    }
}

const mapStateToProps = (state) => {
    return {
        authors: state.searchReducer.authors,
        locations: state.searchReducer.locations,

        bodyText: state.searchReducer.bodyText,

        bodyTextCreatedFrom: state.searchReducer.bodyTextCreatedFrom,
        bodyTextCreatedBefore: state.searchReducer.bodyTextCreatedBefore,

        location: state.searchReducer.location,
        locationToggler:state.searchReducer.locationToggler,

        author: state.searchReducer.author,
        authorToggler: state.searchReducer.authorToggler,

        styleToggle: state.searchReducer.styleToggle,
        maxSymbols: state.searchReducer.maxSymbols,
    }
}
 
const SearchContainer = connect(mapStateToProps, {getAuthors, getLocations, updateNameText,
   setLocation, setLocationToggleFalse, setAuthor, setAuthorToggleFalse,
   updateCreatedBeforeText, updateCreatedFromText, newMaxSymbols})(SearchAPIContainer)

export default SearchContainer