let playerChoice = document.querySelectorAll('.options')
let result = document.querySelector('.result')
let computerDisplay = document.querySelector('.computer-display')
let playerDisplay = document.querySelector('.player-display')

playerChoice.forEach(playerChoice => playerChoice.addEventListener('click', () => {
    
    
    let playerHand = (playerChoice).value
    console.log(playerHand)

    if (playerHand == 'rock') {
        playerDisplay.src= "assets/images/rock-paper-scissors/left-rock.png"
    }
    if (playerHand == 'paper') {
        playerDisplay.src= "assets/images/rock-paper-scissors/left-paper.png"
    }
    if (playerHand == 'scissors') {
        playerDisplay.src= "assets/images/rock-paper-scissors/left-scissors.png"
    }
    
    var computerChoice = Math.floor(Math.random() * 3 + 1)
    
    if(computerChoice == 1) {
        computerHand = 'rock'
        computerDisplay.src = "assets/images/rock-paper-scissors/right-rock.png"
    }
    if(computerChoice == 2) {
        computerHand = 'paper'
        computerDisplay.src = "assets/images/rock-paper-scissors/right-paper.png"
    }
    if(computerChoice == 3) {
        computerHand = 'scissors'
        computerDisplay.src = "assets/images/rock-paper-scissors/right-scissors.png"
    }

    console.log(computerHand)

    // Empate
    if(playerHand === computerHand) {
        result.innerHTML = ("Empate!")
        tie()
    }

    // Derrota
    if(
        playerHand === 'rock' && computerHand === 'paper' || 
        playerHand === 'paper' && computerHand === 'scissors' ||
        playerHand === 'scissors' && computerHand === 'rock') 
    {
        loose()
    }

    // Vitória
    if(
        playerHand === 'rock' && computerHand === 'scissors' || 
        playerHand === 'paper' && computerHand === 'rock' ||
        playerHand === 'scissors' && computerHand === 'paper') 
    {
        win()
    }
    
    function loose() {
        result.innerHTML = ("Derrota!")

        if (playerDisplay.classList.contains('win') || playerDisplay.classList.contains('tie')){
            playerDisplay.classList.remove('win')
            playerDisplay.classList.remove('tie')
        }
        playerDisplay.classList.add('loose')

        if (computerDisplay.classList.contains('loose') || computerDisplay.classList.contains('tie')){
            computerDisplay.classList.remove('loose')
            computerDisplay.classList.remove('tie')
        }
        computerDisplay.classList.add('win')
    }

    function win() {
        result.innerHTML = ("Vitória!")

        if (playerDisplay.classList.contains('loose') || playerDisplay.classList.contains('tie')){
            playerDisplay.classList.remove('loose')
            playerDisplay.classList.remove('tie')
        }
        playerDisplay.classList.add('win')

        if (computerDisplay.classList.contains('win') || computerDisplay.classList.contains('tie')){
            computerDisplay.classList.remove('win')
            computerDisplay.classList.remove('tie')
        }
        computerDisplay.classList.add('loose')
    }

    function tie() {
        if (playerDisplay.classList.contains('win') || playerDisplay.classList.contains('loose')){
            playerDisplay.classList.remove('win')
            playerDisplay.classList.remove('loose')
        }
        playerDisplay.classList.add('tie')

        if (computerDisplay.classList.contains('loose') || computerDisplay.classList.contains('win')){
            computerDisplay.classList.remove('loose')
            computerDisplay.classList.remove('win')
        }
        computerDisplay.classList.add('tie')
    }

    var computerChoice = 0

    }
))