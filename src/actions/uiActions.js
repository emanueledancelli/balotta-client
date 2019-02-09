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

export const getRef = id => (dispatch, getState) => {
  const isUpdated = getState().ui.isEventOnFocus.id;
  if (isUpdated === id) {
    return;
  } else if (isUpdated !== id) {
    dispatch({
      type: "GET_REF",
      payload: id
    });
  }
};
