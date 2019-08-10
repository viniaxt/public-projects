const { product } = require("../db")

const productsInStockBySize = product.colors
  .reduce((accumulator, color) => [...accumulator, ...color.sizes], [])
  .reduce((accumulator, sizeStock) => {
    const previousIndex = accumulator.findIndex(
      sizeAccumulator => sizeAccumulator.size === sizeStock.size
    )

    if (previousIndex !== -1) {
      accumulator[previousIndex].stock += sizeStock.stock
    } else {
      accumulator[accumulator.length] = sizeStock
    }

    return [...accumulator]
  }, [])

console.log(productsInStockBySize)
