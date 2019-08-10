function sinaleira() {
  this.cor = 0;

  setInterval(() => {
    this.cor++;

    if (this.cor === 1) {
      console.log(`O sinal esta verde`);
    }

    if (this.cor === 2) {
      console.log(`O sinal esta amarelo`);
    }

    if (this.cor === 3) {
      console.log(`O sinal esta vermelho`);
    }
  }, 2000);
}

sinaleira();
