const fs = require('fs');

console.log('Calorias dos Elfos:');

fs.readFile('./exemple.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  cut = data.split('\r\n\r').map((v) => v.replace('\n', ''));
  console.log('cut', cut);
  var Elfos = cut.map((v) => v.split(/[\s(\r\n)\r)]+/));
  console.log(Elfos);

  /* console.log('------------------------------');
  console.log('Caloria de cada Elfo'); */

  numElfos = Elfos.map((calorias) => {
    var numCalorias = calorias.map((caloria) => Number(caloria));
    console.log('console dentro do map', calorias);

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

  var caloriasSomadas = numElfos.map((calorias) =>
    somaArraydeNumeros(calorias)
  );
  console.log('total', caloriasSomadas);

  console.log(Math.max.apply(null, caloriasSomadas(caloria)));
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
