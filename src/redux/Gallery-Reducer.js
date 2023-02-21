import { galleryAPI, searchAPI } from "../api/api";

const initialState = {
  paintings: [],

  currentPage: 1,
  pages: [1, 2, 3],

  toggleButtonNext: false,
  toggleButtonPrevious: true,
};

const galleryReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_PAITINGS":
      return {
        ...state,
        paintings: [...action.paintings],
      };

    case "PAGE":
      return {
        ...state,
        currentPage: action.page,
      };

    case "PAGE_SLIDE":
      return {
        ...state,
        pages: [...action.pages],
      };

    case "TOGGLE_BUTTON_NEXT_FALSE":
      return {
        ...state,
        toggleButtonNext: false,
      };

    case "TOGGLE_BUTTON_NEXT_TRUE":
      return {
        ...state,
        toggleButtonNext: true,
      };

    case "TOGGLE_BUTTON_PREVIOUS_FALSE":
      return {
        ...state,
        toggleButtonPrevious: false,
      };

    case "TOGGLE_BUTTON_PREVIOUS_TRUE":
      return {
        ...state,
        toggleButtonPrevious: true,
      };

    default:
      return state;
  }
};

export const page = (page) => ({ type: "PAGE", page });

export const setPaintings = (paintings) => ({
  type: "SET_PAITINGS",
  paintings,
});

const PageSlide = (pages) => ({ type: "PAGE_SLIDE", pages });

const toggleButtonNextFalse = () => ({ type: "TOGGLE_BUTTON_NEXT_FALSE" });
const toggleButtonNextTrue = () => ({ type: "TOGGLE_BUTTON_NEXT_TRUE" });

const toggleButtonPreviousFalse = () => ({
  type: "TOGGLE_BUTTON_PREVIOUS_FALSE",
});
const toggleButtonPreviousTrue = () => ({
  type: "TOGGLE_BUTTON_PREVIOUS_TRUE",
});

export const getPaintings = (currentPage) => {
  return (dispatch) => {
    galleryAPI.getPaintings(currentPage).then((response) => {
      dispatch(setPaintings(response));
    });
  };
};

export const getPaintingsSearch = (authorId, locationId, bodyText) => {
  return (dispatch) => {
    searchAPI
      .searchPaintings(authorId, locationId, bodyText)
      .then((response) => {
        dispatch(setPaintings(response));
      });
  };
};

export const nextPageSlider = (pages) => {
  return (dispatch) => {
    if (pages[2] !== 5) {
      for (let key in pages) {
        pages[key] += 1;
      }

      dispatch(PageSlide(pages));

      if (pages[0] > 1) {
        dispatch(toggleButtonPreviousFalse());
      }

      if (pages[2] === 5) {
        dispatch(toggleButtonNextTrue());
      }
    } else {
      dispatch(PageSlide(pages));
    }
  };
};

export const previousPageSlider = (pages) => {
  return (dispatch) => {
    if (pages[0] !== 1) {
      for (let key in pages) {
        pages[key] -= 1;
      }
      dispatch(PageSlide(pages));

      if (pages[0] === 1) {
        dispatch(toggleButtonPreviousTrue());
      }
      if (pages[2] < 5) {
        dispatch(toggleButtonNextFalse());
      }
    } else {
      dispatch(PageSlide(pages));
    }
  };
};

export const nextPageSliderX2 = (pages) => {
  return (dispatch) => {
    if (pages[2] !== 5 && pages[2] !== 4) {
      for (let key in pages) {
        pages[key] += 2;
      }

      if (pages[0] > 1) {
        dispatch(toggleButtonPreviousFalse());
      }

      if (pages[2] === 5) {
        dispatch(toggleButtonNextTrue());
      }

      dispatch(PageSlide(pages));
    }
    if (pages[2] === 4) {
      for (let key in pages) {
        pages[key] += 1;
      }

      if (pages[2] === 5) {
        dispatch(toggleButtonNextTrue());
      }

      dispatch(PageSlide(pages));
    } else {
      dispatch(PageSlide(pages));
    }
  };
};

export const previousPageSliderX2 = (pages) => {
  return (dispatch) => {
    if (pages[0] !== 1 && pages[0] !== 2) {
      for (let key in pages) {
        pages[key] -= 2;
      }

      if (pages[2] < 5) {
        dispatch(toggleButtonNextFalse());
      }

      if (pages[0] === 1) {
        dispatch(toggleButtonPreviousTrue());
      }

      dispatch(PageSlide(pages));
    }
    if (pages[0] === 2) {
      for (let key in pages) {
        pages[key] -= 1;
      }

      if (pages[2] < 5) {
        dispatch(toggleButtonNextFalse());
      }

      if (pages[0] === 1) {
        dispatch(toggleButtonPreviousTrue());
      }

      dispatch(PageSlide(pages));
    } else {
      dispatch(PageSlide(pages));
    }
  };
};

export default galleryReducer;
