import actions from "../actions";

export default function location(state = "Seattle, WA", action) {
  if (action.type === actions.CHANGE_LOCATION) {
    return action.payload;
  } else {
    return state;
  }
}
