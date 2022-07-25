function tocaSom (seletorAudio) { //função de reprodução dos áudios
    
    const conferidor = document.querySelector(seletorAudio); //constante de verificação dos áudios no corpo do HTML

    if (conferidor && conferidor.localName === 'audio') { //condição para reprodução exclusiva de áudios
        conferidor.play();
    }    
    else {
        console.log('Reprodução de áudio inválida');
    }
}

const listaDeTeclas = document.querySelectorAll('.tecla'); //constante de verificação das teclas de interação do usuário

// laço para garantir a seleção de teclas existentes
for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador]; // constante de compactação do código
    const instrumento = tecla.classList[1]; // constante de identicação das subclasses do html
    const idAudio = `#som_${instrumento}`; //constante de identificação do tipo de áudio com base na subclasse do html "#som_tecla_XXXX"
    
    tecla.onclick = function () { //ação de clicar para chamar uma função anônima que chama a função principal para evitar problemas de execução do código
        tocaSom(idAudio);
    }

    tecla.onkeydown = function (evento) { //código para definição das teclas do teclado que terão interação com a aplicação

        if (evento.code === 'Enter' || evento.code === 'Space') {
            tecla.classList.add('ativa');
        }        
    }
    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }
}
