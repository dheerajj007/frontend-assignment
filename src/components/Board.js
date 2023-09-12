import React from "react";
import Ticket from "./Ticket";
import "./Board.css";

function Board({ tickets, groupingOption }) {
  // Extract unique status values
  const uniqueGroup = [
    ...new Set(tickets.map((ticket) => ticket[groupingOption])),
  ];

  return (
    <div className="board">
      <div className="status-bar">
        {uniqueGroup.map((status) => (
          <div key={status} className="status-group">
            <h2>{status}</h2>
            <div className="ticket-column">
              {tickets
                .filter((ticket) => ticket[groupingOption] === status)
                .map((ticket) => (
                  <Ticket key={ticket.id} ticket={ticket} />
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Board;
