//andar1: andar do elevador
//andar2: andar do 1o chamado
//andar3: andar do 2o chamado

function elevador(andar1, andar2, andar3) {
  const escolha2 = Math.pow(andar2 - andar1, 2);
  const escolha3 = Math.pow(andar3 - andar1, 2);

  if (andar3 === 0) {
    if (andar1 === andar2) {
      console.log(`o elevador se encontra neste andar`);
    } else if (andar2 === 1) {
      console.log(`vamos para o ${andar2}o andar`);
    } else if (andar2 === 2) {
      console.log(`vamos para o ${andar2}o andar`);
    } else if (andar2 === 3) {
      console.log(`vamos para o ${andar2}o andar`);
    } else if (andar2 === 4) {
      console.log(`vamos para o ${andar2}o andar`);
    }
  }

  if (andar3 !== 0) {
    if (escolha3 === escolha2) {
      if (andar2 < andar3) {
        console.log(`Primeiro para o ${andar3}o andar, depois para o ${andar2}o andar.`);
      } else if (andar2 > andar3) {
        console.log(`Primeiro para o ${andar2}o andar, depois para o ${andar3}o andar.`);
      } else if (andar2 === andar3 && andar1 === andar2) {
        console.log(`Ja estamos no ${andar1}`);
      } else if (andar2 === andar3) {
        console.log(`Vamos para o ${andar2}o andar`);
      }
    } else if (escolha2 > escolha3) {
      console.log(`Primeiro para o ${andar3}o andar, depois para o ${andar2}o andar.`);
    } else if (escolha3 > escolha2) {
      console.log(`Primeiro para o ${andar2}o andar, depois para o ${andar3}o andar.`);
    }
  }
}

elevador(1, 2, 4);
elevador(1, 1, 1);
elevador(4, 3, 0);
elevador(2, 1, 4);
elevador(1, 2, 2);
elevador(1, 1, 0);
elevador(1, 2, 0);
