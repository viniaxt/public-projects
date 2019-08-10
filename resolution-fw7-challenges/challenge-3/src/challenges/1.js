const { colors } = require("../db")

const availableColors = colors.reduce((accumulator, color) => {
  const classification = color.isAvailable ? "available" : "unAvailable"

  const values = [...(accumulator[`${classification}`] || []), color]

  return {
    ...accumulator,
    [classification]: values
  }
}, {})

console.log(availableColors)
