let dooropen = true
let hitched = true

//Classe que utilza a função de Engate
class Spaceship {
    constructor(nome, crewQuantity) {
        this.nome = nome
        this.crewQuantity = crewQuantity
    }
    
}

function hitch(entraceDoorsOpen,IsHitched){
        entraceDoorsOpen = true
        IsHitched = true
}

//Função do Menu aonde leva o usuário selecionar as opções 
function showMenu() {
    let chosen = window.prompt('1 - Realizar Engate \n'
        + '2 - Imprimir Naves \n'
        + '3 - Sair do programa')

    if (chosen == 1) {
        hitch(dooropen,hitched)
        registerSpaceship()
        showMenu()
    } else if (chosen == 2) {
        Printer()
    } else if (chosen == 3) {
        endofProgram()
    }
}

//Função que imprime as informações da Nave,Nome,Número de Tripulantes,Portas Abertas e se a nave está Engatada
function Printer() {
    alert(' Nome da nave: ' + navName + " \n"
        + ' Nº de tripulante: ' + crewQuantity + " \n"
        + ' Portas Abertas: ' + dooropen + ' \n'
        + ' Engatada: ' + hitched + ' \n' )
}

//Função que finaliza o Uso do Programa
function endofProgram() {
    alert('Encerrando o programa...')
}

//Registro da nave
function registerSpaceship() {
    navName = window.prompt('Insira o nome da nave: ')
    crewQuantity = window.prompt('Insira quantidade de tripulantes')
    let result = new Spaceship(navName, crewQuantity)
    return result
}

showMenu()