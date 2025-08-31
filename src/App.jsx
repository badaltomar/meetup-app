import Footer from "./components/Footer";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import useFetch from "./useFetch";
import { useState } from "react";
import { Link } from "react-router-dom";

const MainData = ({ searchTerm }) => {
  const eventsAPIurl = "https://meetup-app-backend-six.vercel.app/events";
  const { data, loading, error } = useFetch(eventsAPIurl);

  const [eventTypeValue, setEventTypeValue] = useState("All");

  const handleEventType = (event) => {
    setEventTypeValue(event.target.value);
  };

  const filteredEvents =
    data && data.length > 0
      ? data.filter((evt) => {
          const matchesEventType =
            eventTypeValue === "All" || evt.eventType === eventTypeValue;

          const matchesSearch =
            evt.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            (evt.eventTags &&
              evt.eventTags
                .join(" ")
                .toLowerCase()
                .includes(searchTerm.toLowerCase()));

          return matchesEventType && matchesSearch;
        })
      : [];

  return (
    <main className="container py-4">
      <div className="row pe-1 ">
        <div className="col-md-10">
          <h1 className="fw-normal">MeetUp Events</h1>
          <br />
        </div>
        <div className="col-md-2">
          <select
            onChange={handleEventType}
            className="form-select text-secondary shadow-sm mb-3"
          >
            <option value="All">Select Event Type</option>
            <option value="All">All</option>
            <option value="Online Event">Online Event</option>
            <option value="Offline Event">Offline Event</option>
          </select>
        </div>
      </div>

      {loading ? (
        <>
          <p
            className="text-center lead fw-normal text-dark alert alert-dark"
            role="alert"
          >
            Loading Events...
          </p>
          <br />
          <div className="d-flex justify-content-center">
            <div className="spinner-border" role="status"></div>
          </div>
        </>
      ) : error ? (
        <p className="text-center text-danger fw-semibold">
          Failed to fetch events. Please try again later.
        </p>
      ) : filteredEvents.length === 0 ? (
        <p className="text-center text-muted fs-5 mt-4">
          ❌ No events found matching your search or tags.
        </p>
      ) : (
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {filteredEvents.map((event) => (
            <div key={event._id} className="col">
              <Link
                to={`/eventDetails/${event._id}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <div className="card h-100">
                  <img
                    src={event.imageUrl}
                    className="card-img-top"
                    alt={`${event.title} Image`}
                  />
                  <div className="position-absolute top-0 start-0 m-3 bg-white text-dark px-2 py-1 rounded shadow-sm small">
                    {event.eventType}
                  </div>
                  <div className="card-body py-2">
                    <small className="card-text text-body-secondary">
                      {event.eventStart} IST
                    </small>

                    <h5 className="card-title fw-normal pt-1">{event.title}</h5>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      )}
      <br />
      <br />
    </main>
  );
};

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="bg-body-tertiary">
      <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <MainData searchTerm={searchTerm} />
      <Footer />
    </div>
  );
}

export default App;
