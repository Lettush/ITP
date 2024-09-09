// Components = sections of the page with separate functionality or elements + they are reusable
import React from 'react';

const Welcome = ({ name }) => {
  return (
    <p>Welcome, {name}!</p>
  )
}

export default Welcome;