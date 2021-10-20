import React from "react";
import { Link, NavLink } from "react-router-dom";

const ServiceLink = ({ name, id }) => {
  return (
    <>
      <li>
        <NavLink activeClassName="selected" to={`/services/${id}`}>
          {name}
        </NavLink>
      </li>
    </>
  );
};

export default ServiceLink;
