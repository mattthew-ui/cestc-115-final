let check = 1

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