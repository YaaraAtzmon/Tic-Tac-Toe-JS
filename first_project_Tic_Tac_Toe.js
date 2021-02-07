
let cell1 = document.getElementById("cell1");
let cell2 = document.getElementById("cell2");
let cell3 = document.getElementById("cell3");
let cell4 = document.getElementById("cell4");
let cell5 = document.getElementById("cell5");
let cell6 = document.getElementById("cell6");
let cell7 = document.getElementById("cell7");
let cell8 = document.getElementById("cell8");
let cell9 = document.getElementById("cell9");

let pic1 = document.getElementById("pic1");
let pic2 = document.getElementById("pic2");
let pic3 = document.getElementById("pic3");
let pic4 = document.getElementById("pic4");
let pic5 = document.getElementById("pic5");
let pic6 = document.getElementById("pic6");
let pic7 = document.getElementById("pic7");
let pic8 = document.getElementById("pic8");
let pic9 = document.getElementById("pic9");

let counterClicked = 0;
let firstPlayer = true;
let isWinner = false;

function clickTheCell(cellNum) {
//The process of the game by clicking the cells.
   switch (cellNum) {
      case 1:
         show_X_or_O(pic1); 
         cell1 = pic1.src;
         checkWin();
         break; 
      case 2:
         show_X_or_O(pic2);
         cell2 = pic2.src;
         checkWin();
         break;
      case 3:
         show_X_or_O(pic3);
         cell3 = pic3.src;
         checkWin();
         break;
      case 4:
         show_X_or_O(pic4);
         cell4 = pic4.src;
         checkWin();
         break;
      case 5:
         show_X_or_O(pic5);
         cell5 = pic5.src;
         checkWin();
         break;
      case 6:
         show_X_or_O(pic6);
         cell6 = pic6.src;
         checkWin();
         break;
      case 7:
         show_X_or_O(pic7);
         cell7 = pic7.src;
         checkWin();
         break;
      case 8:
         show_X_or_O(pic8); 
         cell8 = pic8.src;
         checkWin();
         break;
      case 9:
         show_X_or_O(pic9);
         cell9 = pic9.src;
         checkWin();
         break;
   }
}


function show_X_or_O(picNum) {
//If there is not a winner and there is not a picture, it will show X first and then O.
   if (isWinner == false) {
      if (picNum.src == "") {
         if (firstPlayer == true) {
            picNum.src = "x.png";
            firstPlayer = false; 
         }
         else if (firstPlayer == false) {
            picNum.src = "o.png";
            firstPlayer = true;
         }
         counterClicked++   
      }
   }
}


function gameOver() {
//If all the cells are full and there is not a winner, it will alert game over.
   if (counterClicked >= 9 && isWinner == false) {
      alert("GAME OVER :(");
      location.reload();
   }   
}

function victory() {
//there is a winner. 
   isWinner = true;
   alert("YOU ARE THE WINNER!"); 
   location.reload();    
}


function checkWin() {
//Check if there is a winner. If not, check if there is a game over.
   setTimeout(() => {
      if (cell1 == cell2 && cell2 == cell3) {
         victory();  
      }
      else if (cell4 == cell5 && cell5 == cell6) {
         victory();  
      }
      else if (cell7 == cell8 && cell8 == cell9) {
         victory();
      }
      else if (cell1 == cell4 && cell4 == cell7) {
         victory();  
      }
      else if (cell2 == cell5 && cell5 == cell8) {
         victory(); 
      }
      else if (cell3 == cell6 && cell6 == cell9) {
         victory(); 
      }
      else if (cell1 == cell5 && cell5 == cell9) {
         victory(); 
      }  
      else if (cell3 == cell5 && cell5 == cell7) {
         victory();   
      }
      else {
         gameOver();
      }
   },300)     
}


