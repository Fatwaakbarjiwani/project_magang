import axios from "axios";
import {
  setCampaign,
  setCategoryCampaign,
  setDetailCampaign,
} from "../reducers/campaignReducer";
export const VITE_API_URL = import.meta.env.VITE_API_CAREUS;

export const getAllCampaign = () => async (dispatch) => {
  try {
    const response = await axios.get(`${VITE_API_URL}/campaign`);
    const data = response.data;
    dispatch(setCampaign(data));
  } catch (error) {
    console.error("Error fetching campaign data:", error);
  }
};
export const getDetailCampaign = (id) => async (dispatch) => {
  try {
    const response = await axios.get(`${VITE_API_URL}/campaign/${id}`);
    const data = response.data;
    const category = data.category;
    dispatch(setDetailCampaign(data));
    dispatch(setCategoryCampaign(category));
  } catch (error) {
    console.error("Error fetching campaign data:", error);
  }
};
