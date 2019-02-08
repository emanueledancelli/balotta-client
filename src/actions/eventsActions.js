import { getAllEvents } from "../api";
import orderBy from "lodash/orderBy";
import { getDate } from "../utils/getDate";
import moment from "moment";

export const fetchEvents = () => (dispatch, getState) => {
  const isFetched = getState().events.isFetched;

  if (!isFetched) {
    dispatch({ type: "FETCH_EVENTS_BEGINS" });
    getAllEvents()
      .then(res => {
        let today = getDate();
        let ev = orderBy(res.data, "acf.start_date");
        let kp = ev.filter(e => e.acf.start_date >= today);
        let data = {
          week: kp,
          today: kp.filter(e => e.acf.start_date === today),
          weekEnd: kp.filter(e => {
            let d = moment(e.acf.start_date).format("d");
            let w = ["5", "6", "0"];
            return w.includes(d);
          })
        };
        dispatch({
          type: "FETCH_EVENTS_SUCCESS",
          payload: data
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
