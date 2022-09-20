


function baseCalculo(valor) {
  while (valor <= 1903.99) {
    return {
      aliquota: 0,
      parc: 0,
    };
  }
  while (valor > 1903.99 && valor < 2826.65) {
    return {
      aliquota: 7.5 / 100,
      parc: 142.8,
    };
  }
  while (valor > 2826.66 && valor < 3751.05) {
    return {
      aliquota: 15 / 100,
      parc: 354.8,
    };
  }
  while (valor > 3751.06 && valor < 4664.68) {
    return {
      aliquota: 22.5 / 100,
      parc: 636.13,
    };
  }
  while (valor >= 4664.69) {
    return {
      aliquota: 27.5 / 100,
      parc: 869.36,
    };
  }
}


  

    const salario=prompt('qual é a sua renda mensal ?')
    const base = baseCalculo(salarioUsuario);
    const totaldesconto = salario * base.aliquota - base.parc;  
  
  
    alert('O calculo de imposto de renda a pagar é'+ totaldesconto);