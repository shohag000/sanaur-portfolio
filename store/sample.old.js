import { defineStore } from "pinia";
// import { getAllReviewsApi } from "../services/reviews/reviews";

export const useReviewsStore = defineStore("reviews", {
  state() {
    return {
      allReviewsDataLoaded: false,
      allReviewsData: null,
    };
  },

  actions: {
    async GetAllReviews() {
      let response = [];
      try {
        // const resp = await getAllReviewsApi();
        // response = [resp.data.reviews, null];
        // this.allReviewsData = resp.data.reviews;
        this.allReviewsData = [];
      } catch (err) {
        response = [null, err.response];
        this.allReviewsData = null;
      } finally {
        this.allReviewsDataLoaded = true;
        return response;
      }
    },
  },

  getters: {
    hasAllReviewsDataLoaded: (state) => state.allReviewsDataLoaded,
    allReviews: (state) => state.allReviewsData,
  },
});
