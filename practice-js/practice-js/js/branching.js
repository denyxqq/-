//розгалуження if.
// if (2 < 3) {
//   console.log("цей код виконається");
// }
// console.log("код нижче if");

//розгалуження if else.
// const yourAge = prompt("скільки вам років?");
// console.log(yourAge);
// if (yourAge >= 18) {
//   alert("ви дорослий!");
// } else {
//     alert("ви ще малий!")
// }

//розгалуження if else.
// const yourAge = Number(prompt("скільки вам років?"));
// console.log(yourAge);
// if (yourAge === 0) {
//   alert("ви не ввели вік!");
// } else if (yourAge >= 18) {
//   alert("ви дорослий!");
// } else if (yourAge >= 18) {
//   alert("ви ще малий!");
// }

//Напиши скрипт перевірки підписки користувачапід час доступу до контенту. Єтри типи підпистки: free, pro та vip.
//Отримати доступ можуть тільки pro та vip.
//const subscription = prompt("яка у вас підписка?");
// console.log(subscription);
// if (subscription === "free") {
//   alert("в вас немає доступу до цього контенту!");
// } else if (subscription === "pro" .toLocaleLowerCase) {
//   alert("насолоджуйтесь контентом!");
// } else if (subscription === "VIP" .toLocaleUpperCase) {
//   alert("насолоджуйтесь контентом!");
// } else {
//   alert("введіть правильний тип підписки!");
// }

//тернарний оператор - це скорочений синтаксис if else, він пишеться:
//умова ? інструкця яка має виконатись при true в умові : інструкція яка має виконатись при false в умові.
// const savedPassword = "GM474jfhg";
// const password = prompt("Введіть пароль!");
// if (savedPassword === password) {
//   alert("Ви авторизовані!");
// } else {
//     alert("Ви ввели неправильний пароль.")
// }

// savedPassword === password
//   ? alert("Ви авторизовані!")
//   : alert("Ви ввели неправильний пароль.");

//інструкція switch - це ще один спосіб написати else if якщо в умові суворе порівняння 2 значень.
// savedPassword === password ? alert("Ви авторизовані!") : alert("Ви ввели неправильний пароль.");

//Напиши скрипт перевірки підписки користувачапід час доступу до контенту.
//Єтри типи підпистки: free, pro та vip.Отримати доступ можуть тільки pro та vip.
// const whatStatus = prompt("Який у вас тип підписки?");
// if (whatStatus === "free") {
//     alert("У вас підписка free");
// } else if (whatStatus === "pro") {
//     alert("У вас підписка pro");
// } else if (whatStatus === "vip") {
//     alert("У вас підписка vip");
// } else {
//     alert("Ви не є користувачем нашої компанії!");
// } 

//інструкція switch (що будемо порівнювати) {
// case з чим порівнюємо(значення):
// інструкція яку потрібно виконати при true
// break
// case з чим порівнюємо(значення):
// інструкція яку потрібно виконати при true
// break
// default:
// інструкція яку виконаємо якщо в усіх кейсах false
//}

// switch (whatStatus) {
//     case "free":
//         alert("У вас підписка free!");
//         break
//     case "pro":
//         alert("У вас підписка pro");
//         break
//     case "vip":
//         alert("У вас підписка vip");
//     default:
//         alert("Ви не є користувачем нашої компанії!");
// }