import { useState } from 'react';

/**
 * Compares one string (the filter) to another (the input) using the indexOf function
 * @param {string} filter The string to filter on
 * @returns The boolean result of the indexOf method
 */
export const compareTo = filter => input => input.indexOf(filter) >= 0;

/**
 * Custom hook to use with form input values so the setter gets used with the value
 * extracted from event.target.value
 * @param {any} initialValue An intitial value to pass to setState
 */
export const useInputValue = initialValue => {
  const [value, setValue] = useState(initialValue);
  const setValueFromEvent = event => setValue(event.target.value);

  return {
    value,
    onChange: setValueFromEvent
  };
};

/**
 * This is a temporary method to be removed when backend is set up
 * @param {any} list
 */
export const removeFrom = list => setList => itemId =>
  setList(list.filter(({ id }) => itemId !== id));
