// const cites = ["Хельсінкі","київ",'берлін' ,'софія']
//     console. log(cites);
//     "Берлін", "Софія" ;
//     cites [1] ="Лондон" ;
//     cites[3] = "Буковель";
//     console.log(cites);

//      

// Порахувати загальну суму покупок в корзині
// const cart = [54, 28, 105, 70, 92, 17, 120, 12, 25, 90];
// let total = 0;

// total = total + cart[0]
// console.log(total)
// total = total + cart[1]
// console.log(total)
// total = total + cart[2]
// console.log(total)
// total = total + cart[3]
// console.log(total)
// total = total + cart[4]
// console.log(total)
// total = total + cart[5]
// console.log(total)
// total = total + cart[6]
// console.log(total)
// total = total + cart[7]
// console.log(total)
// total = total + cart[8]
// console.log(total)
// total = total + cart[9]
// console.log(total)
// total = total + cart[10]
// console.log(total)

// for ( let i = 0; i < cart.length; i+= 1 ){
//     total = total + cart[i]
//     console.log(total)
// }



// За допомогою цикла for… of написати скрипт який порахує сумму всіх парних чисел в масиві
const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 14];
let total = 0;
// for (let i = 0; i  <numnber.length; i += 1) {
// if(numbers[i] % 2 === 0){

//     total = total + number[i]
   
// }

// }
// console.log(total)


for (let number of numbers){
if(number % 2 === 0){
    total = total + number
} 

}

console.log(total)


for( let element of array){

     
}