// // N1 funksiya yordamida kalkulyator yasash;
// let a = +prompt("birinchi sonni kiriting");
// let b = prompt("amalni kiriting");
// let c = +prompt("ikkinchi sonni kiriting");
// function calc (a) {
//     if (b == "+") {
//         natija = a + c;
//         console.log(natija);
//     }
//     else if (b == "-") {
//         natija = a - c;
//         console.log(natija);
//     }
//     else if (b == "*") {
//         natija = a * c;
//         console.log(natija);
//     }
//     else if (b == "/") {
//         natija = a / c;
//         console.log(natija);
//     }
//     else {
//         console.log("son va amal kiriting");
//     }
// }
// calc (a)


// // N2 switch yordamida kalkulyator.
// let 
// a = +prompt("birinchi sonni kiriting");
// let b = prompt("amalni kiriting");
// let c = +prompt("ikkinchi sonni kiriting");
// switch(b) {
//     case "+":
//      natija = a + c;
//      break;

//     case "-":
//      natija = a - c;
//      break;

//     case "*":
//      natija = a * c;
//      break;
//     case "/":
//      natija = a / c;
//     break;
// }
// console.log(natija);


// // N3  satr orasidagi bo'sh joylarni olib tashlash;
// let a = prompt("satr kiriting")
// let result = '';
// for(let i = 0; i < a.length; i++) {
//     if (a[i] !== ' ') {
//         result = result + a[i];
//     }
// }
// console.log(result);


// // N4  k sonini n marta chiqaradigan dastur;
// let k = +prompt("k sonini kiriting");
// let n = +prompt("n sonini kiriting");
// for (i = 1; i <= n; i++) {
//     console.log(k);
// }


// // N5  k dan n gacha bo'lgan sonlarni chiqaradigan dastur;
// let k = +prompt("k sonini chiqaring");
// let n = +prompt("n sonini kiritng");
// if (n > k) {
//     for (let i = k; i <= n; i++) {
//         console.log(i);
//     }
// }
// else {
//     for (let i = n; i <= k; i++) { 
//         console.log(i);
//     }
// }


// //N6  1 kilogirami 15 dollar bo'lgan shokaladni n kilogramgacha narxini chiqaradigan dastur;
// let n = +prompt("shokalad kilogiramini kiriting");
// for (let i = 1; i <= n; i++) {
//     let natija = 15*i;
//     console.log(i + " kilogrami "+ natija + " dollar");
// }


// // N7 sonni tub yoki murakkabligini aniqlaydigan dastur;
// let a = +prompt("sonni kiriting");
// let result = 0;
// for(let i = 1; i <= a; i++) {
//     if(a % i == 0) {
//         result = result + 1;
//     }
// }
// if(result == 2) {
//     console.log(a + " tub son");
// }
// else {
//     console.log(a + " murakkab son");
// }

