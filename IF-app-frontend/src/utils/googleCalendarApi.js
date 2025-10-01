const handleServerResponse = (res) => {
  console.log(res);
  return res.ok ? res.json() : Promise.reject(`Error:${res.status}`);
};

const calendarId = "c293spre610v9fqk0rllud8vjo@group.calendar.google.com";
const apiKey = "AIzaSyAXnXKIhe1ZPh1AiWEfX1OcBzBh9Y_vYjg";
const timeMin = new Date().toISOString();
const url = `https://www.googleapis.com/calendar/v3/calendars/${calendarId}/events?key=${apiKey}&timeMin=${timeMin}&maxResults=10&singleEvents=true&orderBy=startTime`;

export const getClasses = () => {
  return fetch(url).then(handleServerResponse);
};
