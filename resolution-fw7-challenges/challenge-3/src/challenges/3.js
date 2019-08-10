const { fruits } = require("../db")

const filteredFruits = fruits.reduce((accumulator, fruit) => {
  return accumulator.indexOf(fruit) !== -1
    ? [...accumulator]
    : [...accumulator, fruit]
}, [])

console.log(filteredFruits)
