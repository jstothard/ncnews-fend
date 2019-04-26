import React from "react";
import PropTypes from "prop-types";

const ErrorHandling = props => {
  return (
    <div>
      <h1 className="h1-responsive">Error!</h1>
      <h3 className="h3-responsive">
        This is not the page you are looking for...
      </h3>
    </div>
  );
};

ErrorHandling.propTypes = {};

export default ErrorHandling;
