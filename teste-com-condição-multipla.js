var agora = new Date()
var dia = agora.getDay() // vai me mostrar o dia da semana da minha maquina
/* para o JavaScript:
    0 = domingo
    1 = segunda
    2 = terça
    3 = quarta
    4 = quinta
    5 = sexta
    6 = sabado */
switch(dia) { 
    case 0:
        console.log('Hoje é domingo')
        break
    case 1:
        console.log('Hoje é segunda')
        break
    case 2:
        console.log('Hoje é terça')
        break
    case 3:
        console.log('Hoje é quarta')
        break
    case 4:
        console.log('Hoje é quinta')
        break
    case 5:
        console.log('Hoje é sexta')
        break
    case 6: 
        console.log('Hoje é sabado')
        break
}
/* Nesta situação eu uso o comando switch para ser mais prático o meu código e não desenvolver 
uma grande condição aninhada, mas sempre ele só funciona com número inteiros e caracteres,
muito bom para situações pontuais*/