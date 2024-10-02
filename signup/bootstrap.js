import React from 'react';
import ReactDom from 'react-dom';
import Signup from './src/Signup';
import {
    RouterProvider,
    createHashRouter
  } from "react-router-dom";

const App = () => {

    const router = createHashRouter([
        {
            path: "*",
            element: <Signup />,
          },
      ]);

    return (
        <RouterProvider router={router} />
    );
};

ReactDom.render(<App />, document.getElementById('app'));