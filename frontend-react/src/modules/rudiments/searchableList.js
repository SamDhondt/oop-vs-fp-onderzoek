import React, { useState } from 'react';
import PropTypes from 'prop-types';
import handleChange from '../../common/utils/handleChange';

const SearchableList = ({ rudiments }) => {
  const [filter, setFilter] = useState('');

  return (
    <div>
      <input type="text" onChange={handleChange(setFilter)} value={filter} />
      <ul>
        {rudiments
          .filter(({ name }) => name.indexOf(filter) >= 0)
          .map(({ name }) => (
            <li key={name}>{name}</li>
          ))}
      </ul>
    </div>
  );
};

SearchableList.propTypes = {
  rudiments: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string
    })
  ).isRequired
};

export default SearchableList;
