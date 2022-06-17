const espectadores = [
  {
    idade: 23,
    opiniao: "bom"
  },
  {
    idade: 29,
    opiniao: "ótimo"
  },
  {
    idade: 19,
    opiniao: "regular"
  },
  {
    idade: 33,
    opiniao: "bom"
  },
  {
    idade: 45,
    opiniao: "regular"
  },
  {
    idade: 50,
    opiniao: "ótimo"
  },
  {
    idade: 92,
    opiniao: "regular"
  },
  {
    idade: 73,
    opiniao: "bom"
  },
  {
    idade: 8,
    opiniao: "regular"
  },
  {
    idade: 46,
    opiniao: "bom"
  },
  {
    idade: 53,
    opiniao: "ótimo"
  },
  {
    idade: 16,
    opiniao: "regular"
  },
  {
    idade: 5,
    opiniao: "bom"
  },
  {
    idade: 32,
    opiniao: "ótimo"
  },

];
let soma = 0;
let total = 0;
let qtdregular = 0;
let qtdbom = 0;
espectadores.forEach(function(espectador){
  // (1)
  if (espectador.opiniao == "ótimo"){
    soma = soma + espectador.idade
    total = total + 1
  }
  // (2).
  if (espectador.opiniao == "regular"){
    qtdregular = qtdregular + 1 
  }
  // (3).
  if (espectador.opiniao == "bom"){
    qtdbom = qtdbom + 1
  }
});
//Média das idades que responderam "ótimo". (1).
console.log("A média das idades que responderam ótimo é de: " + soma/total + "%")
//Quantidade de pessoas que responderam "regular". (2).
console.log("A quantidade de pessoas que responderam regular é de: " + qtdregular)
//Porcentagem de pessoas que responderam "bom". (3).
console.log("A porcentagem de pessoas que responderam bom é de: " + (qtdbom * 100 / espectadores.length + 1).toFixed(2) +"%")
