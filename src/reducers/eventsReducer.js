const initialState = {
  isLoading: false,
  isFetched: false,
  data: {
    week: [],
    today: [],
    weekEnd: []
  },
  error: null
};

export default function eventsReducer(state = initialState, action) {
  switch (action.type) {
    case "FETCH_EVENTS_BEGINS":
      return {
        ...state,
        isLoading: true
      };
    case "FETCH_EVENTS_SUCCESS":
      return {
        ...state,
        isLoading: false,
        isFetched: true,
        data: {
          week: action.payload.week,
          today: action.payload.today,
          weekEnd: action.payload.weekEnd
        }
      };
    case "FETCH_EVENTS_FAILURE":
      return {
        ...state,
        isLoading: false,
        error: action.payload.message
      };
    default:
      return state;
  }
}
