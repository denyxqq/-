// є 2 способи створення функцій

// 1 спосіб оголошення функції (function declaration)

// function назваФункції (параметри){
// Тіло функції (детальні інструкції що відбувається у функції)
// return значення (результат)
// }

// параметри це зміні в які приходять дані для операції у функції

// return це оператор який вказує що (результат у вигляді значення)

//  нам потрібно повернути з функції

// створемо функцію яка сумує числа
// (оголосимо)
// function addNumbers (numberA, numberB, numberC){
// const sum = numberA + numberB + numberC

// return sum
// }

// Викли функції:

// НазваФункції (аргументи)

// (аргументи) це конкретні дані які ми передаємо при виклику функції
// НАПРИКЛАД ЧИСЛА РЯДКИ МАСИВИ

// const result = addNumbers(5, 52, 42)
// console.log(result)

// const result2 = addNumbers( 52, 4321, 1234)
// console.log(result2)

// 2 спосіб
// Це функціональний вираз(function expresion)
// Це коли функція записана у зміну

// const addNumbers = function (numberA, numberB, numberC){
//     const sum = numberA + numberB + numberC

//     return sum
//     }

//     console.log(addNumbers(5, 24, 0))

// спосіб 3(2) стрілкові функції

// Стрілкові функції бувають
// 1)зявним поверненям (з словом return)
// const addNumbers = function (numberA, numberB, numberC) => {
//     const sum = numberA + numberB + numberC

//     return sum
//     }

//     console.log(addNumbers(5, 24, 0))

// 2) з неявним поверненням без слова return
// const addNumbers = function (numberA, numberB, numberC) => (numberA + numberB + numberC)
// console.log(addNumbers(5, 24, 0))
//

//    Створимо функцію яка показує список друзів

const friends = ["Dima ", "Andriy ", "Max ", "Igor "];

function makeMessage(x) {
  let message = "Мої друзі це";
  for (let i = 0; i < x.length; i++) {
    message += x[i];
  }
  return message;
}

console.log(makeMessage(friends));

// Глянемо що робити коли приходить різна кількість аргументів

function multiplyNumbers(num1, num2) {
  // const numProduct = num1 * num2
  // return numProduct
}

multiplyNumbers(42, 52);
console.log(multiplyNumbers(42, 52));

const result = multiplyNumbers(1, 52, 13);
console.log(result);

// Ми хочемо щоб ця функція додавала різну кількість чисел
//  тому ми використовуємо псевдо масив arguments

// function multiplyNumbers() {
//   const number = Array.from(arguments);
//   let multiple = 1;
//   for (let i = 0; i < arguments.length; i++) {
//     multiple = multiple * arguments[i];
//   }
//   return multiple;
// }

// console.log(multiplyNumbers(42, 52));
// multiplyNumbers(42, 52);

// const results = multiplyNumbers(1, 52, 13);
// console.log(results);


// також замість arguments можемо використовувати операцію rest та зберегти масив у зміну

// function multiplyNumbers() {
//     const number = Array.from(arguments);
//     let multiple = 1;
//     for (let i = 0; i < arguments.length; i++) {
//       multiple = multiple * arguments[i];
//     }
//     return multiple;
//   }
  
//   console.log(multiplyNumbers(42, 52));
//   multiplyNumbers(42, 52);
  
//   const results = multiplyNumbers(1, 52, 13);
//   console.log(results);
  

// Напишіть функцію hello2(), яка при виклику буде приймати змінну name (наприклад, «Василь»)
//  і виводити рядок (в нашому випадку «Привіт, Василь»).

const userName = prompt("Введіть імя")

function hello2(name){

  // console.log("Привіт" + name + "!")
  return "Привіт" + name + "!"
}
// hello2("Василь")
console.log(hello2(userName))