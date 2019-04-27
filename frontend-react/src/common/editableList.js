import React from 'react';
import PropTypes from 'prop-types';

const EditableList = ({ items, ItemComponent, onRemove }) => {
  return (
    <div>
      <ul>
        {items.map(({ id, ...itemProps }) => (
          <li key={id}>
            <ItemComponent {...itemProps} />
            <button onClick={() => onRemove(id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

EditableList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number
    })
  ).isRequired,
  ItemComponent: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired
};

export default EditableList;
