import React, { createContext, useState, useEffect, useContext } from "react";
import apiService from "../apiService";
import { useUser } from "./UserContext";

export const CalendarsContext = createContext();

export const CalendarsProvider = ({ children }) => {
  const [calendars, setCalendars] = useState([]);
  const [calendarErrors, setCalendarErrors] = useState([]);
  const {user} = useUser();
  // retreve user jwt info

  useEffect(() => {
    if (user) {
      fetchCalendars();
      console.log(user)
    }
  }, [user]);

  // CRUD
  const fetchCalendars = async () => {
     await apiService
      .getAll(`calendars/user`, localStorage.getItem("jwt_token"), user.appUserId)
      .then((data) => {
        setCalendars(data)
        console.log(data)
      })
      .catch(console.log);
      
      console.log('Here')
  };

  const createCalendar = async (calendar) => {
    calendar.userId = user.appUserId
    apiService
      .post("calendars/create", calendar, user.jwtToken) 
      .then((data) => {
        if (!data.calendarId) {
          setCalendarErrors(data);
          console.log(data);
        } else {
          setCalendars((prevcalendars) => (
            [...prevcalendars, data]
          ))
          console.log(data)
        }
      })
      .catch(console.log);
  
    fetchCalendars();
    console.log("Calendar added: ", calendar);
  };

  const updateCalendar = (calendar) => {
    calendar.calendarId = calendars.findIndex(calendar);
    apiService.update("calendars/",  calendar.calendarId).then((data) => {
      if (data) {
        setCalendarErrors(data);
      }
    })
    .catch(console.log);
  };

  const deleteCalendar = async (userId,calendarId) => {
    apiService
      .remove( `calendars/delete/${userId}/${calendarId}`)
      .then(() => {
        setCalendars((prevcalendars) =>
          prevcalendars.filter((e) => e.calendarId !== calendarId)
        );
      })
      .then((data) => {
        if (data) {
          setCalendarErrors(data);
        }
      })
      .catch(console.log);
    fetchCalendars();
  };

  return (
    <CalendarsContext.Provider
      value={{
        calendars,
        createCalendar,
        updateCalendar,
        deleteCalendar,
        calendarErrors,
      }}
    >
      {children}
    </CalendarsContext.Provider>
  );
};

export const useCalendars = () => {
  const context = useContext(CalendarsContext);
  if (!context) {
    throw new Error("usecalendars must be used within an CalendarsProvider");
  }
  return context;
};
