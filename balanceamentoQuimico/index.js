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

// H2O => [H2, O], H3PO4 => [H3, P, O4], CaCO3 => [Ca, C, O3]

function transformToArray(element) {
  console.time("oi")
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
        if (!verifyBeforeElement && verifyAfterElement) {
          if (characterAfter == characterAfter.toLowerCase()) {
            const total = actualCharacter + characterAfter
            transformedArray.push(total)
          } else {
            const total = actualCharacter
            transformedArray.push(total)
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
  console.timeEnd("oi")
  return transformedArray
}

const first = transformToArray("H3PO4")

const second = transformToArray("NaOH")

const firstResult = transformToArray("Na3PO4")
const secondResult = transformToArray("H2O")

const reagent = reducingReagents(first, second)
const product = reducingProducts(firstResult, secondResult)
console.log(reagent)
console.log(product)

// function for comparing reagent and products
function reducingReagents(firstReag, secondReag) {
  const reagent = new Array()
  let i = 0
  for (; i < firstReag.length; i++) {
    const acc = firstReag[i]
    secondReag.forEach((secondElement, secondIndex) => {
      const actual = secondElement
      console.log("Acc: " + acc + "  Actual: " + actual)
      if (acc[0] == actual[0]) {
        if (acc.length == 1 && actual.length == 1) {
          const total = acc + "2"
          reagent.push(total)
          secondReag.splice(secondIndex, 1)
          firstReag.splice(i, 1)
          i -= 1
        }
        if (
          acc.length == 1 &&
          actual.length == 2 &&
          !isNaN(Number(actual[1])) // false if number
        ) {
          const total = acc[0] + `${parseInt(actual[1]) + 1}`
          reagent.push(total)
          secondReag.splice(secondIndex, 1)
          firstReag.splice(i, 1)
          i -= 1
        }
        if (acc.length == 2 && actual.length == 1 && !isNaN(Number(acc[1]))) {
          const total = acc[0] + `${parseInt(acc[1]) + 1}`
          reagent.push(total)
          secondReag.splice(secondIndex, 1)
          firstReag.splice(i, 1)
          i -= 1
          console.log("Terceiro")
        }
        if (
          acc.length == 2 &&
          actual.length == 2 &&
          !isNaN(Number(acc[1])) &&
          !isNaN(Number(actual[1])) // need to be number
        ) {
          console.log("Quarto")
          const total = acc[0] + `${parseInt(actual[1]) + parseInt(acc[1])}`
          reagent.push(total)
          secondReag.splice(secondIndex, 1)
          firstReag.splice(i, 1)
          i -= 1
        }
        if (
          acc.length == 2 &&
          actual.length == 2 &&
          isNaN(Number(acc[1])) && // need to be string
          isNaN(Number(actual[1]))
        ) {
          console.log("Quinto")
          const total = acc + "2"
          reagent.push(total)
          secondReag.splice(secondIndex, 1)
          firstReag.splice(i, 1)
          i -= 1
        }
        if (
          acc.length == 2 &&
          actual.length == 3 &&
          isNaN(Number(acc[1])) // need to be string
        ) {
          console.log("Sexto")
          const total = acc + `${parseInt(actual[2]) + 1}`
          reagent.push(total)
          secondReag.splice(secondIndex, 1)
          firstReag.splice(i, 1)
          i -= 1
        }
        if (acc.length == 3 && actual.length == 2 && isNaN(Number(actual[1]))) {
          console.log("Setimo")
          const total = actual + `${parseInt(acc[2] + 1)}`
          reagent.push(total)
          secondReag.splice(secondIndex, 1)
          firstReag.splice(i, 1)
          i -= 1
        }
        if (acc.length == 3 && actual.length == 3) {
          console.log("Oitavo")
          const total =
            acc[0] + acc[1] + `${parseInt(acc[2] + parseInt(actual[2]))}`
          reagent.push(total)
          secondReag.splice(secondIndex, 1)
          firstReag.splice(i, 1)
          i -= 1
        }
      }
    })
  }
  const completedReagent = reagent.concat(firstReag, secondReag).sort()
  return completedReagent
}

function reducingProducts(firstProd, secondProd) {
  const product = new Array()
  let i = 0
  for (; i < firstProd.length; i++) {
    const acc = firstProd[i]
    secondProd.forEach((secondElement, secondIndex) => {
      const actual = secondElement
      console.log("Acc: " + acc + "  Actual: " + actual)
      if (acc[0] == actual[0]) {
        if (acc.length == 1 && actual.length == 1) {
          const total = acc + "2"
          product.push(total)
          secondProd.splice(secondIndex, 1)
          firstProd.splice(i, 1)
          i -= 1
        }
        if (
          acc.length == 1 &&
          actual.length == 2 &&
          !isNaN(Number(actual[1])) // false if number
        ) {
          const total = acc[0] + `${parseInt(actual[1]) + 1}`
          product.push(total)
          secondProd.splice(secondIndex, 1)
          firstProd.splice(i, 1)
          i -= 1
        }
        if (acc.length == 2 && actual.length == 1 && !isNaN(Number(acc[1]))) {
          const total = acc[0] + `${parseInt(acc[1]) + 1}`
          product.push(total)
          secondProd.splice(secondIndex, 1)
          firstProd.splice(i, 1)
          i -= 1
        }
        if (
          acc.length == 2 &&
          actual.length == 2 &&
          !isNaN(Number(acc[1])) &&
          !isNaN(Number(actual[1])) // need to be number
        ) {
          const total = acc[0] + `${parseInt(actual[1]) + parseInt(acc[1])}`
          product.push(total)
          secondProd.splice(secondIndex, 1)
          firstProd.splice(i, 1)
          i -= 1
        }
        if (
          acc.length == 2 &&
          actual.length == 2 &&
          isNaN(Number(acc[1])) && // need to be string
          isNaN(Number(actual[1]))
        ) {
          const total = acc + "2"
          product.push(total)
          secondProd.splice(secondIndex, 1)
          firstProd.splice(i, 1)
          i -= 1
        }
        if (
          acc.length == 2 &&
          actual.length == 3 &&
          isNaN(Number(acc[1])) // need to be string
        ) {
          const total = acc + `${parseInt(actual[2]) + 1}`
          product.push(total)
          secondProd.splice(secondIndex, 1)
          firstProd.splice(i, 1)
          i -= 1
        }
        if (acc.length == 3 && actual.length == 2 && isNaN(Number(actual[1]))) {
          const total = actual + `${parseInt(acc[2] + 1)}`
          product.push(total)
          secondProd.splice(secondIndex, 1)
          firstProd.splice(i, 1)
          i -= 1
        }
        if (acc.length == 3 && actual.length == 3) {
          const total =
            acc[0] + acc[1] + `${parseInt(acc[2] + parseInt(actual[2]))}`
          product.push(total)
          secondProd.splice(secondIndex, 1)
          firstProd.splice(i, 1)
          i -= 1
        }
      }
    })
  }

  const completedProduct = product.concat(firstProd, secondProd).sort()

  return completedProduct
}
