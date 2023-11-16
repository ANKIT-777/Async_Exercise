const { error } = require("console");
const { response } = require("express");
const fetch = require("node-fetch");
const urlFetcher = require('./userData.js')


async function userData(){
  const url = `http://localhost:3000/users`
  const userData = await urlFetcher(url)
  console.log(userData);
  
}



async function main() {
  const response = await fetch("http://localhost:3000/todos?user_id=2");
  const data = await response.json();
  console.log(data)  
}
main();


