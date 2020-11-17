"use strict";
function getAllPropValues(array, prop) {
  // Write code under this line
  let newAraay = [];
  for (const item of array) {
    if (item[prop]) {
      newAraay.push(item[prop]);
    }
  }
  return newAraay;
}

// Объекты и ожидаемый результат
const products = [
  { name: "Радар", price: 1300, quantity: 4 },
  //{ name: "Радар", price: 1280, quantity: 2 },
  //{ name: "Радар", price: 1320, quantity: 1 },
  { name: "Сканер", price: 2700, quantity: 3 },
  //{ name: "Сканер", price: 2500, quantity: 3 },
  { name: "Дроид", price: 400, quantity: 7 },
  { name: "Захват", price: 1200, quantity: 2 },
];

console.log(getAllPropValues(products, "name"));
// ['Радар', 'Сканер', 'Дроид', 'Захват']
// ['Радар', 'Радар', 'Радар', 'Сканер', 'Сканер', 'Дроид', 'Захват']

console.log(getAllPropValues(products, "quantity"));
//[4, 3, 7, 2];
// [4, 2, 1, 3, 3, 7, 2]

console.log(getAllPropValues(products, "category"));
//  []

// Напиши функцию getAllPropValues(arr, prop), которая получает массив объектов и имя свойства.
// Функция возвращает массив значений определенного свойства prop из каждого объекта в массиве.
// Используй метод push для добавления значения в массив и оператор in для проверки наличия
// свойства в объекте.
