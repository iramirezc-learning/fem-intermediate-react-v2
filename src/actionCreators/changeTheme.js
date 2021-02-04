import actions from "../actions";

export default function changeTheme(theme) {
  return {
    type: actions.CHANGE_THEME,
    payload: theme,
  };
}
