import React from 'react';
import PropTypes from 'prop-types';

const EditableList = ({
  items,
  ItemComponent,
  onRemove,
  onReset,
  placeholder
}) => {
  return items.length === 0 ? (
    <p>{placeholder}</p>
  ) : (
    <div>
      <ul>
        {items.map(({ id, ...itemProps }) => (
          <li key={id}>
            <ItemComponent {...itemProps} />
            <button onClick={() => onRemove(id)}>Remove</button>
          </li>
        ))}
      </ul>
      <button onClick={onReset}>Reset</button>
    </div>
  );
};

EditableList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number
    })
  ).isRequired,
  placeholder: PropTypes.string,
  ItemComponent: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
  onReset: PropTypes.func.isRequired
};

export default EditableList;
