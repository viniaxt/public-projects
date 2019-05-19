/**
 * Ideia: realizar o balanceamento de equações quimicas a partir de
 *        dados fornecidos pelo usuario
 */

/**
 * Como fazer?
 * padronizar a escrita do usuario, utilizando uma boa experiencia
 * para o usuario
 *
 * Sera utilizado JS
 */

const firstReagent = "K2Cr2O7"
const secondReagent = "KOH"
const first = transformToArray(firstReagent)
const second = transformToArray(secondReagent)

var firstClean = Object.assign([], first)
var secondClean = Object.assign([], second)

const firstProduct = "K2CrO4"
const secondProduct = "H2O"
const firstResult = transformToArray(firstProduct)
const secondResult = transformToArray(secondProduct)

const firstResultClean = Object.assign([], firstResult)
const secondResultClean = Object.assign([], secondResult)

const reagent = reducing(first, second)
const product = reducing(firstResult, secondResult)

var resultReagent = new Array()
var resultProduct = new Array()

numbering(reagent, product)
const result = balance(resultReagent, resultProduct)
console.log(result)

function transformToArray(element) {
  const elementLength = element.length // 3
  const transformedArray = []
  let index = 0
  for (; index < elementLength; index++) {
    const actualCharacter = element.charAt(index) // "A" or "1"
    const verifyActualElement = Number(actualCharacter)

    const characterBefore = element.charAt(index - 1)
    const verifyBeforeElement = isNaN(Number(characterBefore))

    const characterAfter = element.charAt(index + 1)
    const verifyAfterElement = isNaN(Number(characterAfter))

    if (isNaN(verifyActualElement)) {
      // treatment for string
      if (index == 0) {
        if (
          verifyAfterElement &&
          characterAfter == characterAfter.toLowerCase() &&
          index + 2 >= elementLength
        ) {
          const total = actualCharacter + characterAfter
          transformedArray.push(total)
        }
        if (
          verifyAfterElement &&
          characterAfter == characterAfter.toUpperCase()
        ) {
          const total = actualCharacter
          transformedArray.push(total)
        }
        if (verifyAfterElement && index + 2 < elementLength) {
          const characterAfterAfter = element.charAt(index + 2)
          const verifyAfterAfterElement = isNaN(Number(characterAfterAfter))
          if (
            verifyAfterAfterElement &&
            characterAfter != characterAfter.toUpperCase()
          ) {
            const total = actualCharacter + characterAfter
            transformedArray.push(total)
          }
        }
      }

      if (
        index == elementLength - 1 &&
        actualCharacter == actualCharacter.toUpperCase()
      ) {
        const total = actualCharacter
        transformedArray.push(total)
      }

      if (index != 0 && index != elementLength - 1) {
        if (element.charAt(index + 2)) {
          if (
            !verifyBeforeElement &&
            verifyAfterElement &&
            isNaN(Number(element.charAt(index + 2)))
          ) {
            if (characterAfter == characterAfter.toLowerCase()) {
              const total = actualCharacter + characterAfter
              transformedArray.push(total)
            } else {
              const total = actualCharacter
              transformedArray.push(total)
            }
          }
        } else {
          if (!verifyBeforeElement && verifyAfterElement) {
            if (characterAfter == characterAfter.toLowerCase()) {
              const total = actualCharacter + characterAfter
              transformedArray.push(total)
            } else {
              const total = actualCharacter
              transformedArray.push(total)
            }
          }
        }

        if (
          verifyBeforeElement &&
          verifyAfterElement &&
          actualCharacter == actualCharacter.toUpperCase()
        ) {
          if (
            characterBefore == characterBefore.toLowerCase() &&
            characterAfter == characterAfter.toLowerCase()
          ) {
            // lower actual lower
            if (index + 2 < elementLength) {
              const characterAfterAfter = element.charAt(index + 2)
              const verifyAfterAfterElement = isNaN(Number(characterAfterAfter))
              if (verifyAfterAfterElement) {
                const total = actualCharacter + characterAfter
                transformedArray.push(total)
              }
            } else {
              const total = actualCharacter + characterAfter
              transformedArray.push(total)
            }
          }

          if (
            characterBefore == characterBefore.toUpperCase() &&
            characterAfter == characterAfter.toUpperCase()
          ) {
            // upper actual upper
            const total = actualCharacter
            transformedArray.push(total)
          }

          if (
            characterBefore == characterBefore.toLowerCase() &&
            characterAfter == characterAfter.toUpperCase()
          ) {
            // lower actual upper
            const total = actualCharacter
            transformedArray.push(total)
          }

          if (
            characterBefore == characterBefore.toUpperCase() &&
            characterAfter == characterAfter.toLowerCase()
          ) {
            // upper actual lower
            if (index + 2 < elementLength) {
              const characterAfterAfter = element.charAt(index + 2)
              const verifyAfterAfterElement = isNaN(Number(characterAfterAfter))
              if (verifyAfterAfterElement) {
                const total = actualCharacter + characterAfter
                transformedArray.push(total)
              }
            } else {
              const total = actualCharacter + characterAfter
              transformedArray.push(total)
            }
          }
        }
      }
    }
    if (!isNaN(verifyActualElement) && index != 0) {
      // treatment for number

      if (verifyBeforeElement) {
        // we are where we want to be...
        if (characterBefore == characterBefore.toLowerCase()) {
          const characterBeforeBefore = element.charAt(index - 2)
          const total =
            characterBeforeBefore + characterBefore + actualCharacter
          transformedArray.push(total)
        } else {
          const total = characterBefore + actualCharacter
          transformedArray.push(total)
        }
      }
    }
  }
  return transformedArray
}

