import React from 'react';

const RudimentListItem = ({ id, name, sticking }) => (
  <li key={id}>{`${name}: ${sticking}`}</li>
);

export default RudimentListItem;
