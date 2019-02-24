// // khai bao bien
// const a = 5;
// let b = 12;
// var c = 34;
// console.log(b);


// // data type: undefined - null - string - number - boolean - object(Array, ) - Symbol(ES6)
// console.log(typeof b);


// //object

// //object(=dictionary)
// let obj = {a = 1,b = 2};
// console.log(obj.a + obj[1]);
// delete obj.a;

// //array
// let array = [1,"a",3];
// console.log(array.length);
// array.push("b");

// //primitive type extention
// (2.676767).toFixed(2);
// ("abc").toLowerCase;

// //date
// new Date("2/22/2018");
// const now = new Date();
// console.log(now);
// let date = now.date;
// let local = now.toLocaleDateString;

// //RegExr : test exception
// /([A-Z])\w+/.test("Abcd");

// //error

// //function
// //1 : runable without khaibao-ed
// function add(a = 2,b = 3){// 2,3 : default parameter
//     console.log(a + b);
//     return a + b;
// }
// add(3,4);
// //2
// const sum = function(a,b) {
//     console.log(a + b);
// }
// sum(1,2);
// //3
// const sum = (a,b) => {
//     console.log(a + b);
// }
// sum(1,2);




//Function Scope - var
// var a = 100;
// function print(){
//     var b =50;
//     console.log(a);// 100
//     console.log(b);// 50
// }
// console.log(a);// 100
// console.log(b);// undefined
// //Block( {} ) scope - let (const : Block scope)
// let a = 100;
// function print(){
//     let b =50;
//     console.log(a);// 100
//     console.log(b);// 50
//     if(true){
//         let c = 3;
//         console.log(c);
//     }
//     console.log(c)
// }
// console.log(a);// 100
// console.log(b);// undefined



// function countDown(num){
//     for(let i = num;i >= 0;i--){
//         setTimeout(function(){
//         console.log(i);
//         },1000*(num - i));
//     }
        
// }
// function print(num,waitTime){
    
// }
// countDown(10);


//clone deep
// obj1 = Object.assign({},obj2);

//call back
// console.log('a');
// function print(onWaitDone){
// setTimeout(function(){
//     console.log("b");
//     onWaitDone();
// })
// }
// print(function(){
//     console.log('c');
// })