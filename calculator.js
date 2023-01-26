let rows = 8;
var lastNumber = 1, secondLastNumber = 1;
function Calculate() {
    console.log('0');
    console.log('1');
    console.log('1');
    while (rows > 0) {
        rows -= 1;
        var oldNum = lastNumber;
        var number = (lastNumber + secondLastNumber);
        lastNumber = number;
        secondLastNumber = oldNum;
        console.log(number);
    };
    console.log('Fibonacci Series Calculator by GaDGeT#8987');
};
Calculate();