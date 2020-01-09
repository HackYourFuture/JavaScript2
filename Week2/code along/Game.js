const chocies = document.querySelectorAll('.choice');
const score = document.getElementById('score');
const result = document.getElementById('result');
const restart = document.getElementById('restart');
const modal = document.querySelector('.modal');
const scoreboard = {
  player: 0,
  computer: 0
}

//play game
function play(e) {
  restart.style.display = 'inline-block';
  const playerChoice = e.target.id;
  const computerChoice = getComputerChoice();
  const winner = getWinner(playerChoice, computerChoice);
  showWinner(winner, computerChoice);
}

//get coumputer choice 
function getComputerChoice() {
  const rand = Math.random();
  if (rand < 0.34) {
    return 'rock'
  } else if (rand <= 0.67) {
    return 'paper'
  } else {
    return 'scissors'
  }
}

//get game winner
function getWinner(p, c) {
  if (p === c) {
    return 'draw'
  } else if (p === 'rock') {
    if (c === 'paper') {
      return 'computer';
    } else {
      return 'player';
    }
  } else if (p === 'scissors') {
    if (c === 'rock') {
      return 'computer';
    } else {
      return 'player'
    }
  } else if (p === 'paper') {
    if (c === 'rock') {
      return 'player'
    } else {
      return 'computer'
    }
  }

}

function showWinner(winner, computerChoice) {
  console.log(winner);

  if (winner === 'player') {
    //inc player score
    scoreboard.player++;
    //show modal result
    result.innerHTML =
      `<h1 class="text-win"> YOU WIN </h1> 
    <i class="fas fa-hand-${computerChoice} fa-10x"></i>
    <p> Computer Chose <strong>${computerChoice}</strong></p>`;

  } else if (winner === 'computer') {
    //inc player score
    scoreboard.computer++;
    //show modal result
    result.innerHTML = `
    <h1 class="text-lose"> You lose! </h1>
    <i class="fas fa-hand-${computerChoice} fa-10x"></i>
    <p> Computer Chose <strong>${computerChoice}</strong></p>`;
  } else {
    result.innerHTML = `
    <h1> It's a draw </h1>
    <i class="fas fa-hand-${computerChoice} fa-10x"></i>
    <p> Computer Chose <strong>${computerChoice}</strong></p>`;
  }
  //Show score
  score.innerHTML =
    `<p>Player: ${scoreboard.player}</p>
     <p>Computer: ${scoreboard.computer}</p>`;
  modal.style.display = 'block';
}
//restart
function restartGame() {
  scoreboard.player = 0;
  scoreboard.computer = 0;
  score.innerHTML = `
  <p>Player: 0 </p>
  <p>Computer: 0 </p>
  `
}
function clearModal(e) {
  if (e.target == modal) {
    modal.style.display = 'none';
  }

}


//event listeners
chocies.forEach(choice => choice.addEventListener('click', play));
window.addEventListener('click', clearModal);
restart.addEventListener('click', restartGame);