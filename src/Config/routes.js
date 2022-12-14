import React from "react";
import Login from "../Pages/Login/";
import PageNotFound from "../Pages/NotFound";

const routes = [
  {
    path: "/",
    element: <Login />,
    isPrivate: false
  },
  {
    path: "/*",
    element: <PageNotFound />,
    isPrivate: true
  },
];

export default routes;