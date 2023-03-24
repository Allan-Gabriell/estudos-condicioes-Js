var agora = new Date()
var hora = agora.getHours() // o comando getHours eu estou pegando o horário atual do meu aparelho para rodar o programa
console.log (`A hora exata neste momento é ${agora} horas`)
if (hora < 12) {
    console.log('Bom dia!')
} else if (hora <= 18) {
    console.log ('Boa Tarde!')
} else {
    console.log('Boa noite!')
}
