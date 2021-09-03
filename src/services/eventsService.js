import axios from "axios";

const endpoint = "https://api.remotebootcamp.dev/api/events";

const getPaginatedEvents = (pageIndex, pageSize) => {
  console.log("eventsService getPaginatedEvents firing", pageIndex, pageSize);
  const config = {
    method: "GET",
    url: `${endpoint}/feed?pageIndex=${pageIndex}&pageSize=${pageSize}`,
    headers: { "Content-Type": "application/json" },
  };
  return axios(config);
};

const getMostRecentEvents = () => {
  console.log("eventsService getMostRecenterEvents firing");
  const config = {
    method: "GET",
    url: `${endpoint}/feeds`,
    headers: { "Content-Type": "application/json" },
  };
  return axios(config);
};

const getEventBySlug = (slug) => {
  console.log("eventsService getEventBySlug firing");
  const config = {
    method: "GET",
    url: `${endpoint}/${slug}`,
    headers: { "Content-Type": "application/json" },
  };
  return axios(config);
};

const searchEventsByDate = (pageIndex, pageSize, dateStart, dateEnd) => {
  console.log(
    "eventsService searchEventsByDate firing",
    pageIndex,
    pageSize,
    dateStart,
    dateEnd
  );
  const config = {
    method: "GET",
    url: `${endpoint}/search?pageIndex=${pageIndex}&pageSize=${pageSize}&dateStart=${dateStart}&dateEnd=${dateEnd}`,
    headers: { "Content-Type": "application/json" },
  };
  return axios(config);
};

export {
  getPaginatedEvents,
  getMostRecentEvents,
  getEventBySlug,
  searchEventsByDate,
};
