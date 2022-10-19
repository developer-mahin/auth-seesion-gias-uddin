import React from "react";
import { useRouteError } from "react-router-dom";
import Header from "../Header/Header";

const Error = () => {
  const error = useRouteError();
  return (
    <div>
      <Header></Header>
      <h1>{error.status}</h1>
      <p className="text-danger">{error.statusText}</p>
    </div>
  );
};

export default Error;
