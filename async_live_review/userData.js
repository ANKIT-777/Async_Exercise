function urlFetcher(url) {
    return new Promise((res, rej) => {
      fetch(url)
        .then((response) => {
          if (!response.ok) {
            console.log(`The error in this code is ${response.status}`);
            rej(`HTTP error! Status: ${response.status}`);
          }
          return response.json();
        })
        .then((data) => res(data))
        .catch((error) => rej(error));
    });
  }

  module.exports = urlFetcher