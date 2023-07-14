import { createContext, useContext, useState } from "react";

import { data } from "../../config/app-config/AppConfig";

export const MeetupContext = createContext();

export const MeetupProvider = ({ children }) => {
  const [eventTypeFilter, setEventTypeFilter] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  // Filter events based on event type
  const filteredEvents = data.meetups.filter((event) => {
    if (eventTypeFilter === "Both" || eventTypeFilter === "") {
      return true;
    }
    return event.eventType === eventTypeFilter;
  });

  // Filter events based on search term
  const searchedEvents = filteredEvents.filter((event) => {
    const eventTitle = event?.title.toLowerCase();
    const eventTags = event?.eventTags.map((tag) => tag.toLowerCase());
    const lowercasedSearchTerm = searchTerm.toLowerCase();

    return (
      eventTitle.includes(lowercasedSearchTerm) ||
      eventTags.includes(lowercasedSearchTerm)
    );
  });

  // Event type dropdown change handler
  const handleEventTypeChange = (e) => {
    setEventTypeFilter(e.target.value);
  };

  // Search input change handler
  const handleSearchInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <MeetupContext.Provider
      value={{
        searchedEvents,
        handleEventTypeChange,
        handleSearchInputChange,
        eventTypeFilter,
        searchTerm,
      }}
    >
      {children}
    </MeetupContext.Provider>
  );
};

export const useMeetup = () => useContext(MeetupContext);
