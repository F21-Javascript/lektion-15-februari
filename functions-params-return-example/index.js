const sumElem = document.querySelector('#sum');

function add(firstNumber, secondNumber) {
    const sum = firstNumber + secondNumber;
    console.log('Sum är', sum);
    return sum; // Returnerar värdet i variabeln sum som vi sedan kan ta emot och spara i en variabel i calculate
}

function calculate(numberOne, numberTwo) {
    console.log('Number one är', numberOne);
    console.log('Number two är', numberTwo);

    const totalSum = add(numberOne, numberTwo); // Det funktionen add returnerar sparas i variabeln totalSum
    sumElem.innerText = `Summan av ${numberOne} + ${numberTwo} är ${totalSum}`;
}

calculate(5, 4); // Här får numberOne och numberTwo värden