import React from 'react';
import 'uicomponents/LitButton';
import { Link } from 'react-router-dom';

const Signup = ({ children }) => {

  return (
    <>
      <h1>Sign up now</h1>
      <p>
        This is a Lit Button
      </p>
      <my-button title="Submit"></my-button>
      <br />
      <br />
      <Link to="/">Back to homepage</Link>
    </>
  );
};

export default Signup;