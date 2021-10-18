import React from "react";
import { Link } from "react-router-dom";

const ServiceLink = ({ name, id }) => {
  return (
    <>
      <li>
        <Link to={`/services/${id}`}>{name}</Link>
      </li>
    </>
  );
};

export default ServiceLink;
