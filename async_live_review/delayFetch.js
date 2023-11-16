const { todo } = require("node:test");

function delayFetcher(url, count) {
    return new Promise((res, rej) => {
      if (count % 5 === 0) {
        setTimeout(() => {
          fetch(url)
            .then((response) => {
              if (!response.ok) {

                rej(`error! Status: ${response.status}`);
              }
              return response.json();
            })
            .then((data) => res(data))
            .catch((error) => rej(error));
        }, 1000); 
      } else {
        fetch(url)
          .then((response) => {
            if (!response.ok) {
                rej(`error! Status: ${response.status}`);
            }
            return response.json();
          })
          .then((data) => res(data))
          .catch((error) => rej(error));
      }
    });
  }
  
  async function fetchData(){

    for (let i = 1; i <= 15; i++) {
      const url = `http://localhost:3000/todos?user_id=${i}`;
      try {
        const todo = await delayFetcher(url, i);
        console.log(todo);
      } catch (error) {
        console.error(error);
      }
    }
    return todo
  };


  
module.exports  =  fetchData;


  