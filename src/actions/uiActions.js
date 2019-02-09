export const setUi = id => (dispatch, getState) => {
  const isSelected = getState().ui.isEventOnFocus;
  let fav = JSON.parse(localStorage.getItem("fav")) || [];
  let canFav = fav.includes(id);
  if (!isSelected) {
    dispatch({
      type: "EVENT_SELECTED",
      payload: {
        id: id,
        canFavourite: !canFav
      }
    });
  } else {
    dispatch({
      type: "CLEAR_EVENT_SELECTED"
    });
  }
};

export const setFav = () => dispatch => {
  dispatch({ type: "IS_FAVOURITE" });
};
