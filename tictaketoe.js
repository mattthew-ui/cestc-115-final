// let xScore =0
let check = 1
// let oScore = 0
// let tieScore = 0

// function hit(selected){
//     console.log("test")
//     if (selected.textContent !== '') return;

//     selected.textContent = currentPlayer
//     if(checkForWin()){
//         alert('you ${currentPlayer} win')
//     } else if (currentPlayer === 'X') {
//             xScore++ 
//             oScore++
//             resetGame()
//     }
    
//     else if(isTie()){
//         alert('You tied')
//         tieScore++
//         resetGame()
//     }
    
// }
function clicked(selected) {
    if (selected.value === 'X' || selected.value === 'O') {
        alert(`The space you selected already contains a ${selected.textContent} already, please select a different space`);
    } else {
        const element = document.querySelector('#' + selected.id);

        if (check === 1) {
            element.value = 'X';
            element.textContent = 'X';
            check++;
        } else {
            element.value = 'O';
            element.textContent = 'O';
            check--;
        }
        checkGame();   
    }
}

function checkGame() {
    const btnsLoc = document.querySelector('.btn-container'); //   "querySelector" returns a a NodeList
    const btns = [...btnsLoc.querySelectorAll("button")]; // '[...]' This makes a NodeList into an array, we do this because NodeList doesnt have access to all functions an array does.

    const winLoc = [
        [ btns[0].value, btns[1].value, btns[2].value ],
        [ btns[3].value, btns[4].value, btns[5].value ],
        [ btns[6].value, btns[7].value, btns[8].value ],
        [ btns[0].value, btns[3].value, btns[6].value ],
        [ btns[1].value, btns[4].value, btns[7].value ],
        [ btns[2].value, btns[5].value, btns[8].value ],
        [ btns[0].value, btns[4].value, btns[8].value ],
        [ btns[2].value, btns[4].value, btns[6].value ]
    ];

    for (let i = 0; i < winLoc.length; i++) {
        // 'winLoc' holds each possible win scenerio in a array '[i]' allows it to run through all the inner arrays
        if (winLoc[i].every(boxX => boxX === 'X')) { 
            setTimeout(() => {
                alert('Player X wins!');
              }, 10); // Delays the message send by 10 milliseconds, needed because alert was appearing before value would appear on the box     
        } else if (winLoc[i].every(boxO => boxO === 'O')) {
            setTimeout(() => {
                alert('Player O wins!');
              }, 10);
        } else {
            checkTie(btns);
        }
    }
}

function checkTie(buttons) {
    if (buttons.every(box => box.value !== 'empty')) {
        setTimeout(() => {
            alert('The game was a tie, no winner...');
          }, 10); 
    }    
}