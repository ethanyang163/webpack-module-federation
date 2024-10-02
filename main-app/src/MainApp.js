import React from 'react';
import Signup from 'signup/Signup';
import Homepage from 'homepage/Homepage';
import {
    RouterProvider,
    createHashRouter
  } from "react-router-dom";

const MainApp = ({ children }) => {
    const router = createHashRouter([
        {
          path: "/",
          element: <Homepage />,
        },
        {
            path: "/signup",
            element: <Signup />,
          },
      ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default MainApp;
