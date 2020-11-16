"use strict";
const countTotalSalary = function (employees) {
  let values = Object.values(employees);
  //console.log(values);
  let sum = 0;
  //console.log(Object.values(employees));
  for (let i = 0; i < values.length; i += 1) {
    sum += values[i];
    //console.log(sum);
  }
  return sum;
};

// Объекты и ожидаемый результат

console.log(countTotalSalary({})); // 0

console.log(
  countTotalSalary({
    mango: 100,
    poly: 150,
    alfred: 80,
  })
); // 330

console.log(
  countTotalSalary({
    kiwi: 200,
    lux: 50,
    chelsy: 150,
  })
); // 400

const developers = {
  mango: 300,
  poly: 250,
  alfred: 450,
};

console.log(countTotalSalary(developers));
// 1000

const supports = {
  kiwi: 200,
  lux: 150,
  chelsy: 150,
};
console.log(countTotalSalary(supports));
// 500

// Напиши функцию countTotalSalary(employees) принимающую объект зарплат.
// Функция считает общую сумму зарплаты работников и возвращает ее.
// Каждое поле объекта, передаваемого в функцию, имеет вид "имя": "зарплата".
