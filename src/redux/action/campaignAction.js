import axios from "axios";
import {
  setAllCategory,
  setCampaign,
  setCategoryCampaign,
  setDetailCampaign,
  setGetCampaignSearch,
  setGetCategoryCampaign,
} from "../reducers/campaignReducer";
export const VITE_API_URL = import.meta.env.VITE_API_CAREUS;

export const getAllCategory = () => async (dispatch) => {
  try {
    const response = await axios.get(`${VITE_API_URL}/campaign/category`);
    const data = response.data;
    dispatch(setAllCategory(data));
  } catch (error) {
    console.error("Error fetching campaign data:", error);
  }
};
export const getAllCampaign = () => async (dispatch) => {
  try {
    const response = await axios.get(`${VITE_API_URL}/campaign/active`);
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
export const searchCampaignName = (pencarian) => async (dispatch) => {
  try {
    const response = await axios.get(`${VITE_API_URL}/campaign/search`, {
      params: { campaignName: pencarian }, // Menggunakan params untuk mengirim data pencarian
    });

    dispatch(setGetCampaignSearch(response.data)); // Menggunakan response.data untuk mendapatkan data dari respons
  } catch (error) {
    console.error("Error fetching campaign data:", error);
  }
};
export const getCampaignCategory = (category) => async (dispatch) => {
  console.log(category);
  try {
    const response = await axios.get(
      `${VITE_API_URL}/campaign/category/${category}`
    );
    const data = response.data;
    dispatch(setGetCategoryCampaign(data)); // Menggunakan response.data untuk mendapatkan data dari respons
    dispatch(setCampaign(data))
  } catch (error) {
    console.error("Error fetching campaign data:", error);
  }
};
