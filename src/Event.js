import React, { useState } from "react";

function Event() {
  const [eventList, setEventList] = useState([]);
  const [eventName, setEventName] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [eventImage, setEventImage] = useState("");
  const [eventType, setEventType] = useState("Fresher Party");
  const [isActive, setIsActive] = useState("Active");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      eventName != "" &&
      startDate != "" &&
      endDate != "" &&
      eventType != "" &&
      isActive != ""
    ) {
      let eventObj = {
        name: eventName,
        startDate: startDate,
        endDate: endDate,
        eventType: eventType,
        eventStatus: isActive,
      };
      setEventList([...eventList, eventObj]);
      setEventName("");
      setStartDate("");
      setEndDate("");
      setEventType("Birthday");
      setIsActive("Active");
    } else {
      alert("Please fill all the event details");
    }
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this event?")) {
      let newArray = eventList.filter((value, index) => index != id);
      setEventList(newArray);
    }
  };
  return (
    <div>
      <form
        onSubmit={handleSubmit}
        style={{ display: "grid", placeItems: "center" }}
      >
        <label for="fname">Event name:</label>
        <input
          type="text"
          placeholder="Event Name"
          value={eventName}
          onChange={(e) => setEventName(e.target.value)}
        />
        <br />
        <label for="fname">Event Start Date:</label>
        <input
          type="date"
          placeholder="Event Start Date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />
        <br />
        <label for="fname">Event End Date:</label>
        <input
          type="date"
          placeholder="Event End Date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        />
        <br />
        <label for="fname">Event Type:</label>
        <select
          value={eventType}
          onChange={(e) => setEventType(e.target.value)}
        >
          <option value="Birthday">Birthday Event</option>
          <option value="Fresher Party">Fresher Party Event</option>
          <option value="Marraige">Marraige Event</option>
        </select>
        <br />
        <label for="fname">Event Status:</label>
        <select value={isActive} onChange={(e) => setIsActive(e.target.value)}>
          <option value="Active">Active</option>
          <option value="In Active">In-Active</option>
        </select>
        <br />
        <label for="fname">Event Image:</label>
        <input
          type="file"
          value={eventImage}
          onChange={(e) => setEventImage(e.target.value)}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
      <br />
      <h1>Event List</h1>
      {eventList.length ? (
        <table className="center">
          <tr>
            <th>Event Name</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Event Type</th>
            <th>Event Status</th>
            <th>Delete</th>
            
          </tr>
          {eventList.map((value, key) => {
            return (
              <tr key={key}>
                <td>{value.name}</td>
                <td>{value.startDate}</td>
                <td>{value.endDate}</td>
                <td>{value.eventType}</td>
                <td>{value.eventStatus}</td>
                <td>
                  <button onClick={() => handleDelete(key)}>Delete</button>
                </td>
              </tr>
            );
          })}
        </table>
      ) : (
        <h3>You dont have any event yet....</h3>
      )}
    </div>
  );
}

export default Event;
