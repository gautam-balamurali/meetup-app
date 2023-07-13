import React, { useState } from "react";
import "./EventDetails.css";

const EventDetails = ({ event }) => {
  const {
    title,
    eventStartTime,
    eventEndTime,
    location,
    address,
    eventThumbnail,
    eventDescription,
    hostedBy,
    eventType,
    isPaid,
    eventTags,
    speakers,
    price,
    additionalInformation,
  } = event;

  const [isRSVPed, setIsRSVPed] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleRSVP = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleRSVPSubmit = () => {
    // RSVP submission logic here
    setIsRSVPed(true);
    setShowModal(false);
  };

  return (
    <div>
      <h2>{title}</h2>
      <img src={eventThumbnail} alt={title} />
      <p>{eventStartTime}</p>
      <p>{eventEndTime}</p>
      <p>Location: {location}</p>
      <p>Address: {address}</p>
      <p>Description: {eventDescription}</p>
      <p>Hosted by: {hostedBy}</p>
      <p>Event Type: {eventType}</p>
      {isPaid && <p>Price: {price}</p>}
      <p>Event Tags: {eventTags.join(", ")}</p>
      <h2>Speakers:</h2>
      {speakers.map((speaker) => (
        <div key={speaker.name}>
          <p>Name: {speaker.name}</p>
          <p>Designation: {speaker.designation}</p>
          <img src={speaker.image} alt={speaker.name} />
        </div>
      ))}
      <h2>Additional Information:</h2>
      <p>Dress Code: {additionalInformation.dressCode}</p>
      <p>Age Restrictions: {additionalInformation.ageRestrictions}</p>

      {/* {!isRSVPed && eventStartTime > new Date() && (
        <button onClick={handleRSVP}>RSVP</button>
      )} */}

      <button onClick={handleRSVP}>RSVP</button>

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleModalClose}>
              &times;
            </span>
            <h2>RSVP</h2>
            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={handleNameChange}
            />
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={handleEmailChange}
            />
            {isPaid ? (
              <p>You have to make the payment at the venue.</p>
            ) : (
              <button onClick={handleRSVPSubmit}>RSVP</button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default EventDetails;
