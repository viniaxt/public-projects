const { words } = require("../db")

const palydromWords = words.filter(
  word =>
    Array.from(word.toLowerCase())
      .reverse()
      .join("") === word.toLowerCase()
)

console.log(palydromWords)
