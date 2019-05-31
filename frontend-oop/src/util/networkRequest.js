export default class NetworkRequest {
  static get(url) {
    return new Promise((resolve, reject) => {
      const req = new XMLHttpRequest();
      req.open('get', url, true);
      req.responseType = 'json';
      req.onload = () => {
        if (req.status === 200) {
          resolve(req.response);
        } else {
          reject(req.status);
        }
      };
      req.send(null);
    });
  }

  static delete(url) {
    return new Promise((resolve, reject) => {
      const req = new XMLHttpRequest();
      req.open('delete', url, true);
      req.responseType = 'json';
      req.onload = () => {
        if (req.status === 200) {
          resolve(req.response);
        } else {
          reject(req.status);
        }
      };
      req.send(null);
    });
  }

  static post(url) {
    return new Promise((resolve, reject) => {
      const req = new XMLHttpRequest();
      req.open('post', url, true);
      req.responseType = 'json';
      req.onload = () => {
        if (req.status === 200) {
          resolve(req.response);
        } else {
          reject(req.status);
        }
      };
      req.send(null);
    });
  }
}
