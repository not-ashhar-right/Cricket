function myFunction() {
  let comptchoice;
  num = Math.ceil(Math.random() * 3);
  if (num == 1) {
    comptchoice = "ball";
  } else if (num == 2) {
    comptchoice = "bat";
  } else if (num == 3) {
    comptchoice = "stump";
  }
  return comptchoice;
}

function compare(userchoice, comptchoice) {
  if(userchoice==='bat'){
    if (comptchoice == 'ball') {
            return 'you have won the game';
          } else if (comptchoice == 'bat') {
            return 'draw game';
          } else if (comptchoice == 'stump') {
            return 'you have lost the game';
          }
        }
  else if(userchoice==='ball'){
    if (comptchoice == 'ball') {
            return 'draw game';
          } else if (comptchoice == 'bat') {
            return 'you have lost the game';
          } else if (comptchoice == 'stump') {
            return 'you have won the game';
          }
        }
  else if(userchoice==='stump'){
    if (comptchoice == 'ball') {
            return 'You have lost the game';
          } else if (comptchoice == 'bat') {
            return 'you have won game';
          } else if (comptchoice == 'stump') {
            return 'draw game';
          }
  }
}

function alerting(userchoice, comptchoice, result){
  alert(`you choose ${userchoice},computer choose ${comptchoice} : ${result}`);
}