import { getAllEvents } from "../api";
import { getDate } from "../utils/getDate";
import orderBy from "lodash/orderBy";
import moment from "moment";

export const fetchEvents = () => (dispatch, getState) => {
  const isFetched = getState().events.isFetched;

  if (!isFetched) {
    dispatch({ type: "FETCH_EVENTS_BEGINS" });
    getAllEvents()
      .then(res => {
        let todaysDate;
        let eventsInChronologicalOrder;
        let data;
        let today, weekEnd, week, concert, culture, clubbing, shows;

        todaysDate = getDate();
        eventsInChronologicalOrder = orderBy(res.data, "acf.start_date");
        week = eventsInChronologicalOrder.filter(
          e => e.acf.start_date >= todaysDate
        );
        today = week.filter(e => e.acf.start_date === todaysDate);
        weekEnd = week.filter(e => {
          let d = moment(e.acf.start_date).format("d");
          let w = ["5", "6", "0"];
          return w.includes(d);
        });
        concert = week.filter(e => e.acf.tags.includes("Concert"));
        culture = week.filter(e => e.acf.tags.includes("Culture"));
        clubbing = week.filter(e => e.acf.tags.includes("Clubbing"));
        shows = week.filter(e => e.acf.tags.includes("Shows"));

        data = {
          today,
          weekEnd,
          week,
          concert,
          clubbing,
          shows,
          culture
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
