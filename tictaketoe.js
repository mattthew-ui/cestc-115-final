let player = 'x'
const board = Array(9).full(null);

function yourturn(index){
    const buttons = document.querySelectorAll('.btn-container button')
    if (!board[index]){
        board[index] = currentPlayer
        buttons[index].textContent = currentPlayer

        if(checkWinner()){
            
        }
    }
}