const { animals } = require("../db")

const animalsWithPanda = [...animals]
  .slice(0, 1)
  .concat(["Panda"], [...animals.slice(1, animals.length)])

console.log("Animals with panda => ", animalsWithPanda)
console.log("Animals without panda => ", animals)
