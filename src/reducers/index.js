import { combineReducers } from "redux";

import events from "./eventsReducer";
import ui from "./uiReducer";

export default combineReducers({
  events,
  ui
});
