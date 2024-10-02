import React from 'react';
import ReactDom from 'react-dom';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import Homepage from './src/Homepage';

const App = () => {
    const router = createHashRouter([
        {
          path: "/",
          element: <Homepage />,
        },
      ]);
    return (
        <RouterProvider router={router} />
    );
};

ReactDom.render(<App />, document.getElementById('app'));