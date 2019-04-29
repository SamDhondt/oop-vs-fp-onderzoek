import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { handleChange } from './utils/index';

const SearchableList = ({
  items,
  filterPredicate: compareTo,
  renderItem,
  filterPlaceholder
}) => {
  const [filter, setFilter] = useState('');
  const compareToFilter = compareTo(filter);

  return (
    <div>
      <input
        type="text"
        onChange={handleChange(setFilter)}
        value={filter}
        placeholder={filterPlaceholder}
      />
      <ul>
        {items.filter(({ name }) => compareToFilter(name)).map(renderItem)}
      </ul>
    </div>
  );
};

SearchableList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string
    })
  ).isRequired,
  filterPlaceholder: PropTypes.string,
  filterPredicate: PropTypes.func.isRequired
};

SearchableList.defaultProps = {
  filterPlaceholder: ''
};

export default SearchableList;
