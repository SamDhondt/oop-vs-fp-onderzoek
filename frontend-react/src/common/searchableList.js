import React from 'react';
import PropTypes from 'prop-types';
import { useInputValue } from './utils';

const SearchableList = ({
  items,
  filterPredicate: compareTo,
  renderItem,
  filterPlaceholder
}) => {
  const filter = useInputValue('');
  const compareToFilter = compareTo(filter.value);

  return (
    <div>
      <input {...filter} type="text" placeholder={filterPlaceholder} />
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
