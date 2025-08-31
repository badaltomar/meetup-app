import { useParams } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import useFetch from "../useFetch";
import "bootstrap-icons/font/bootstrap-icons.css";

const MainEventData = () => {
  const eventId = useParams();
  // console.log(eventId);

  const eventAPIurlById = `https://meetup-app-backend-six.vercel.app/eventDetails/${eventId.eventId}`;
  const { data, loading, error } = useFetch(eventAPIurlById);

  // if (data) {
  //     console.log(data);

  // }

  return (
    <main className="container py-4">
      {data ? (
        <>
          <div className="row">
            <div className="col-md-6">
              <h1 className="fw-normal mb-3">{data.title}</h1>
              <div>Hosted By:</div>
              <h5 className="fw-normal my-1 pb-3">{data.hostedBy}</h5>
              <img
                className="img-fluid rounded shadow-sm"
                src={data.imageUrl}
                alt={`${data.title} Image`}
              />
              <br />
              <br />
              <h5>Details:</h5>
              <p className="lead ">{data.details}</p>

              <div style={{ cursor: "default" }} className="py-4">
                <h5>Additional Information:</h5>
                <p className="mb-2 pt-1">
                  <b className="fw-semibold">Dress Code: </b>
                  {data.dressCode}
                </p>
                <p>
                  <b className="fw-semibold">Age Restrictions: </b>
                  {data.ageRestrictions} and above
                </p>
                <br />
                <h5>Event Tags: </h5>
                {data.eventTags.map((tag) => (
                  <span
                    style={{
                      backgroundColor: "#f65858ff",
                      cursor: "pointer",
                      userSelect: "none",
                    }}
                    key={tag}
                    className="badge rounded-pill me-3 my-1 p-2 px-3"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="col-md-1"></div>
            <div className="col-md-5 mt-3">
              <div
                style={{ cursor: "default" }}
                className="bg-white shadow-sm rounded p-4 ps-5"
              >
                <div className="position-relative">
                  <i className="bi bi-clock position-absolute top-50 start-0 translate-middle "></i>
                  <p className="ps-4">
                    {" "}
                    {data.eventStart} to <br /> {data.eventEnd}{" "}
                  </p>
                </div>
                <div className="position-relative">
                  <i className="bi bi-geo-alt position-absolute top-50 start-0 translate-middle "></i>
                  <p className="ps-4"> {data.location} </p>
                </div>
                <div className="position-relative">
                  <i className="bi bi-currency-rupee position-absolute top-50 start-0 translate-middle "></i>
                  <p className="ps-4"> {data.price}/- </p>
                </div>
              </div>
              <br />
              <div>
                <h3 className="fw-normal py-2">{`Speakers (${data.speakers.length})`}</h3>
                <div className="row">
                  {data.speakers.map((spkr) => (
                    <div key={spkr._id} className="col-md-6">
                      <div
                        style={{ cursor: "default", userSelect: "none" }}
                        className="card bg-light-subtle mb-3 p-3 shadow-sm"
                      >
                        <div className="text-center">
                          <img
                            src={spkr.speakerImageUrl}
                            alt={spkr.speakerName}
                            className="img-fluid rounded-circle"
                            height={100}
                            width={100}
                          />
                        </div>
                        <div className="text-center mt-2">
                          <h5 className="fw-normal">{spkr.speakerName}</h5>
                          <small>{spkr.speakerRole}</small>
                        </div>
                      </div>
                    </div>
                  ))}

                  <div className="position-relative">
                    <div className="position-absolute top-50 start-50 translate-middle">
                      <br />
                      <br />
                      <br />
                      <button
                        className="btn text-light px-5"
                        style={{ backgroundColor: "#f65858ff" }}
                      >
                        RSVP
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        loading && (
          <>
            <p
              className="text-center lead fw-normal text-secondary alert alert-secondary"
              role="alert"
            >
              Loading Event Details...
            </p>
            <br />
            <div className="d-flex justify-content-center">
              <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          </>
        )
      )}
    </main>
  );
};

function EventDetails() {
  return (
    <div className="bg-body-tertiary">
      <Header />
      <MainEventData />
      <Footer />
    </div>
  );
}

export default EventDetails;
