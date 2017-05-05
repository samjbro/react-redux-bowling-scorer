import { combineReducers } from "redux";
import games from "./games";

const bowlingApp = combineReducers({ games });

export default bowlingApp;
