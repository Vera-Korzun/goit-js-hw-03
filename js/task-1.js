"use strict";
//1) Советую использовать шаблонные строки( `Hello ${name}` )
//а не конкатенацию "Hello" + name

let message = "";
const user = {
  age: 20,
  hobby: "html",
  name: "Mango",
  premium: true,
};

user["mood"] = "happy"; // добавляет поле 'mood' со значением 'happy'
user["full time"] = true; // добавляет поле 'full time' со значением true
user.hobby = "skydiving"; // заменяет значение 'hobby' на 'skydiving'
user.premium = false; // заменяет значение 'premium' на false

const keys = Object.keys(user);
for (let key of keys) {
  message += `${key}:${user[key]}\n`;
} // в переменную message записывает содержимое объекта user:
// для переменной keys присваивает массив свойств объекта, используя метод Object.keys()
// с помощью оператора for...of
// в формате ключ:значение
// c переносом строки ('\n')

console.log(message);
/*
'age : 20 
hobby : skydiving 
name : Mango 
premium : false 
mood : happy 
"full time" : true 
' */
