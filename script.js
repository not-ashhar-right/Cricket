let score={
    
    win:0,
    lose:0,
    draw:0,
  }
  if(localStorage.getItem("score")){
    score=JSON.parse(localStorage.getItem("score"));
  }
  score.resultDisplay=function(){
      return `the number of matches won:${score.win},lost:${score.lose},draw:${score.draw}`;
    }

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
      score.win++;
            return 'you have won the game';
          } else if (comptchoice == 'bat') {
            score.draw++;
            return 'draw game';
          } else if (comptchoice == 'stump') {
            score.lose++;
            return 'you have lost the game';
          }
        }
  else if(userchoice==='ball'){
    if (comptchoice == 'ball') {
      score.draw++;
            return 'draw game';
          } else if (comptchoice == 'bat') {
            score.lose++;
            return 'you have lost the game';
          } else if (comptchoice == 'stump') {
            score.win++;
            return 'you have won the game';
          }
        }
  else if(userchoice==='stump'){
    if (comptchoice == 'ball') {
            score.lose++;
            return 'You have lost the game';
          } else if (comptchoice == 'bat') {
            score.win++;
            return 'you have won game';
          } else if (comptchoice == 'stump') {
            score.draw++;
            return 'draw game';
          }
  }
}

function resetScore(){
  localStorage.clear();
  score.win=0;
  score.lose=0;
  score.draw=0;
}

function alerting(userchoice, comptchoice, result){
  localStorage.setItem("score", JSON.stringify(score));
  alert(`you choose ${userchoice},computer choose ${comptchoice} : ${result} 
    ${score.resultDisplay()}`);
}