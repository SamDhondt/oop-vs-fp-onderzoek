/**
 * Compares one string (the filter) to another (the input) using the indexOf function
 * @param {string} filter The string to filter on
 * @returns The boolean result of the indexOf method
 */
export const compareTo = filter => input => input.indexOf(filter) >= 0;

/**
 * Sets a value using the provided setter with a new value extracted from an event
 * @param {Function} setValue
 */
export const handleChange = setValue => ({ target: { value: newValue } }) => {
  setValue(newValue);
};

export const removeFrom = list => setList => itemId =>
  setList(list.filter(({ id }) => itemId !== id));
