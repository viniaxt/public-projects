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
          characterAfter == characterAfter.toLowerCase()
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
      }
      if (index == elementLength - 1) {
        const total = actualCharacter
        transformedArray.push(total)
      }
      if (!verifyBeforeElement && index != 0) {
        const total = actualCharacter
        transformedArray.push(total)
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
          const total = actualCharacter + characterAfter
          transformedArray.push(total)
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
          const total = actualCharacter
          transformedArray.push(total)
        }

        if (
          characterBefore == characterBefore.toUpperCase() &&
          characterAfter == characterAfter.toLowerCase()
        ) {
          const total = actualCharacter
          transformedArray.push(total)
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

const resultado = transformToArray("H2")
console.log(resultado)
