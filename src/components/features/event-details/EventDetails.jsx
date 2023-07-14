/* eslint-disable */

import React, { useState } from "react";
import { BiRupee, BiTimeFive } from "react-icons/bi";
import { HiOutlineLocationMarker } from "react-icons/hi";

import "./EventDetails.css";
import { formatDateTime } from "../../../utils/DateFormatter";

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
    setIsRSVPed(true);
    setShowModal(false);
  };

  return (
    <div className="event-details-layout">
      <div className="event-details-left-side">
        <h2>{title}</h2>
        <div className="host-section">
          <p>Hosted By:</p>
          <p className="host-name">{hostedBy}</p>
        </div>
        <img className="event-desc-img" src={eventThumbnail} alt={title} />
        <h3>Details:</h3>
        <p className="event-desc">{eventDescription}</p>
        <h3>Additional Information:</h3>
        <div className="additional-info">
          <p>
            <b>Dress Code:</b> {additionalInformation.dressCode}
          </p>
          <p>
            <b>Age Restrictions:</b> {additionalInformation.ageRestrictions}
          </p>
        </div>
        <h3>Event Tags:</h3>
        <div className="tags-section">
          {eventTags.map((tag, index) => (
            <div key={index} className="tag btn">
              {tag}
            </div>
          ))}
        </div>
      </div>

      <div className="event-details-right-side">
        <div className="event-details">
          <div className="event-detail-section">
            <span>
              <BiTimeFive />
            </span>
            <div className="event-detail-section-right">
              <p>{formatDateTime(eventStartTime)} to</p>
              <p>{formatDateTime(eventEndTime)}</p>
            </div>
          </div>
          <div className="event-detail-section">
            <span>
              <HiOutlineLocationMarker />
            </span>
            <div className="event-detail-section-right">
              <p>{location}</p>
              <p>{address}</p>
            </div>
          </div>
          {isPaid && (
            <div className="event-detail-section">
              <span className="symbol">
                <BiRupee />
              </span>
              <p className="event-detail-section-right">{price}</p>
            </div>
          )}
        </div>
        <h3 className="speakers-container-title">
          Speakers: {`(${speakers.length})`}
        </h3>
        <div className="speakers-container">
          {speakers.map((speaker) => (
            <div className="speaker-container" key={speaker.name}>
              <img src={speaker.image} alt={speaker.name} />
              <p className="speaker-name">{speaker.name}</p>
              <p>{speaker.designation}</p>
            </div>
          ))}
        </div>

        {!isRSVPed && new Date(eventStartTime) > new Date() && (
          <button className="rsvp-btn" onClick={handleRSVP}>
            <span>RSVP</span>
          </button>
        )}

        {isRSVPed && (
          <button className="rsvp-btn" onClick={handleRSVP}>
            <span>Already RSVPed</span>
          </button>
        )}
      </div>

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h3>Complete your RSVP</h3>
            <p>Fill in your personal information.</p>
            <label htmlFor="name-inpt">Name:</label>
            <input
              type="text"
              placeholder="Enter name"
              value={name}
              onChange={handleNameChange}
              disabled={isRSVPed}
              className="rsvp-input"
            />
            <label htmlFor="email-inpt">Email:</label>
            <input
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={handleEmailChange}
              disabled={isRSVPed}
              className="rsvp-input"
            />
            {isPaid && <p>* You have to make the payment at the venue.</p>}
            {!isRSVPed && (
              <button
                disabled={name.length < 1 || email.length < 1}
                className="btn full-width"
                onClick={handleRSVPSubmit}
              >
                <span>RSVP</span>
              </button>
            )}
            {isRSVPed && (
              <button
                className="btn full-width"
                onClick={() => handleModalClose()}
              >
                <span>Close</span>
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default EventDetails;
