// метод split
// робить з рядок  масива 
// JOIN робить з масиву рядок
// const friends = ["Віталік", "Діма", "Андрій", "Максим"];
// let friendsList = "";
// for (const friend of friends) {
//   friendsList += friend +  "," ;
// }
// console.log(friendsList);


// const friendList  = friends.join(" , ")

// console.log(friendList)



const msg = "ya3 right here right now"

const words = msg.split(" ")


console.log(words)

// Метод indexOf()
// перевіряє який індекс у певного елемента у масиві
const space = [1, 6 ,4 , 8, 3]
const indexNumber = space.indexOf(3)
console.log(indexNumber)

// Метод includes()
// перевіряє чи є шуканий елемент у масиві

// const friends = ["Віталік", "Діма", "Андрій", "Максим"];
// const isMaxFriend = friends.includes("Максим")
// console.log(isMaxFriend)


const city = ["lviv" , "kyiv" , "pozdimer" , "solonka"]
// метод push додає елемент у кінець масиву
city.push( "paris","dagestan")
console.log(city)

// Метод Pop()
// видаляє останій елемент у масиві

city.pop();
console.log(city)

city.pop()
console.log(city)

// Метод unshift
// додає елемент на початок масиву
city.unshift("oslo")
console.log(city)

//  Метод shift
// видадяє елемент до масиву

city.shift("")
console.log(city)



// Метод slice) 
// дозволяє вирізати елементи з масива та робить з них новий масив
// також через slice можемо зробити копію масиву

const friends = ["Віталік", "Dina" , "Діма", "Настя" , "Андрій", "Максим" ];

const girlsFriends = friends.slice(1,4)

console.log(girlsFriends)

const copyGirlsFriends = girlsFriends.slice()

console.log(copyGirlsFriends)

// Метод concat
// дозволяє обєднати кілька масивів в один
const parents = ["mum" , "dad"]
const sisters = ["Софія" , "Аня" , "Тоня"]
const brothers = ["Андрій" , "Юра"]

const family = sisters.concat(brothers,parents)
    console.log(family)

// Метод splice 
// дозволяє додавати , видаляти та оновлювати елемент у масиві

const fruits = ["banana" , "kiwi" , "peach" , "grapes"]

// Операція видалення

fruits.splice(1,2)
// перше число 1 - індекс елемента з якого видаляєм ,(друге число) 2 - вказує скільки видаляєм елементів
console.log(fruits)

// Операція додавання

fruits.splice(2, 0, "melon", "watermelon")
// Все що передається від 3-го аргумента у методі splice це елемент який ми хочемо додати в масив
console.log(fruits)

// Операція заміни

fruits.splice(2, 1,"kiwi", "lemon")

console.log(fruits)


// Створіть масив styles з елементами 'Джаз' i 'Блюз'. Додайте 'Рок-н-ролл' в кінець масиву.
//  Замініть значення в середині масиву на 'Класика'. 
//  Видаліть перший елемент масиву і покажіть його. Додайте 'Реп' і 'Реггі' на початок масиву.
//   Виведіть масив в консоль.

const styles = ["Джаз" , "Блюз"]
styles.push("Рок-н-ролл")
console.log(styles)
styles.splice(2, 1, "Класика")
console.log(styles)
styles.splice(0,1)
console.log(styles)
console.log(styles.splice(0,1))
styles.unshift("Реп" , "Реггі")
console.log(styles)


// Напиши скрипт який замінює регістр кожного символа в рядку на протилежний. 
// Наприклад, якщо рядок «JavaScript», то на виході повинно бути «jAVAsCRIPT».


const typeIn = prompt("будь ласка введіть слово")
const finaltypeResult = ""
for (let i = 0; i <typeIn.length; i++){
    if(typeIn[i] === typeIn[i].toLocaleLowerCase()){
        typeIn[i].toLocaleUpperCase
        finaltypeResult += typeIn[i].toLocaleLowerCase()
    }
    else{
        finaltypeResult += typeIn[i].toLocaleUpperCase
    }
}
console.log(finaltypeResult)