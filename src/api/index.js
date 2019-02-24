import axios from "axios";

axios.defaults.baseURL = "https://api.balotta.co/wp-json/wp/v2";

export const getAllEvents = () => axios.get("/events?per_page=100");
//?per_page=100
export const getSingleEvent = id => axios.get(`/events/${id}`);

export const getAllPlaces = () => axios.get("/place");

export const getSiglePlaces = id => axios.get(`/place/${id}`);

export const getFavEvents = ids => axios.all(ids.map(e => getSingleEvent(e)));

/*
https://api.balotta.co/wp-json/wp/v2/events?per_page=100
*/
