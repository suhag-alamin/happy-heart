import React from "react";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router";
import error from "../../images/404 Error Page not Found .gif";

const PageNotFound = () => {
  // handle button click
  const history = useHistory();
  const handleClick = () => {
    history.push("/");
  };
  return (
    <div className="text-center">
      <img src={error} alt="" />
      <div>
        <Button onClick={handleClick} className="happy-btn btn-danger">
          Go Back to Home
        </Button>
      </div>
    </div>
  );
};

export default PageNotFound;
