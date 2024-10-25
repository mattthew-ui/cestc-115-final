let check = 1

function clicked(selected) {
    const btnsLoc = document.querySelector('.btn-container');
    const btns = [...btnsLoc.querySelectorAll("button")];

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

    for (let y = 0; y < winLoc.length - 1; y++) {
        const vars = [ 'X', 'O'];
        for (let i = 0; i < vars.length - 1; i++) {
            if (winLoc[y][0] === vars[i] && winLoc[y][1] === vars[i] && winLoc[y][2] === vars[i])  {
                console.log(vars[i]);
                console.log('test');
            }
        }
    }


    // for (let i = 0; i < btns.length; i++) {
    //     let boardCheck = btns[i];
    //     checkWin(boardCheck);
    // }

    //if () {

    //} else {
        if (selected.value === 'X' || selected.value === 'O') {
            alert(`The space you selected already contains a ${selected.textContent} already, please select a different space`);
        } else {
            if (check === 1) {
                const element = document.querySelector('#' + selected.id);
                element.value = 'X';
                element.textContent = 'X';
                check++;
            } else {
                const element = document.querySelector('#' + selected.id);
                element.value = 'O';
                element.textContent = 'O';
                check--;
            }   
        }
    //} 
}

function checkWin(boardCheck) {
    // console.log(boardCheck);
}