import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, ButtonGroup, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function Header() {
  const nameHeader = ["president", "states"];

  return (
    <Container className=" text-center mt-2">
      {nameHeader.map((name, index) => (
        <Link key={index} to={`/${name}`}>
          <button type="button" className=" btn mx-2 font-semibold capitalize">
            {name}
          </button>
        </Link>
      ))}
      <Link to={`/${`state-details`}`}>
        <button type="button" className="btn  mx-2 font-semibold">
          State Details
        </button>
      </Link>
    </Container>
  );
}

export default Header;
