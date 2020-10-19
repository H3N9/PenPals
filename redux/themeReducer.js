import { lightTheme, darkTheme } from "../src/style/Theme";
import { switch_theme } from "./themeAction";

const initiallState = {
  theme: lightTheme,
};

const themeReducer = (state = initiallState, action) => {
  switch (action.type) {
    case switch_theme:
      return { theme: action.theme };

    default:
      return state;
  }
};

export default themeReducer;
