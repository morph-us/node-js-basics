const sum = (num1 , num2) => num1 + num2;
const PI = 3.142;
class Calculator{
    constructor(){
        console.log("calculator object created");
    }
}
// module.exports.sum = sum;
// module.exports.pi = PI;
// module.exports.calci = Calculator;
module.exports = {
    sum:sum,
    pi : PI,
    calci : Calculator
}

