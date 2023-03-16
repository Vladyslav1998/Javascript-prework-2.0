// ComputerMove

let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Ruch komputera to: ' + randomNumber);

let computerMove = 'nieznany ruch';

if(randomNumber == 1){
   computerMove = 'kamień';
}

else if(randomNumber == 2){
   computerMove = "papier";
}

else if(randomNumber == 3){
   computerMove = 'nożyce';
}

printMessage('Ruch komputera to: ' + computerMove);

// playerMove

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wybrał: ' + playerInput);

let playerMove = 'nieznany ruch';

if (playerInput == 1){
   playerMove = 'kamień';
}

else if(playerInput == 2){
   playerMove = 'papier';
}

else if(playerInput == 3){
   playerMove = 'nożyce';
}

printMessage('Ruch gracz to: ' + playerMove);

// Resultat of game

// Remis

if(computerMove == 'kamień' & playerMove == 'kamień'){
   printMessage('Remis!');
}

else if (computerMove == 'papier' & playerMove == 'papier'){
   printMessage('Remis!');
}

else if (computerMove == 'nożyce' & playerMove == 'nożyce') {
   printMessage('Remis!');
}

// Win

else if (computerMove == 'nożyce' & playerMove == 'kamień') {
   printMessage('Ty wygrywasz!');
}

else if (computerMove == 'kamień' & playerMove == 'papier') {
   printMessage('Ty wygrywasz!');
}

else if (computerMove == 'papier' & playerMove == 'nozyce') {
   printMessage('Ty wygrywasz!');
}

// Lose

else if (computerMove == 'kamień' & playerMove == 'nożyce') {
   printMessage('Ty przegrywasz!');
}

else if (computerMove == 'papier' & playerMove == 'kamień') {
   printMessage('Ty przegrywasz!');
}

else if (computerMove == 'nożyce' & playerMove == 'papier') {
   printMessage('Ty przegrywasz!');
}