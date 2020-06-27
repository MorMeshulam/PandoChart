import React from "react";
import { Spinner } from "react-bootstrap";

const Loader = ({ children }) => {
  return (
    <>
      <Spinner animation="grow" />
      <p>{children}</p>
    </>
  );
};

export default Loader;
