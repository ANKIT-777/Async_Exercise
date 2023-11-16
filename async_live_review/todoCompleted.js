const fetchData = require('./delayFetch.js');

async function todoCounter() {
  try {
    const data = await fetchData();

    data.forEach((userTodos, index) => {
        const userId = index + 1;
        const userName = `User ${userId}`;
        let numTodosCompleted = 0;
      
        userTodos.todos.forEach((todo) => {
          if (todo.isCompleted) {
            numTodosCompleted++;
          }
        });
      
        userData.push({
            id: userId,
            name: userName,
            numTodosCompleted: numTodosCompleted,
          });        
    });

    console.log(userData);

  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

todoCounter();
