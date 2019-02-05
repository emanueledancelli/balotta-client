import { getAllEvents } from "../api";
import orderBy from "lodash/orderBy";

export const fetchEvents = () => (dispatch, getState) => {
  const isFetched = getState().events.isFetched;

  if (!isFetched) {
    dispatch({ type: "FETCH_EVENTS_BEGINS" });
    getAllEvents()
      .then(res => {
        let ordered = orderBy(res.data, "acf.start_date");

        dispatch({
          type: "FETCH_EVENTS_SUCCESS",
          payload: ordered
        });
      })
      .catch(err =>
        dispatch({
          type: "FETCH_EVENTS_FAILURE",
          payload: err
        })
      );
  }
};
