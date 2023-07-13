/* eslint-disable */

import { useParams } from "react-router-dom";

import EventDetails from "../components/features/event-details/EventDetails";
import { data } from "../config/app-config/AppConfig";

const EventDetailsPage = () => {
  const { eventId } = useParams();

  // Find the event with the matching eventId
  const event = data.meetups.find((event) => event.id === eventId);

  return <EventDetails event={event} />;
};

export default EventDetailsPage;
