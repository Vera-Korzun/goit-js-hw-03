"use strict";
const findBestEmployee = function (employees) {
  let values = Object.values(employees);
  let keyMaxValue = "";
  let maxValue = values[0];

  for (const key in employees) {
    if (maxValue <= employees[key]) {
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
