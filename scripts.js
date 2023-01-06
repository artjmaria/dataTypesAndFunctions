  // subtract one number from another
  const firstNumber = 9;
  const secondNumber = 3;

  console.log(firstNumber - secondNumber);


// ==============================================================




const name = 'Maria';
const userAge = 26;

const dividedBy = (num1, num2) => {
    const product = num1 / num2

    return product + `Yay the product is ${product}`;
}


// ==============================================================



  const productOfTwoNumbers = (a, b) => {
    const product = a * b;

    return product + " Yay! You returned something!";
  }

  // Invoke the function with two arguments: 2 and 8
  productOfTwoNumbers(2, 8);



// ==============================================================

  // your variable
  const myBool = false;

  // function declaration
  const isTypeOf = (data) => {
    return console.log(typeof data);
  }

  // function invocation
  isTypeOf(myBool);

  // In the function invocation, replace "myBool" with the other names of your variables...isTypeOf(name); isTypeOf(divideBy);...etc.

  // What is happening?