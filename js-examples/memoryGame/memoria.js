var executing = false
var playerOfRound = 1

const inicio = () => {
  const arrayFotos = [
    'angular',
    'csharp',
    'css',
    'html',
    'java',
    'javascript',
    'jquery',
    'python',
    'react',
    'vuejs'
  ]

  const randomizar = fotos => {
    fotos = fotos.concat(fotos) //duplico o array

    fotos.map((_, i) => {
      const j = Math.floor(Math.random() * (i + 1))

        ;[fotos[i], fotos[j]] = [fotos[j], fotos[i]]
    })
    return fotos
  }

  const eventListener = () => {
    [...document.getElementsByClassName('imagem')].map(e => {
      //     parametros(type of event, function())
      e.addEventListener('click', foto => {
        if (executing == false) {
          executing = true
          foto.target.classList.add('ativo')
          //target: elemento html que disparou o evento
          //classList.add esta adicion ando 'ativo' à classe
          verifyFotos()
        }
      })
    })
  }

  const HTMLrandomizado = fotos => {

    const fotosHTML = fotos.map(foto => {
      return `<div class="imagem ${foto}"></div>`
    }).join('')

    console.log(fotosHTML)
    document.getElementsByClassName('conteudo')[0].innerHTML += fotosHTML

    eventListener()
  }
  HTMLrandomizado(randomizar(arrayFotos))
}

const verifyFotos = async () => {
  const fotosAtivas = [...document.querySelectorAll('.imagem.ativo')]

  const verify = resolve => {
    const isMatch = fotosAtivas.reduce((prev, foto) => {
      return prev.getAttribute('class') == foto.getAttribute('class')
    })

    console.log(isMatch)
    setTimeout(() => {
      countFotosAtivas = 0
      fotosAtivas.map(foto => {
        foto.classList.remove('ativo')

        if (isMatch) {
          foto.classList.add('fixed')
        }
      })

      if (isMatch) {
        const playerPosition = playerOfRound == 1 ? 0 : 1
        const player = [...document.querySelectorAll('.jogador > .score')][
          playerPosition
        ]

        player.textContent = ++player.textContent
        playerOfRound = playerOfRound == 1 ? 2 : 1
      }

      playerOfRound = playerOfRound == 1 ? 2 : 1

      document.getElementById('round').textContent =
        playerOfRound == 1 ? 'jogador 1' : 'jogador 2'
      resolve()
    }, 1000)
  }

  if (fotosAtivas.length >= 2) {
    await new Promise(resolve => verify(resolve))
  }

  executing = false
}


inicio()

