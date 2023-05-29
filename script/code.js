
// --Variable--
// A variable is a word or container used to store information.

// --Value--
// A value can vary from being a number, text as well as some functions

// --Data Type--
// A Data Type is the desctription of the data that is stored in a variable. This can either be a : string, boolean, number, undefined, null, array, object. 

// --Initialization--
// Initialization is when you store a value in a variable.

// --Whats the difference between let, var, and const--
// If you use const, it means the variable can never be changed or reassigned.
// If you use let and var, the variable can be reassigned.
// The difference between let and var is that var declares the variable globally, you are able to declare the variable again and they do not support block-level scope. With regards to let, let declared the variable locally, it is not able to be redeclared it can only be reassigned, and it does support block-level scope.

// --What is a variable scope?--
// Variable scope defines the range of a program or code where a variable can be referenced.  It can be global, meaning it is defined everywhere and can also be defined locally.

// --When can you decide when to use a for or while, forEach and do while loop?--
// for loops are used through a block of code a number of times
// while loops are used through a block of code while a specified condition is true
// for/in loops are used through the properties of an object
// for/of loops are used through the values of an iterable object
// do while are also loops we use through a block of code while a specified condition is true
// foreach is used whenever your array is associtive or has gaps

// --Define hoisting?--
// Hoisting allows us to call functions, variables or classes before they appear in the code. They move it to the top of the scope, prior to the execution of the code.



// how to display the details of someone's fullName
let fullName = {
    firstName : 'Mohamed',
    middleName : 'Rayhaan',
    lastName : 'Khan'
};
console.log(fullName);

// end of q1
    
// Start of q2

let person = {
    firstName : 'Rayhaan',
    lastName : 'Khan',
    age : '19',
    subjects : 'English, Afrikaans, Mathematics, Physical Science'
}

let address = {
    streetName : 'De Wet Road',
    streetNumber : 25,
    suburb : 'Ottery',
    city : 'Cape Town', 
    countryName : 'South Africa'
}
console.log(person);
console.log(address);

// end of q2

// start of q3

let numb1 = document.querySelector('#num1');
let numb2 = document.querySelector('#num2');
let operator = (document.querySelector('#operator'));
let display = document.querySelector('#display');
let calculate = document.querySelector('#calculate');

calculate.addEventListener('click',()=> {
    if(numb1, operator, numb2 === ''){
        display.innerHTML = "Input a valid number or operator"
    } else {
        calculate = eval(numb1.value + operator.value + numb2.value)
        display.innerHTML = calculate;
    }
})

// end of q3

// start of q4

let subject = "Programming";
function backwards(subject) {
    return subject.split('').reverse().join('')
    }
    console.log(backwards(subject))

// end of q4

// start of q5

// let rayhaan = [
//     firstName = "Rayhaan",
//     age = 19,
//     birthday = '18-04-2004'
// ]

// let date1 = new Date('04/18/2023')
// let date2 = new Date('04/18/2024')

// const days = (date1, date2) => {
//     let difference = date2.getTime() - date1.getTime();
//     let totalDays = Math.ceil(difference / (1000 * 3600 * 24));
//     return totalDays;
// }

// console.log(rayhaan);
// console.log(days(date1, date2) + "days till next birthday");

// let rayhaan = [
//         firstName = "Rayhaan",
//         age = 19,
//         dob = new Date('2004-04-18')
//     ]

// let birth = rayhaan.find(rayhaan => rayhaan.dob === rayhaan.dob)
// let someDate = new Date();
// console.log(someDate)
// console.log(someDate.getFullYear())
// console.log(rayhaan[0].dob.getFullYear())
// console.log(someDate.getDay() -  rayhaan[0].dob.getDay(),"2 Days Left until Mish's birthday",);
// console.log('Rayhaan is: ', rayhaan[0].dob.getDate() - someDate.getDate(), 'years old!')
// console.log("OR")
// console.log('Rayhaan is: ', someDate.getFullYear() - rayhaan[0].dob.getFullYear(), "years old!")

let mish = [
    {
    name: 'Mish-Al',
    dob: new Date('2002-5-31')
}
]

let birth = mish.find(mish => mish.dob === mish.dob)
let today = new Date();
console.log(mish[0].dob.getDate() - today.getDate()," Days Left until Mish's birthday");
console.log('Mish is: ', today.getFullYear() - mish[0].dob.getFullYear(), "years old!")