function Footer() {
  return (
    <footer className="bg-dark text-light pt-4 pb-2 mt-5">
      <div className="container">
        <div className="row">
          {/* Brand / About Section */}
          <div className="col-md-6 mb-3">
            <h5 className="fw-normal">MeetUp</h5>
            <p className="lead fs-6 text-light">
              Discover and join exciting online & offline events near you.
              Connect, learn, and grow with the community.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-6 mb-3">
            <h6 className="fw-normal">Quick Links</h6>
            <ul className="list-unstyled lead fs-6">
              <li>
                <a href="/" className="text-light text-decoration-none">
                  Home
                </a>
              </li>
              <li>
                <a href="/" className="text-light text-decoration-none">
                  About Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-light" />

        {/* Copyright */}
        <div className="text-center lead fs-6 text-light pb-2">
          &copy; {new Date().getFullYear()} MeetUp Events | All Rights Reserved
        </div>
      </div>
    </footer>
  );
}

export default Footer;
