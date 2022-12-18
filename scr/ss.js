let userscore = 0;
let computerscore = 0;
const userscore_p = document.getElementById('pscr');
const computerscore_p = document.getElementById('cscr');
const score_d = document.querySelector('.score');
const result_d = document.getElementById('pp');
const stone_d = document.getElementById('s');
const paper_d = document.getElementById('p');
const scissor_d = document.getElementById('r');

function getcomputerchoice() {
    const choices = ['s', 'p', 'r']
    const randomnum = (Math.floor(Math.random() * 3));
    return choices[randomnum];
}
function convertwords(letter){
    if( letter=="s")return"stone";
    if( letter=="p")return"paper";
    return"scissor"
}

function win(userchoice,computerchoice){
    userscore++;
    userscore_p.innerHTML = userscore;
    computerscore_p.innerHTML=computerscore;
    console.log(userscore)
    result_d.innerHTML=convertwords(userchoice) +" " + "SNARE"+" " + convertwords(computerchoice)+" "  + "PLAYER winS!";
}
function loss(userchoice,computerchoice){
    computerscore++;
    userscore_p.innerHTML = userscore;
    computerscore_p.innerHTML=computerscore;
    console.log(userscore)
    result_d.innerHTML=convertwords(userchoice) +" " + "SNARE"+" " + convertwords(computerchoice)+" "  + "PLAYER lossS!";
}
function draw(userchoice,computerchoice){
    userscore_p.innerHTML = userscore;
    computerscore_p.innerHTML=computerscore;
    console.log(userscore)
    result_d.innerHTML=convertwords(userchoice) +" " + "TRIES"+" " + convertwords(computerchoice)+" "  + "NObody scores!";
}


function game(userchoice) {
    const computerchoice = getcomputerchoice();
    switch (userchoice + computerchoice) {
        case "sr":
        case "ps":
        case "rp":
            win(userchoice,computerchoice);
            break;
        case "sp":
        case "pr":
        case "rs":
            loss(userchoice,computerchoice);
            break;
        case "ss":
        case "pp":
        case "rr":
            draw(userchoice,computerchoice);
    }

}

function main() {
    stone_d.addEventListener('click', function () {
        game("s")
    })
    paper_d.addEventListener('click', function () {
        game('p')
    })
    scissor_d.addEventListener('click', function () {
        game("r")
    })
}
main();