export const formatDateTime = (dateTimeString) => {
  const dateOptions = {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric",
  };

  const timeOptions = {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
    timeZone: "Asia/Kolkata",
  };

  const dateTime = new Date(dateTimeString);
  const formattedDate = dateTime.toLocaleDateString("en-US", dateOptions);
  const formattedTime = dateTime.toLocaleTimeString("en-US", timeOptions);

  return `${formattedDate} at ${formattedTime}`;
};