// function for comparing reagent and products
function reducing(first, second) {
  const result = new Array()
  let i = 0
  for (; i < first.length; i++) {
    const acc = first[i]
    second.forEach((secondElement, secondIndex) => {
      const actual = secondElement
      if (acc[0] == actual[0]) {
        if (acc.length == 1 && actual.length == 1) {
          const total = acc + "2"
          result.push(total)
          second.splice(secondIndex, 1)
          first.splice(i, 1)
          i -= 1
        }
        if (
          acc.length == 1 &&
          actual.length == 2 &&
          !isNaN(Number(actual[1])) // false if number
        ) {
          const total = acc[0] + `${parseInt(actual[1]) + 1}`
          result.push(total)
          second.splice(secondIndex, 1)
          first.splice(i, 1)
          i -= 1
        }
        if (acc.length == 2 && actual.length == 1 && !isNaN(Number(acc[1]))) {
          const total = acc[0] + `${parseInt(acc[1]) + 1}`
          result.push(total)
          second.splice(secondIndex, 1)
          first.splice(i, 1)
          i -= 1
        }
        if (
          acc.length == 2 &&
          actual.length == 2 &&
          !isNaN(Number(acc[1])) &&
          !isNaN(Number(actual[1])) // need to be number
        ) {
          const total = acc[0] + `${parseInt(actual[1]) + parseInt(acc[1])}`
          result.push(total)
          second.splice(secondIndex, 1)
          first.splice(i, 1)
          i -= 1
        }
        if (
          acc.length == 2 &&
          actual.length == 2 &&
          isNaN(Number(acc[1])) && // need to be string
          isNaN(Number(actual[1]))
        ) {
          const total = acc + "2"
          result.push(total)
          second.splice(secondIndex, 1)
          first.splice(i, 1)
          i -= 1
        }
        if (
          acc.length == 2 &&
          actual.length == 3 &&
          isNaN(Number(acc[1])) // need to be string
        ) {
          const total = acc + `${parseInt(actual[2]) + 1}`
          result.push(total)
          second.splice(secondIndex, 1)
          first.splice(i, 1)
          i -= 1
        }
        if (acc.length == 3 && actual.length == 2 && isNaN(Number(actual[1]))) {
          const total = actual + `${parseInt(acc[2] + 1)}`
          result.push(total)
          second.splice(secondIndex, 1)
          first.splice(i, 1)
          i -= 1
        }
        if (acc.length == 3 && actual.length == 3) {
          const total =
            acc[0] + acc[1] + `${parseInt(acc[2] + parseInt(actual[2]))}`
          result.push(total)
          second.splice(secondIndex, 1)
          first.splice(i, 1)
          i -= 1
        }
      }
    })
  }
  const completed = result.concat(first, second).sort()
  return completed
}

