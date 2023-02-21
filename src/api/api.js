import axios from "axios";

const instans = axios.create({
  baseURL: "https://test-front.framework.team/",
});

export const galleryAPI = {
  getPaintings(page = 1, limit = 12) {
    return instans
      .get(`paintings?_page=${page}&_limit=${limit}`)
      .then((response) => response.data);
  },
  getAuthors() {
    return instans.get(`authors`).then((response) => response.data);
  },
  getLocations() {
    return instans.get(`locations`).then((response) => response.data);
  },
};

export const searchAPI = {
  searchPaintings(authorId, locationId, bodyText) {
    return instans
      .get(`paintings`, {
        params: {
          authorId: authorId,
          locationId: locationId,
          q: bodyText,
        },
      })
      .then((response) => response.data);
  },
};
