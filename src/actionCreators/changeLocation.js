import actions from "../actions";

export default function changeLocation(location) {
  return {
    type: actions.CHANGE_LOCATION,
    payload: location,
  };
}
