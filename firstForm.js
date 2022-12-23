const fs = require('fs');

console.log('Calorias dos Elfos:');

fs.readFile('./Calories/input.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  cut = data.split('\r\n\r').map((v) => v.replace('\n', ''));
  /* console.log('cut', cut); */
  var Elves = cut.map((v) => v.split(/[\s(r\n\r)(\r\n)\r)]+/));
  console.log(Elves);

  console.log('------------------------------');
  console.log('Caloria de cada Elfo');

  numElfos = Elves.map((calorias) => {
    var numCalorias = calorias.map((caloria) => Number(caloria));
    console.log('Elves', calorias);

    return numCalorias;
  });
  console.log(numElfos);

  function somaArraydeNumeros(arraydenumeros) {
    var sum = 0;
    for (var i = 0; i < arraydenumeros.length; i++) {
      sum += arraydenumeros[i];
    }
    return sum;
  }

  caloriasSomadas = numElfos.map((calorias) => somaArraydeNumeros(calorias));
  console.log('Total calories for each elf:', caloriasSomadas);

  console.log('Maior caloria:', Math.max.apply(null, caloriasSomadas));
  /*
  function findtopthree(array) {
    for(var i = 0; i < array; i++) {
      if (i++ > i) {
        
      }
    }
  } */
});
/*
1. Capturar dados de calorias
2. Calcular: sum
3. Obter a resposta
4. Verificar qual é a resposta maior
5. Entregar a resposta com o nome do Elfo
*/

/* 
1. Separar os Elfos (como que separa um texto em js)
2. Soma a quantidade total de cada Elfo
3. Qual Elfo tem a maior quantidade
*/

/* 
1. Ler o arquivo
2. Colocar o conteúdo do arquivo em uma variavel (como ler um arquivo text em node)
3. Trasnformar uma string em number (como mudar uma string para number em js)
*/