function numbering(reducedReagent, reducedProduct) {
  let i = 0
  console.log("REAGENT: " + reducedReagent)
  console.log("PRODUCT: " + reducedProduct)
  resultReagent.splice(0, resultReagent.length)
  resultProduct.splice(0, resultProduct.length)
  if (reducedReagent.length != reducedProduct.length) {
    console.log("Reduced reagent: " + reducedReagent)
    console.log("Reduced product: " + reducedProduct)
    return console.log("Sorry, but it's impossible to balance wrong equations")
  }
  for (; i < reducedReagent.length; i++) {
    const reagentAtom = reducedReagent[i]
    const productAtom = reducedProduct[i]

    const verifyLastValueOfReagent = isNaN(
      Number(reagentAtom[reagentAtom.length - 1])
    )
    const verifyLastValueOfProduct = isNaN(
      Number(productAtom[productAtom.length - 1])
    ) // false if number

    // max diff between length is 1 point
    if (reagentAtom.length - productAtom.length == 1) {
      const totalReagent = parseInt(reagentAtom[reagentAtom.length - 1])
      const totalProduct = 1
      resultReagent.push(totalReagent)
      resultProduct.push(totalProduct)
    }
    if (reagentAtom.length - productAtom.length == 0) {
      if (verifyLastValueOfReagent && verifyLastValueOfProduct) {
        const totalReagent = 1
        const totalProduct = 1
        resultReagent.push(totalReagent)
        resultProduct.push(totalProduct)
      }
      if (!verifyLastValueOfReagent && !verifyLastValueOfProduct) {
        const totalReagent = parseInt(reagentAtom[reagentAtom.length - 1])
        const totalProduct = parseInt(productAtom[productAtom.length - 1])
        resultReagent.push(totalReagent)
        resultProduct.push(totalProduct)
      }
    }
    if (reagentAtom.length - productAtom.length == -1) {
      const totalReagent = 1
      const totalProduct = parseInt(productAtom[productAtom.length - 1])
      resultReagent.push(totalReagent)
      resultProduct.push(totalProduct)
    }
  }
  const completed = resultReagent.concat("kk eae men", resultProduct)
  return completed
}

