"use strict";
const findBestEmployee = function (employees) {
  let keys = Object.keys(employees); //получаем массив с ключами объекта employees
  if (keys.length === 0) {
    return "";
  } // проверка, что массив не пустой
  let keyMaxValue = keys[0]; //присваиваем keyMaxValue знаение элемента массива с ключами объекта employees
  let maxValue = employees[keys[0]]; //присваиваем maxValue знаение ключа объекта employees
  //console.log(maxLength);
  for (const key in employees) {
    if (maxValue < employees[key]) {
      maxValue = employees[key];
      keyMaxValue = key;
    }
  }
  return keyMaxValue;
};

// Объекты и ожидаемый результат
const developers = {
  ann: 29,
  david: 35,
  helen: 1,
  lorence: 99,
};

console.log(findBestEmployee(developers));
// 'lorence'

const supports = {
  poly: 12,
  mango: 17,
  ajax: 4,
};
console.log(findBestEmployee(supports));
// 'mango'

const sellers = {
  lux: 147,
  david: 21,
  kiwi: 19,
  chelsy: 38,
};
console.log(findBestEmployee(sellers));
// 'lux'

// Напиши функцию findBestEmployee(employees),
//     которая принимает объект сотрудников и возвращает имя
// самого продуктивного(который выполнил больше всех задач).
// Сотрудники и кол - во выполненных задач содержатся как свойства
// объекта в формате "имя": "кол-во задач".
