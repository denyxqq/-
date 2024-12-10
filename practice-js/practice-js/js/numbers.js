// математичні оператори.
// const a = 5;
// const b = 21;
// const sum = a + b;
// const difference = a - b;
// console.log(sum);
// console.log(difference);
// const multiplay = a * b;
// const division = a / b;
// const exponentiation = a ** 2;
// console.log(exponentiation);
// console.log(division);

// остача від ділення.
// const remainderFromDivision = a % b;
// console.log(remainderFromDivision);
// const x = 18;
// const y = 5;
// const z = x % y;
// console.log(z);
// 18 поділити на 5 вийде не ціле число.
// 17 поділити на 5 вийде не ціле число.
// 16 поділити на 5 вийде не ціле число.
// 15 поділити на 5 вийде ціле число.
// тоді шукаємо остачу від ділення.
//18-15=3
//3 це і буде остача від ділення.

//оператори порівняння.
// console.log(x > y);
// console.log(12 < 8);
// console.log(8 < 8);
// console.log(8 <= 8);
// console.log(8 == 8);

//"=" у js це оператор присвоєння коли ми хочемо якесь значення записати у змінну.
//для того щоб порівняти два значення використовуємо 3 - "=".

// console.log(false == 0);
// console.log(false === 0);
// console.log(1 == true);
// console.log(1 === true);
// console.log("5" == 5);
// console.log("5" === 5);

// приведення до числа, приведення до числа робимо через метод Number
// const date = "9";
// const number = Number(date);
// console.log(number);
// console.log(Number(true));
// console.log(Number(false));
// console.log(Number(null));
// console.log(Number(""));
// console.log(Number("strong"));
// console.log(Number("7"));
// console.log(typeof number);
// console.log(typeof date);
// const width = "50.5px";
//console.log(Number(width)); //вийде "NaN" - це "not a number" (не число).
// "NaN" ми отримуємо коли не можемо перевести рядок у число через "Number" метод.
//console.log(Number.parseInt(width)); //витягує з рядка ціле число.
//const widthNumber = Number.parseFloat(width);// а "parseFloat" витягує з рядка не ціле число.
//console.log(widthNumber);