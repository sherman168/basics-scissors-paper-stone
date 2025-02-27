//part 1

/*var genRandHand = function () {
  var randomInt = Math.floor(Math.random() * 4);
  //var scissors = 1
  //var paper = 2
  //var stone = 3
  if (randomInt == 1) {
    var outPutHand = "scissors";
    return outPutHand;
  }
  if (randomInt == 2) {
    var outPutHand = "paper";
    return outPutHand;
  }
  if (randomInt == 3) {
    var outPutHand = "stone";
    return outPutHand;
  }
};

var main = function (input) {
  var randHand = genRandHand();
  var myOutPutValue = `Something wrong, try again.`;
  if (input == randHand) {
    myOutPutValue = `You played ${input}<br>I played ${randHand}<br>we DRAW.`;
  }
  if (
    (input == "scissors" && randHand == "paper") ||
    (input == "paper" && randHand == "stone") ||
    (input == "stone" && randHand == "scissors")
  ) {
    myOutPutValue = `You played ${input}<br>I played ${randHand}<br>you WIN`;
  }
  if (
    (input == "scissors" && randHand == "stone") ||
    (input == "paper" && randHand == "scissors") ||
    (input == "stone" && randHand == "paper")
  ) {
    myOutPutValue = `You played ${input} <br>I played ${randHand}<br>you LOSE`;
  }
  return myOutPutValue;
};*/

//part 2
var userName = "";
var numOfWins = 0;
var numOfGame = 0;
var genRandHand = function () {
  var randomInt = Math.floor(Math.random() * 3);
  //var scissors = 0
  //var paper = 1
  //var stone = anything else
  if (randomInt == 0) {
    return "scissors";
  }
  if (randomInt == 1) {
    return "paper";
  }
  return "stone";
};

var main = function (input) {
  var randHand = genRandHand();
  var myOutPutValue = `Play "scissors", "paper", or "stone".`;

  if (userName == "") {
    if (!input) {
      myOutPutValue = `Eh, input user name`;
    } else {
      userName = input;
      myOutPutValue = `Welcome ${userName}!`;
    }
    return myOutPutValue;
  } else if (userName !== "") {
    if (input) {
      myOutPutValue = `Play scissors, paper or stone.`;
    }

    if (input.toLowerCase() == randHand) {
      myOutPutValue = `You played ${input.toLowerCase()}<br>I played ${randHand}<br>We DRAW.`;
      numOfGame += 1;
    }
    if (
      (input.toLowerCase() == "scissors" && randHand == "paper") ||
      (input.toLowerCase() == "paper" && randHand == "stone") ||
      (input.toLowerCase() == "stone" && randHand == "scissors")
    ) {
      numOfWins += 1;
      numOfGame += 1;
      myOutPutValue = `You played ${input.toLowerCase()}<br>I played ${randHand}<br>You WIN`;
    }

    if (
      (input.toLowerCase() == "scissors" && randHand == "stone") ||
      (input.toLowerCase() == "paper" && randHand == "scissors") ||
      (input.toLowerCase() == "stone" && randHand == "paper")
    ) {
      numOfGame += 1;
      myOutPutValue = `You played ${input.toLowerCase()} <br>I played ${randHand}<br>You LOSE`;
    }
    if (input.toLowerCase() == "reset") {
      userName = "";
      numOfWins = 0;
      numOfGame = 0;
      return "Okay, game reset; please input user name again";
    }
    return `Dear ${userName}<br>${myOutPutValue}<br> You have won ${numOfWins}/${numOfGame} games.`;
  }
};