function balance(numberOfReagentAtoms, numberOfProductAtoms) {
  var resultFirstReagent = 1 // H3PO4 => 1H3PO4
  var resultSecondReagent = 1 // NaOH => 3NaOH
  var resultFirstProduct = 1 // Na3PO4 => 1Na3PO4
  var resultSecondProduct = 1 // H2O => 3 H2O

  var newFirstReagent = []
  var newSecondReagent = []
  var newFirstProduct = []
  var newSecondProduct = []

  console.log("CHEGOU NO BALANCE!!")
  // first, we are going to get atomsOfProduct > atomsOfReagent
  for (let i = 0; i < numberOfReagentAtoms.length; i++) {
    const atomsOfReagent = numberOfReagentAtoms[i]
    const atomsOfProduct = numberOfProductAtoms[i]
    console.log("Acc: " + atomsOfReagent + "  Actual: " + atomsOfProduct)
    if (atomsOfReagent < atomsOfProduct) {
      firstClean.forEach(atom => {
        if (atom == reagent[i]) {
          if (atomsOfReagent == 1) {
            newFirstReagent = firstClean.map(e => {
              return e + atomsOfProduct
            })
            resultFirstReagent = atomsOfProduct
          } else {
            if (atomsOfProduct % 2 === 0 && atomsOfReagent % 2 === 0) {
              resultFirstReagent = (atomsOfReagent * atomsOfProduct) / 2
            } else {
              resultFirstReagent = atomsOfReagent * atomsOfProduct
            }
            newFirstReagent = firstClean.map(e => {
              return e[e.length - 1] + resultfirstReagent
            })
          }
        }
      })
      secondClean.forEach(atom => {
        console.log(atom)
        console.log(reagent[i])
        if (atom == reagent[i]) {
          if (atomsOfReagent == 1) {
            resultSecondReagent = atomsOfProduct
            newSecondReagent = secondClean.map(e => {
              return e + resultSecondProduct
            })
          } else {
            if (atomsOfProduct % 2 === 0 && atomsOfReagent % 2 === 0) {
              resultSecondReagent = (atomsOfReagent * atomsOfProduct) / 2
            } else {
              resultSecondReagent = atomsOfReagent * atomsOfProduct
            }
            newSecondReagent = secondClean.map(e => {
              return e[e.length - 1] + resultSecondReagent
            })
          }
        }
      })
    } else {
      if (i < firstClean.length) {
        newFirstReagent.push(firstClean[i])
      }
      if (i < secondClean.length) {
        newSecondReagent.push(secondClean[i])
      }
    }
  }

  console.log("NEW FIRST: " + newFirstReagent)
  console.log("NEW SECOND: " + newSecondReagent)
  const newReagent = reducing(newFirstReagent, newSecondReagent)
  const newProduct = reducing(firstResultClean, secondResultClean)

  console.log(newReagent)
  console.log(newProduct)
  console.log(resultReagent)
  console.log(resultProduct)

  numbering(newReagent, newProduct)

  console.log(resultReagent)
  console.log(resultProduct)

  for (let i = 0; i < resultReagent.length; i++) {
    const atomsOfReagent = resultReagent[i]
    const atomsOfProduct = resultProduct[i]
    console.log("Acc: " + atomsOfReagent + "  Actual: " + atomsOfProduct)
    if (atomsOfReagent > atomsOfProduct) {
      firstResultClean.forEach(atom => {
        if (atom == product[i]) {
          console.log(atom)
          console.log(product[i])
          if (atomsOfProduct == 1) {
            newFirstProduct = firstResultClean.map(e => {
              return e + atomsOfReagent
            })
            resultFirstProduct = atomsOfReagent
          } else {
            if (atomsOfProduct % 2 === 0 && atomsOfReagent % 2 === 0) {
              resultFirstProduct = atomsOfProduct / 2
            } else {
              console.log(atomsOfReagent)
              console.log(atomsOfProduct)
              resultFirstProduct = atomsOfReagent * atomsOfProduct
            }
            newFirstProduct = firstResultClean.map(e => {
              return e[e.length - 1] + resultFirstProduct
            })
          }
        } else {
          newFirstProduct = firstResultClean
        }
      })
      secondResultClean.forEach(atom => {
        if (atom == product[i]) {
          console.log(atom)
          console.log(product[i])
          if (atomsOfProduct == 1) {
            newSecondProduct = secondResultClean.map(e => {
              return e + atomsOfReagent
            })
            resultSecondProduct = atomsOfReagent
          } else {
            if (atomsOfProduct % 2 === 0 && atomsOfReagent % 2 === 0) {
              resultSecondProduct = atomsOfReagent / 2
            } else {
              resultSecondProduct = atomsOfReagent * atomsOfProduct
            }
            newSecondProduct = secondResultClean.map(e => {
              return e[e.length - 1] + resultSecondProduct
            })
          }
        }
      })
    }
  }

  const completed = [
    resultFirstReagent,
    resultSecondReagent,
    resultFirstProduct,
    resultSecondProduct
  ]
  return completed
}
