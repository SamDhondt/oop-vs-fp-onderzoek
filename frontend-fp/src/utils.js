export const sequence = (...functions) => {
  const [first, ...rest] = functions;
  return (...args) => rest.reduce((res, fn) => fn(res), first(args));
};

export const getItemNodes = mapFn => items => items.map(mapFn);

export const appendToDOMElement = element => items => {
  element.innerHTML = '';

  items.forEach(item => {
    element.appendChild(item);
  });
};

export const filterList = filter => list =>
  list.filter(item => item.name.indexOf(filter) >= 0);

export const getTimeString = start => end => {
  const totalInSeconds = Math.floor((end - start) / 1000);
  const minutes = Math.floor(totalInSeconds / 60);
  const seconds = totalInSeconds % 60;
  return `${minutes}m ${seconds}s`;
};
