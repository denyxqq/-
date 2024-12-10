// //Розгалудження if
//  if (2 > 3) {
//     console.log("Цей рядок виконається");
//  }
  
//  console.log("Код нище після if")

//  //Розгалудження if else
// const yourAge = Number(prompt("Скільки вам років?"));
// console.log(yourAge);

// // if (yourAge >= 18) {
// //     alert("Ви дорослі");
// // } else  {
// //     alert("Ви ще малі")
// // }

// //Розгалудження else if

// if (yourAge === 0) {
//     alert("Ви не ввели вік")
// } else if (yourAge >= 18) {
//     alert("Ви дорослі");
// } else if (yourAge < 18) {
//     alert("Ви ще малі");
// } else {
//     alert("Не правильний формат");
// }

//Тернальний оператор - це скорочений синтаксис if else він пишеться:
// умова ? існтрукція яка має виконатись пр true в умові :
// const savedPassword = "luka121212";
// const password = prompt("Будь ласка введіть пароль:");
//  if (savedPassword === password) {
//      alert("Ви авторизовані!");
//  } else {
//     alert("Введенно не правильний пароль");
//  }

// savedPassword === password ? alert("Ви авторизовані") :  alert("Введенно не правильний пароль"); //Тернальний код

//Інструкція switch - це ще один сосіб написати else if якщо в умові строге порівняння 2 значеннь

//Напиши скрипт перевірки підписки користувача під час доступу до контенту. Є три типи підписки: free, pro та vip. Отримати доступ можуть тільки pro та vip.

const whatStaus = prompt("Який у вас тип підписки?");

//   if (whatStaus === "free") {
//     alert("У вас підписка free");
//   } else if (whatStaus === "pro") {
//     alert("У вас підписка pro");
//   } else if (whatStaus === "vip") {
//     alert("У вас підписка vip");
//   } else {
//     alert("Ви не є користувачем нашої компанії!!!");
//   }

//Інструкція switch (Що будемо порівнювати) {
// case з чим порівнємо (Значення):
//Інструкція яку потрібно виконати при true
// break
// case з чим порівнюємо (Значення):
//Інструкція яку потрібно виконати при true
// break
// default:
//Інструкія яку виконаємо якщо в усіх кейсах false
//}

switch (whatStaus) {
    case "free":
    alert("У вас підписка free");
    break
    case "pro":
    alert("У вас підписка pro");
    break
    case "vip":
    alert("У вас підписка vip");
    default:
    alert("Ви не є користувачем нашої компанії!!!");

}