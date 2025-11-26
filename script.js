
//  here  first player we can set x or 0 its your choice
let currentPlayer = true;

let gameActive = true;
// winning pattern
const winningPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const messageEl = document.getElementById("message"); //html code  access
const restartBtn = document.getElementById("restartBtn"); // html restsrt btn access
const cells = Array.from(document.querySelectorAll(".cell")); ///cells store in array

//winner 
const ShowWinner = (winner) => {
  console.log("Winner",winner)
  messageEl.innerText = `Congratulations, winner  is -🎉${winner}`;
  disableCells();
};

// cell distable
const disableCells = () => {
  for (let cell of cells) {
    cell.disabled = true;
  }
};

//  here we initlize....   turn chaning logic
cells.forEach((cell) => {
  cell.addEventListener("click", () => {
    if (currentPlayer) {
      cell.innerText = "O";
      currentPlayer = false;
       messageEl.innerText = "Turn: X";
    } else {
      cell.innerText = "X";
      currentPlayer = true;
       messageEl.innerText = "Turn:O";
    }
    cell.disabled = true;

    checkWinner();
  });
});

// winning logic
const checkWinner = () => {
  for (let pattern of winningPatterns) {
    let postion1Value = cells[pattern[0]].innerText ;
    let postion2Value = cells[pattern[1]].innerText;
    let postion3Value = cells[pattern[2]].innerText;

    if (postion1Value != "" && postion2Value != "" && postion3Value != "") {
      if (postion1Value === postion2Value && postion2Value === postion3Value) {
        ShowWinner(postion1Value);
          
    cells[pattern[0]].classList.remove("bg-warning");
cells[pattern[1]].classList.remove("bg-warning");
cells[pattern[2]].classList.remove("bg-warning");

cells[pattern[0]].style.cssText = "width:50px; height:50px; background-color: lightgreen; color: black;";
cells[pattern[1]].style.cssText = "width:50px; height:50px; background-color: lightgreen; color: black;";
cells[pattern[2]].style.cssText = "width:50px; height:50px; background-color: lightgreen; color: black;";


      }
    }
  }


  // match draw.....
    const allFilled = cells.every((cell) => cell.innerText !== "");
  if (allFilled) {
    messageEl.innerText = " Match Draw 🤝";
    
    disableCells();
};


};
 

 

 
// restart btn 
restartBtn.addEventListener("click", () => {
  cells.forEach((cell) => {
    cell.innerText = "";
    cell.disabled = false;
    cell.classList.add("bg-warning");

  });

  messageEl.innerText = "";
  currentPlayer = true;
});
