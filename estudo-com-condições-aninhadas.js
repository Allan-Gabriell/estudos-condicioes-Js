var idade =16
if (idade < 16) {
    console.log('Não vota') // Como não está sendo programado para rodar no navegador e sim no node JS eu uso console.log ao inver de document.write
} else if (idade < 18) {
    // a linha que deveria estar no bloco dessa anotação eu juntei com o else formando o else if que é permitido e diminui meu código
        console.log('Voto opcional')
    } else {
        console.log('voto obrigatório')
    }
