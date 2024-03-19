import { combineReducers } from "redux";
import modalReducer from "./modalReducer";
import authReducer from "./authReducer";
import campaignReducer from "./campaignReducer";

export default combineReducers({
  modal: modalReducer,
  auth: authReducer,
  campaign: campaignReducer,
});
