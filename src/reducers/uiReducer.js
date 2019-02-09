const initialState = {
  isEventOnFocus: false,
  eventOnFocusProps: {
    id: "",
    canFavourite: true
  }
};

export default function eventsReducer(state = initialState, action) {
  switch (action.type) {
    case "EVENT_SELECTED":
      return {
        ...state,
        isEventOnFocus: true,
        eventOnFocusProps: {
          id: action.payload.id,
          canFavourite: action.payload.canFavourite
        }
      };
    case "CLEAR_EVENT_SELECTED":
      return {
        ...state,
        isEventOnFocus: false,
        eventOnFocusProps: {
          id: "",
          canFavourite: true
        }
      };
    case "IS_FAVOURITE":
      return {
        ...state,
        eventOnFocusProps: {
          canFavourite: false
        }
      };
    case "GET_REF":
      return {
        ...state,
        eventOnFocusProps: {
          id: action.payload
        }
      };
    default:
      return state;
  }
}
