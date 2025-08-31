import { useLocation } from "react-router-dom";

function Header({ searchTerm, setSearchTerm }) {
  const location = useLocation();

  // Check if we are on details page
  const isDetailsPage = location.pathname.startsWith("/eventDetails");

  return (
    <header className="sticky-top">
      <nav className="navbar bg-body-secondary p-3 px-4">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img src="/images/Meetup.svg" alt="" height={40} />
          </a>
          {!isDetailsPage && (
            <input
              style={{ minWidth: "300px" }}
              className="form-control w-25 me-2"
              type="search"
              placeholder="Search by title and tags..."
              aria-label="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          )}
        </div>
      </nav>
    </header>
  );
}

export default Header;
