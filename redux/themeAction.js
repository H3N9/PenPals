export const switch_theme = "switch_theme";

export const switchTheme = (theme) => {
  return (dispatch) => {
    dispatch({
      type: switch_theme,
      theme,
    });
  };
};
