console.log("Задание 1")
let mounth = 5 // prompt(`Введите число от 1 до 12`);
console.log(mounth); 
let mounths = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
console.log(mounths[mounth - 1]);

console.log(`Задание 2`)
let dostavka = 350
let tovar1 = [15000, `Процессор`, dostavka]
let tovar2 = [25000, `Видеокарта`, dostavka]
let tovar3 = [5000, `Блок питания`, dostavka]
let sum = tovar1[0]+tovar2[0]+tovar3[0]
console.log(sum)
console.log(tovar1[2]+tovar2[2]+tovar3[2]+tovar1[0]+tovar2[0]+tovar3[0])
console.log(`Общая сумма товара ${sum}`)

console.log(`Задание 3`)
let arr = [25, 30, 6, 9, 8]
console.log(`Максимальное число из массива [25, 30, 6, 9, 8] равно ${Math.max(...arr)}`)
console.log(`Минимальное число из массива [25, 30, 6, 9, 8] равно ${Math.min(...arr)}`)

console.log(`Задание 4`)
arr1 = [
    Math.floor(Math.random()*10+1),
    Math.floor(Math.random()*10+1),
    Math.floor(Math.random()*10+1),
    Math.floor(Math.random()*10+1),
    Math.floor(Math.random()*10+1),
];
console.log(arr1);
console.log(arr1.sort(function(a, b){return a - b}))
console.log(arr1.sort(function(a, b){return b - a}))

console.log(`Задание 5`)
arr2 = [ "Hi", "Hello", "Bonjour"];
console.log(arr2)
arr2.push(`Hola`)
console.log(arr2)

console.log(`Задание 6`)
let a = ['a', 'b', 'c'];
let b = [1, 2, 3];
console.log(`Массив a = ${a}`)
console.log(`Массив b = ${b}`)
console.log(a.concat(b));

console.log(`Задание 7`)
arr3 = [1,2,3]
console.log(arr3.reverse())

console.log(`Задание 8`)
const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits)
console.log(fruits.includes(`Banana`));

console.log(`Задание 9`)
const array = [2, 5, 9];
delete array[1]
console.log(array)