import React from "react";
import PropTypes from 'prop-types'

const Theme = ({ handleThemeChange }) => {
  return (
    <>
      <select onChange={handleThemeChange}>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
      </select>
    </>
  );
};

Theme.propTypes = {
  handleThemeChange: PropTypes.func.isRequired
}


export default Theme;
