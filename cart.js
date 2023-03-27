///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]

//CODE HERE

// const summedPrice = cart.reduce(/* CALLBACK HERE */)

const pricesArray = cart.map(item => item.price);
console.log(pricesArray);

const totalCart = pricesArray.reduce((currentElement, nextElement) => currentElement + nextElement, 0);
console.log(totalCart);

//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

//CODE HERE

let carTotal = 500;
let couponValue = 0.35;
let tax = 0.06;

function calcFinalPrice(carTotal, couponValue, tax) {
    return ((carTotal + (carTotal * 0.06)) * (1 - couponValue));
}

console.log(calcFinalPrice(carTotal, couponValue, tax));

//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
    TEXT ANSWER HERE

*/

// I would want to know the name of the customer for any potential marketing
// mail items and if they would like to set up a rewards account with
// the store. I want to know if the customer has a rewards account so 
// that they can access any potential discounts on their purchase. I 
// would want to know their age to see if they can qualify for the senior
// citizens diiscount available to 60 year olds and older. I would 
// want to know the customer's gender to be able to market various gender 
// specific items, such as feminine hygiene products, to them. And I 
// would want to know their birthday to give them a discount of 10% on 
// that day. 

/*
    Now, create a customer object following your own
    guidelines.
*/

//CODE HERE

const customerOne = [
    {
        name: "Ann",
        rewards: "yes", 
        age: 62,
        gender: "female", 
        birthday: "October 10"
    }
]

console.log(customerOne);