
let obj = function () {
}; 

obj.prop1 = 2;
obj.prop3 = 90;
obj.prop23 = 790;
obj.prop33 = 7;
obj.prop40 = 88;
// obj.66 = 50;

let arr = {
    "prop1": 2, 
    "prop3" : 90, 
    "prop23": 790, 
    "prop33": 7, 
    "prop40": 88,
    66: 50,
};

let setArr = [
    2, 90, 790, 7, 88,
]

for (let i in obj) {
    // Prints all the keys in
    // obj1 on the console
    console.log(i);
}

for (let j in setArr) {
    console.log(j);
}

for (let k in arr) {
    console.log(k);
}

// перебор по ключам (овощи)
// for (let vegetable of recipeMap.keys()) {
//     alert(vegetable); // огурец, помидор, лук
// }

// // перебор по значениям (числа)
// for (let amount of recipeMap.values()) {
//     alert(amount); // 500, 350, 50
// }

// // перебор по элементам в формате [ключ, значение]
// for (let entry of recipeMap) { // то же самое, что и recipeMap.entries()
//     alert(entry); // огурец,500 (и так далее)
// }

// выполняем функцию для каждой пары (ключ, значение)
// recipeMap.forEach((value, key, map) => {
//     alert(`${key}: ${value}`); // огурец: 500 и так далее
// });


// let map = new Map();

// map.set("1", "str1");    // строка в качестве ключа
// map.set(1, "num1");      // цифра как ключ
// map.set(true, "bool1");  // булево значение как ключ

// // помните, обычный объект Object приводит ключи к строкам?
// // Map сохраняет тип ключей, так что в этом случае сохранится 2 разных значения:
// alert(map.get(1)); // "num1"
// alert(map.get("1")); // "str1"

// alert(map.size); // 3

// let map = 

// Map и Set
// Сейчас мы знаем о следующих сложных структурах данных:

// Объекты для хранения именованных коллекций.
// Массивы для хранения упорядоченных коллекций.
// Но этого не всегда достаточно для решения повседневных задач. Поэтому также существуют Map и Set.

// Map
// Map – это коллекция ключ/значение, как и Object. Но основное отличие в том, что Map позволяет использовать ключи любого типа.

// Методы и свойства:

// new Map() – создаёт коллекцию.
// map.set(key, value) – записывает по ключу key значение value.
// map.get(key) – возвращает значение по ключу или undefined, если ключ key отсутствует.
// map.has(key) – возвращает true, если ключ key присутствует в коллекции, иначе false.
// map.delete(key) – удаляет элемент по ключу key.
// map.clear() – очищает коллекцию от всех элементов.
// map.size – возвращает текущее количество элементов.


// let prices = {
//     banana: 1,
//     orange: 2,
//     meat: 4,
//   };
  
//   let doublePrices = Object.fromEntries(
//     // преобразовать в массив, затем map, затем fromEntries обратно объект
//     Object.entries(prices).map(([key, value]) => [key, value * 2])
//   );
  
//   alert(doublePrices.meat); // 8

// let user = {
//  name: "Вася"
// };

// let id = Symbol("id");

// user[id] = 1;

// alert( user[id] ); // мы можем получить доступ к данным по ключу-символу