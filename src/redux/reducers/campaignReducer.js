import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  campaign: [],
  detailCampaign: [],
  categoryCampaign: [],
  searchCampaign: "",
  getCampaignSearch: [],
  getCategoryCampaign: [],
  allCategory: [],
};
const authSlice = createSlice({
  name: "campaign",
  initialState,
  reducers: {
    setCampaign: (state, action) => {
      state.campaign = action.payload;
    },
    setDetailCampaign: (state, action) => {
      state.detailCampaign = action.payload;
    },
    setCategoryCampaign: (state, action) => {
      state.categoryCampaign = action.payload;
    },
    setSearchCampaign: (state, action) => {
      state.searchCampaign = action.payload;
    },
    setGetCampaignSearch: (state, action) => {
      state.getCampaignSearch = action.payload;
    },
    setGetCategoryCampaign: (state, action) => {
      state.getCategoryCampaign = action.payload;
    },
    setAllCategory: (state, action) => {
      state.allCategory = action.payload;
    },
  },
});

export const {
  setCampaign,
  setDetailCampaign,
  setCategoryCampaign,
  setSearchCampaign,
  setGetCampaignSearch,
  setGetCategoryCampaign,
  setAllCategory,
} = authSlice.actions;

export default authSlice.reducer;
