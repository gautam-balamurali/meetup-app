/* eslint-disable */

import "./Home.css";
import { formatDateTime } from "../../../utils/DateFormatter";
import { useMeetup } from "../../../core/contexts/MeetupContext";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const { searchedEvents, handleEventTypeChange, eventTypeFilter } =
    useMeetup();
  const navigate = useNavigate();

  return (
    <div className="meetup-landing-page">
      <div className="landing-page-header-contents">
        <h2>Meetup Events</h2>
        <select
          className="event-selector"
          name="eventType"
          id="event-select"
          value={eventTypeFilter}
          onChange={handleEventTypeChange}
        >
          <option value="" selected="true" disabled="disabled">
            Select Event Type
          </option>
          <option value="Offline">Offline</option>
          <option value="Online">Online</option>
          <option value="Both">Both</option>
        </select>
      </div>
      <div className="landing-page-card-contents">
        {searchedEvents.map((meetupDetails) => {
          const { id, eventThumbnail, title, eventStartTime, eventType } =
            meetupDetails;
          return (
            <div key={id} className="meetup-card">
              <div className="event-type">
                <span>{eventType} Event</span>
              </div>
              <img
                onClick={() => navigate(`/event-details/${id}`)}
                className="meetup-img"
                src={eventThumbnail}
                alt="meetup"
              />
              <p>{formatDateTime(eventStartTime)} IST</p>
              <h3>{title}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
