import actions from "../actions";

const defaultState = {
  button: {
    backgroundColor: "darkblue",
  },
};

export default function theme(state = defaultState, action) {
  if (action.type === actions.CHANGE_THEME) {
    return action.payload;
  } else {
    return state;
  }
}
