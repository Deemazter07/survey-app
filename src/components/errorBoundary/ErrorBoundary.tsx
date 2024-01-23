import "./errorBoundary.scss";

import { Link } from "react-router-dom";

function ErrorBoundary() {
  return (
    <div className="main">
      <div className="container">
        <div>
          <h1>Uh oh! Looks like you found nothing here.</h1>
          <br />
          Go back to the homepage if you dare!
        </div>
        <div>
          <Link className="btn" to={"/"}>
            Go Homepage
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ErrorBoundary;
