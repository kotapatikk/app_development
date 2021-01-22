import React, { useEffect } from "react";
import "./404.css";
import { withRouter } from "react-router-dom";
import { HOME_CONNECT } from "../../../utilities/constants";


export const NoMatch = ({ history }) => {
  useEffect(() => {
    const timer = setTimeout(() => history && history.push(HOME_CONNECT), 1500);
    return () => clearTimeout(timer);
  }, [history]);

  return (
    <div className="error-no-match-container">
      <p> 404 Error - Page Not Found </p>
      <p> the page you were looking for cannot be found </p>
    </div>
  );
};

export default withRouter(NoMatch)