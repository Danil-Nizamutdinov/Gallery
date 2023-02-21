import { galleryAPI } from "../api/api";

const initialState = {
  authors: [],
  author: "Author",
  authorToggler: false,
  authorId: null,

  locations: [],
  location: "Location",
  locationToggler: false,
  locationId: null,

  locationAuthorToggle: null,

  bodyText: "",

  bodyTextCreatedFrom: "",
  bodyTextCreatedBefore: "",

  styleToggle: false,

  maxSymbols: 25,
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE-NEW-NAME-TEXT":
      return {
        ...state,
        bodyText: action.newBodyText,
      };

    case "UPDATE-NEW-CREATED-FROM-TEXT":
      return {
        ...state,
        bodyTextCreatedFrom: action.newBodyTextCreatedFrom,
      };

    case "UPDATE-NEW-CREATED-BEFORE-TEXT":
      return {
        ...state,
        bodyTextCreatedBefore: action.newBodyTextCreatedBefore,
      };

    case "SET_AUTHORS":
      return {
        ...state,
        authors: [...action.authors],
      };

    case "SET_LOCATIONS":
      return {
        ...state,
        locations: [...action.locations],
      };

    case "SET_LOCATION":
      return {
        ...state,
        location: action.newLocation,
        locationId: action.newLocationId,
        locationToggler: true,
      };

    case "LOCATION_TOGGLE_FALSE":
      return {
        ...state,
        location: "Location",
        locationToggler: false,
      };

    case "SET_AUTHOR":
      return {
        ...state,
        author: action.newAuthor,
        authorId: action.newAuthorId,
        authorToggler: true,
      };

    case "AUTHOR_TOGGLE_FALSE":
      return {
        ...state,
        author: "Author",
        authorToggler: false,
      };

    case "LOCATION_AUTHOR_TOGGLE":
      return {
        ...state,
        locationAuthorToggle:
          action.newLocationToggle +
          action.newAuthorToggle +
          action.newbodyTextToggler,
      };

    case "STYLE-TOGGLE":
      return {
        ...state,
        styleToggle: !state.styleToggle,
      };

    case "MAX-SYMBOLS":
      return {
        ...state,
        maxSymbols: action.maxSymbols,
      };

    default:
      return state;
  }
};

export const updateNameText = (text) => ({
  type: "UPDATE-NEW-NAME-TEXT",
  newBodyText: text,
});

export const newMaxSymbols = (maxSymbols) => ({
  type: "MAX-SYMBOLS",
  maxSymbols,
});

export const updateCreatedFromText = (text) => ({
  type: "UPDATE-NEW-CREATED-FROM-TEXT",
  newBodyTextCreatedFrom: text,
});
export const updateCreatedBeforeText = (text) => ({
  type: "UPDATE-NEW-CREATED-BEFORE-TEXT",
  newBodyTextCreatedBefore: text,
});

export const setLocation = (text, LocationId) => ({
  type: "SET_LOCATION",
  newLocation: text,
  newLocationId: LocationId,
});
export const setLocationToggleFalse = () => ({ type: "LOCATION_TOGGLE_FALSE" });

export const setAuthor = (text, AuthorId) => ({
  type: "SET_AUTHOR",
  newAuthor: text,
  newAuthorId: AuthorId,
});
export const setAuthorToggleFalse = () => ({ type: "AUTHOR_TOGGLE_FALSE" });

export const setStyleToggle = () => ({ type: "STYLE-TOGGLE" });

export const setLocationAuthorToggle = (
  locationToggle,
  authorToggle,
  bodyTextToggler
) => ({
  type: "LOCATION_AUTHOR_TOGGLE",
  newLocationToggle: locationToggle,
  newAuthorToggle: authorToggle,
  newbodyTextToggler: bodyTextToggler,
});

const setAuthors = (authors) => ({ type: "SET_AUTHORS", authors });
const setLocations = (locations) => ({ type: "SET_LOCATIONS", locations });

export const getAuthors = () => {
  return (dispatch) => {
    galleryAPI.getAuthors().then((response) => {
      dispatch(setAuthors(response));
    });
  };
};

export const getLocations = () => {
  return (dispatch) => {
    galleryAPI.getLocations().then((response) => {
      dispatch(setLocations(response));
    });
  };
};

export default searchReducer;
