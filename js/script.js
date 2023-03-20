function getMoveName(argMoveId) {
   if (argMoveId == 1) {
      return 'kamień';
   }

   else if (argMoveId == 2) {
      return 'papier';
   }

   else if (argMoveId == 3) {
      return 'nożyce';
   }

   printMessage('Nie znam ruchu o id ' + argMoveId + '.');
   return 'nieznany ruch';
}


// ComputerMove

let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Ruch komputera to: ' + randomNumber);

let computerMove = getMoveName(randomNumber);

// if(randomNumber == 1){
//    computerMove = 'kamień';
// }

// else if(randomNumber == 2){
//    computerMove = "papier";
// }

// else if(randomNumber == 3){
//    computerMove = 'nożyce';
// }

printMessage('Ruch komputera to: ' + computerMove);

// playerMove

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wybrał: ' + playerInput);

let playerMove = getMoveName(playerInput);

// if (playerInput == 1){
//    playerMove = 'kamień';
// }

// else if(playerInput == 2){
//    playerMove = 'papier';
// }

// else if(playerInput == 3){
//    playerMove = 'nożyce';
// }

printMessage('Ruch gracz to: ' + playerMove);

// Resultat of game

function displayResult(argComputerMove, argPlayerMove) {

   if (argComputerMove == 'kamień' && argPlayerMove == 'kamień') {
      printMessage('Remis!');
   }

   else if (argComputerMove == 'papier' && argPlayerMove == 'papier') {
      printMessage('Remis!');
   }

   else if (argComputerMove == 'nożyce' && argPlayerMove == 'nożyce') {
      printMessage('Remis!');
   }


   else if (argComputerMove == 'nożyce' && argPlayerMove == 'kamień') {
      printMessage('Wygrywasz!');
   }

   else if (argComputerMove == 'kamień' && argPlayerMove == 'papier') {
      printMessage('Wygrywasz!');
   }

   else if (argComputerMove == 'papier' && argPlayerMove == 'nożyce') {
      printMessage('Wygrywasz!');
   }

   else if (argComputerMove == 'kamień' && argPlayerMove == 'nożyce') {
      printMessage('Przegrywasz!');
   }

   else if (argComputerMove == 'papier' && argPlayerMove == 'kamień') {
      printMessage('Przegrywasz!');
   }

   else if (argComputerMove == 'nożyce' && argPlayerMove == 'papier') {
      printMessage('Przegrywasz!');
   }
}

displayResult(computerMove, playerMove);
