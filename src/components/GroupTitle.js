import React from "react";
import "./GroupTitle.css";

function GroupTitle({ title, ticketCount }) {
  return (
    <div className="group-title">
      {/* Icon */}
      <div className="icon">{/* Insert your icon here */}</div>

      {/* Title */}
      <div className="title">{title}</div>

      {/* Ticket count */}
      <div className="ticket-count">{ticketCount}</div>

      {/* Icon buttons */}
      <div className="icon-buttons">{/* Insert your icon buttons here */}</div>
    </div>
  );
}

export default GroupTitle;
