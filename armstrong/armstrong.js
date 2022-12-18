
function Armstrong() {
    let sum = 0;
    // let number2 = prompt('Enter a  positive integer: ' );
    let number2 = document.getElementById('two').value


    let temp = number2;
    while (temp > 0) {

        let remainder = temp % 10;

        sum += remainder * remainder * remainder;


        temp = parseInt(temp / 10);
    }

    if (sum == number2) {
        console.log(`${number2} is an Armstrong number`);
        document.getElementById('ext').innerHTML = 'is an armstrong number'
    }
    else {
        console.log(`${number2} is not an Armstrong number.`);
        document.getElementById('ext').innerHTML = 'is not an armstrong number'
    }
    

}