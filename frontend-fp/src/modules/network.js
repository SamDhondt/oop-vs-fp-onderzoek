export const get = async url => {
  const response = await fetch(url);
  return response.json();
};

export const post = url => async body => {
  const response = await fetch(url, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  });
  return response.json();
};

export const deleteRequest = url => fetch(url, { method: 'delete' });
