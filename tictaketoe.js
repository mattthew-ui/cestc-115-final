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
    if (check === 1) {
        const element = document.querySelector('#' + selected.id);
        element.textContent = 'X';
        check++;
    } else {
        const element = document.querySelector('#' + selected.id);
        element.textContent = 'O';
        check--;
    }   
    
}
function checkWin(){
    console.log('test')
}
function resetGame(){
    console.log('test')
}