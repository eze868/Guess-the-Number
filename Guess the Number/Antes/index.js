
let computerNumber
let userNumbers = []
let attemps = 0
let remain = 5

function newGame(){
    window.location.reload()
}    
 
function init() {
    computerNumber = Math.floor(Math.random() * 100 + 1)
    console.log(computerNumber)
}

function compareNumbers () {
    const userNumber = Number(document.getElementById('inputBox').value)
    

    if( attemps < remain) {
        if( userNumber <=100 && userNumber >= 0) {
            userNumbers.push(' ' + userNumber)
            document.getElementById('guesses'). innerHTML = userNumbers
            if (userNumber > computerNumber) {
                document.getElementById('textOutput').innerHTML = 'Your number is too high'
                document.getElementById('inputBox').value = ''
                attemps++
                document.getElementById('attempts').innerHTML = attemps
            }
            else if (userNumber < computerNumber) {
                document.getElementById('textOutput').innerHTML = 'Your number is too low'
                document.getElementById('inputBox').value = ''
                attemps++
                document.getElementById('attempts').innerHTML = attemps
            }
            else {
                document.getElementById('textOutput').innerHTML = 'Congratulatios!!!'
                attemps++
                document.getElementById('attempts').innerHTML = attemps
                document.getElementById('inputBox').setAttribute('Readonly', 'Readonly')
            }
        }else{
            document.getElementById('textOutput').innerHTML = 'Somente Números entre 0 e 100'
            document.getElementById('inputBox').value = ''
        }
    }else {
        document.getElementById('textOutput').innerHTML = 'You Lose! The computer Number was ' + computerNumber
        document.getElementById('inputBox').setAttribute('Readonly', 'Readonly')
    }

}

