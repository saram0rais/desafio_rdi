const prompt = require('prompt-sync')();

//Criação de Arrays
const tipoDeBebida = ["Refrigerante", "Suco"];
const saborDaBebida = ["Coca", "Guarana", "Suco de Uva", "Suco de Laranja"];
const tamanhoDaBebida = [300, 500, 700];
const tipoDaOrdem = ["Para Viagem", "Comer aqui"];

// Definindo variáveis
let copo;
let tampa;  
let qtd_gelo;
let bebida;
let sabor;
let gelo;
let tamanho;

// Função para enviar a ordem ao ABS
function enviarOrdemAoABS(bebida, sabor, gelo, tamanho, ordem) {
  
  // Escolher tipo de bebida e definir se o copo será de papel ou plástico
while (true) {
  bebida = prompt("Escolha o tipo de bebida: \n\n 1- Refrigerante \n 2- Suco \n\n Digite o tipo: ").trim().toLowerCase();
  if (bebida === "refrigerante" || bebida === "1") {
    copo = "copo de papel";
    bebida = "Refrigerante";
    break;
  } else if (bebida === "suco" || bebida === "2") {
    copo = "copo de plástico";
    bebida = "Suco";
    break;
  } else {
    console.log("Tipo inválido. Tente novamente.");
  }
}

  //Escolher sabor da bebida e verificar se a bebida é Refrigerante ou Suco
  while (true) {
    if(bebida === "Refrigerante") {
      sabor = prompt("Escolha o sabor do Refrigerante \n\n 1- Coca \n 2- Guarana \n\n Digite o sabor desejado: ").trim().toLowerCase();
      if(sabor === "1" || sabor === "coca") {
        sabor = "Coca";
        break;
      } else if(sabor === "2" || sabor === "guarana") {
        sabor = "Guarana";
        break;
      }
    } else {
      sabor = prompt("Escolha o sabor do Suco \n\n 1- Suco de Uva \n 2- Suco de Laranja \n\n Digite o sabor desejado: ").trim().toLowerCase();
      if(sabor === "1" || sabor === "suco de uva") {
        sabor = "Suco de Uva";
        break;
      } else if(sabor === "2" || sabor === "suco de laranja") {
        sabor = "Suco de Laranja";
        break;
      }
    } 
    console.log("Sabor inválido. Tente novamente.");
  }


  // Perguntar se o usuário quer gelo na bebida
  while (true) {
    gelo = prompt("Você gostaria de gelo na bebida? \n\n 1- Sim \n\n 2- Não: ").trim().toLowerCase();
    if (gelo === "sim" || gelo === "1" || gelo === "não" || gelo === "2") {
      if ((gelo === "sim" || gelo === "1") && bebida === "Refrigerante") {
        qtd_gelo = "6 pedras de gelo";
      } else if ((gelo === "sim" || gelo === "1") && bebida === "Suco") {
        qtd_gelo = "12 pedras de gelo";
      } else {
        qtd_gelo = "sem gelo";
      }
      break;
    }
    console.log("Por favor, responda com 'Sim' ou 'Não'.");
  }

  // Escolher tamanho da bebida
  while (true) {
    let entrada = prompt("Agora, qual o tamanho da bebida que você deseja?\n\n1- 300\n2- 500\n3- 700 \n\nDigite o tamanho desejado: ").trim().toLowerCase();
    if (entrada === "1") {
      tamanho = 300;
      break;
    } else if (entrada === "2") {
      tamanho = 500;
      break;
    } else if (entrada === "3") {
      tamanho = 700;
      break;
    } else {
      let valor = parseInt(entrada);
      if ([300, 500, 700].includes(valor)) {
        tamanho = valor;
        break;
      }
    }
    console.log("Tamanho inválido. Tente novamente.");
  }

  // Escolher tipo da ordem - Se é para viagem (delivery) ou para comer no restaurante
  while (true) {
    ordem = prompt("Por último, me informe a retirada do pedido \n\n1- Para Viagem \n2- Comer aqui \n\nDigite: ").trim().toLowerCase();
    if (ordem === "1" || ordem === "para viagem") {
      ordem = "Para Viagem";
      tampa = "tampa sem furo";
      break;
    } else if (ordem === "2" || ordem === "comer aqui") {
      ordem = "Comer aqui";
      tampa = "tampa com furo para o canudo";
      break;
    }
    console.log("Tipo de ordem inválido. Tente novamente.");
  }

    // Exibir saída final
   console.log(`\n\nA bebida selecionada foi: ${bebida}, sabor ${sabor} \n\n Foi servida em: ${copo}, contendo: ${qtd_gelo}, com ${tamanho}ml, e ${tampa}`);
}
enviarOrdemAoABS();