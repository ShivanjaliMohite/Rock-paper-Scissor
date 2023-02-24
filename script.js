const totalscore = { playerscore: 0, computerscore: 0 }

//getComputerChoice return random value from array
function getComputerChoice() {
  let rpschoice = ['Rock', 'Paper', 'Scissor']
  let randomNumber = Math.floor(Math.random() * 3)
  return rpschoice[randomNumber]
}
//getResult return result
//return score 
function getResult(playerchoice, computerchoice) {
  let score
  if (playerchoice == computerchoice)
    score = 0
  else if (playerchoice == 'Rock' && computerchoice == 'Scissor')
    score = 1
  else if (playerchoice == 'Paper' && computerchoice == 'Rock')
    score = 1
  else if (playerchoice == 'Scissor' && computerchoice == 'Paper')
    score = 1
  else
    score = -1
  return score
}
//function showresult
function showresult(score, playerchoice, computerchoice) {
  const resultdiv = document.getElementById("result")
  const handdiv = document.getElementById("hands")
  const playerdiv=document.getElementById("player-score")
  if (score == -1)
    resultdiv.innerText = "You lose"
  else if (score == 0)
    resultdiv.innerText = "It's tie!!"
  else
    resultdiv.innerText = "You Win"
  handdiv.innerText = `You: ${playerchoice} vs computer: ${computerchoice}`
   playerdiv.innerText=`Your score:${totalscore['playerscore']}`
}

//function playgame
function onclickrps(playerchoice) {
  console.log({ playerchoice })
  let computerchoice = getComputerChoice()
  console.log({ computerchoice })
  let score = getResult(playerchoice, computerchoice)
  totalscore['playerscore'] += score
  console.log({ score })
  console.log(totalscore)
  showresult(score, playerchoice, computerchoice)
}
function playgame() {
  let result = document.querySelectorAll('.rpsbutton')
  result.forEach(result => {
    result.onclick = () => onclickrps(result.value)
  })
  const end=document.getElementById('endgame')
  end.onclick=()=>endgame(totalscore)
}
playgame()
function endgame(totalscore)
  {
    totalscore['playerscore']=0
    totalscore['computerscore']=0
  const resultdiv = document.getElementById("result")
  const handdiv = document.getElementById("hands")
  const playerdiv=document.getElementById("player-score")
     resultdiv.innerText =''
     handdiv.innerText=''
     playerdiv.innerText=''
  }