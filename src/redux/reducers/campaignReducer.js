import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  campaign: [],
  detailCampaign: [],
  categoryCampaign: [],
  searchCampaign: "",
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
  },
});

export const { setCampaign, setDetailCampaign, setCategoryCampaign, setSearchCampaign } =
  authSlice.actions;

export default authSlice.reducer;
