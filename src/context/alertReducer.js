import { ALERT_ACTIONS } from "./actions";



const alertReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case ALERT_ACTIONS.SET_ALERT:
      return payload;
    case ALERT_ACTIONS.REMOVE_ALERT:
      return null;
    default:
      return state;
  }
};

export default alertReducer;