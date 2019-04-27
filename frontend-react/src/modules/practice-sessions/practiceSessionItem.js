import React from 'react';
import PropTypes from 'prop-types';

const practiceSessionItem = ({ tempo, duration }) => (
  <span> {`tempo: ${tempo} - duration: ${duration}`}</span>
);

practiceSessionItem.propTypes = {
  tempo: PropTypes.number.isRequired,
  duration: PropTypes.string.isRequired
};

export default practiceSessionItem;
