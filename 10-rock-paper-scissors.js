const score=JSON.parse(localStorage.getItem('score'))
||{
  wins:0,
  losses:0,
  Tie:0
}
 updateScore();

//localstorage only consist of strings so we have to convert before using it with the help of jason function;
 
/* if(score===null){
  score={
     wins:0,
     losses:0,
     Tie:0
  }
}*/

function playGame(playerMove){
 const computerMove=pickComputerMove();
  let result='';
   
  if(playerMove==='Scissors'){
     if(computerMove==='rock'){
        result='You Lose';
       }
       else if(computerMove==='paper'){
        result='You Win.';
       }
       else if(computerMove==='scissors'){
        result='Tie.';
       }
  }
  else if(playerMove==='Paper'){
     result='';
   
     if(computerMove==='rock'){
       result='You Win';
      }
      else if(computerMove==='paper'){
       result='Tie.';
      }
      else if(computerMove==='scissors'){
       result='You Lose.';
      }
  
  }
  else{
     result='';
  
     if(computerMove==='rock'){
      result='Tie';
     }
     else if(computerMove==='paper'){
      result='You Lose.';
     }
     else if(computerMove==='scissors'){
      result='You Win.';
     }
  }

  if(result==='You Win'){
      score.wins+=1;
  }
  else if(result==='You Lose'){
   score.losses+=1;
  }
  else if(result==='Tie'){
    score.Tie+=1;
  }

  localStorage.setItem('score',JSON.stringify(score));
  updateScore(); 

  document.querySelector('.js-result').innerHTML=result;

  document.querySelector('.js-move').innerHTML=
  ` You 
  <img src="${playerMove}-emoji.png" alt="" class="move-icon">
  <img src="${computerMove}-emoji.png" alt="" class="move-icon">
  computer`;

}

function updateScore(){
 document.querySelector('.js-score').innerHTML=` Wins:${score.wins},Losses:${score.losses},tie:${score.Tie}`;

}

 function pickComputerMove(){
  let computerMove='';
  const randomNumber=Math.random();
 

  if(randomNumber>=0 && randomNumber<1/3){
    computerMove='rock';
  }
  else if(randomNumber>=1/3 && randomNumber<2/3){
     computerMove='paper';
  }
  else{
     computerMove='scissors';
  }
 return computerMove;
 }
