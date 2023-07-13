/* eslint-disable */

import { Route, Routes } from "react-router-dom";
import HomePage from "../../pages/HomePage";
import PageNotFound from "../../pages/PageNotFound";
import EventDetailsPage from "../../pages/EventDetailsPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/event-details/:eventId" element={<EventDetailsPage />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default AppRoutes;
