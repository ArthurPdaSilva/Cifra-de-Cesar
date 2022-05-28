const posMensagem = document.querySelector('p#text');

function gerarMensagem(e){
    e.preventDefault();

    //Retirar possíveis acentos:
    const radioNames = document.querySelectorAll('input[type="radio"]');
    
    const campo = document.querySelector('div#localDaMensagem');

    const input = document.querySelector('input#mensagem');

    
    const mensagem = input.value.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase();
    
    const alfabeto = [
        'a', 'b', 'c', 'd',
        'e', 'f', 'g', 'h',
        'i', 'j', 'k', 'l',
        'm', 'n', 'o', 'p',
        'q', 'r', 's', 't',
        'u', 'v', 'w', 'x',
        'y', 'z',  ' ' 
    ];

    const alfabetoCesar = [
        'k', 'l', 'm', 'n',
        'o', 'p', 'q', 'r',
        's', 't', 'u', 'v',
        'w', 'x', 'y', 'z',
        'a', 'b', 'c', 'd',
        'e', 'f', 'g', 'h',
        'i', 'j',  ' '
    ];

    let m = "";
    for(let c = 0; c < mensagem.length; c++){
        m += radioNames[0].checked ? alfabetoCesar[alfabeto.indexOf(mensagem[c])] : alfabeto[alfabetoCesar.indexOf(mensagem[c])];
    }

    posMensagem.innerHTML = m;
    campo.style.visibility = 'visible';
    input.value = "";
    
}

function copiar(){
    navigator.clipboard.writeText(posMensagem.innerText);
}




