/* eslint-disable */

import { FaSearch } from "react-icons/fa";

import "./Header.css";
import meetupLogo from "./../../../assets/meetup.svg";
import { useMeetup } from "../../../core/contexts/MeetupContext";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const { handleSearchInputChange, searchTerm } = useMeetup();
  const navigate = useNavigate();

  return (
    <header className="header">
      <div className="header-contents">
        <h1 onClick={() => navigate("/")}>
          <img src={meetupLogo} alt="logo" />
        </h1>
        <div className="search-bar">
          <div className="search-icon" aria-hidden="true">
            <FaSearch size={12} />
          </div>
          <input
            className="search-bar-input"
            placeholder="Search by title and t..."
            type="text"
            name="searchInput"
            value={searchTerm}
            onChange={handleSearchInputChange}
          />
        </div>
      </div>
      <hr />
    </header>
  );
};

export default Header;
