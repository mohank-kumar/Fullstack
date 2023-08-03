// console.log(typeof true);
// let javascript='fun'
// console.log(javascript);

// javascrip='script';
// console.log(typeof javascript);

// let year;
// console.log(year);
// year=2023
// console.log(year);

// // let, var, const
// // let 
// let name= 'mohan'
// console.log(name);
// // in let we can change the values assigned 
// // eg (name = mohan) 
// //name = mk 
//  name='mk'
// console.log(name);
// // const 
// const PI=3.14

// console.log(PI);
// // in const we have to initilize the value  
// const job;
// console.log(job);
// operators
// const age = 2045
// const mohan= age-2003
// const mk = age-2001
// console.log(mohan,mk);
// console.log(mohan*2,mk*3, 2**5);
// // ** = power eg 2 to the power of 5
// let firstName= 'mohan'
// let lastName='kumar'
// console.log(firstName+ ' ' +lastName);
//  let x=20+4
//  x+=45;
//  x*=3
//  x++
//  x--
// //  x+=45 means x=x+45 
//  console.log(x);
// comprasion operator 

// let mohan = 45 
// let mk = 45
// console.log(mohan <= mk);

// let massmark = 89
// let heightmark = 1.98
// let massjohn =98
// let heightjohn = 1.74
// let BMImark=massmark/(heightmark*heightmark)
// let BMIjohn=massjohn/(heightjohn*heightjohn)
// console.log(BMIjohn,BMImark);

// strings 
// let firstName='mohan'
// let job = 'student'
// let birthyear =2003 
// let year = 2023
// let info ="i'm" +' '+ firstName +' a'+' ' + (year-birthyear) + ' ' +'years old ' +' ' +job
// console.log(info);

// // template litrals 
// let infonew =`i'm ${firstName} a ${year-birthyear} years old ${job}`
// console.log(infonew);
// // multi line string using template 
// console.log(`string
// with 
// multi
// line `);
// // if else 
// let age =17
// if (age >= 18) {
//     console.log('you can drive ');
// } else {
//     let yearleft=18-age
//   console.log(`wait for another ${yearleft} years`);
// }

// let birthyear= 2075
// let century
// if (birthyear<=2000) {
//    century=20
// }else{
//   century=21
// }
// console.log(century);

// type conversion and coercion
// let year = '1993'
// console.log(Number(year)+67);
// console.log(year + 56);
// // console.log(Number('mohan')); excute NaN
// console.log(typeof NaN);
// console.log(String(34));
// console.log('34'*'83'*98);
// console.log('34'%'83'%98);
// let n= '1'+1
// n=n-1
// console.log(n);

// 5 false value = (0,'',undefind,null, NaN)
// console.log(Boolean(0));
// console.log(Boolean(''));
// console.log(Boolean(undefined));
// console.log(Boolean(null));
// console.log(Boolean(NaN));
 
// equality operator == vs ===
// const age=18
// if (age==18)
//  console.log('you become adult');
//  console.log(18===18);
//  console.log('18'===18);
//  console.log('18'==18);
// ==loose equlity 
// === strict equality

// const favour=Number(prompt('what is your favourite num'))
// console.log(favour);
// if (favour>=34) {
//     console.log('it is a cool number');
// } else if (favour<34){
//     console.log('it is less than 34');
// } else {
//     console.log(`it's not either 34 or 9`);
// }

// switch statement
// const days = 'thuesday'
// switch (days) {
//     case 'monday':
//         console.log(`it's monday`);
//         break;
//     case 'thuesday':
//         console.log(`it's thuesday`);
//         break;
//     case 'wednesday':
//         console.log(`it's wednesday`);
//         break;
//     case  'thursday':
//         console.log(`it's thursday`);
//         break;
//         default:
//             console.log('enter valid detail');
//         break;
//  }

// let day = 'friday'
// if (day=== 'monday') {
//     console.log('monday');
// } else if (day==='thursday') {
//     console.log('thursday')
// } else if (day==='wednesday'){
//     console.log('wednesday');
// } else if (day==='friday'){
//     console.log('friday');
// }  else {
//     console.log('enter the valid detail');
// }

// // conditional operator or ternary operator 
// const age =19
// age > 18 ? console.log(`i'm above 18`) : console.log(`i'm below 18`) 
// let ag = 4
// let drink = ag >= 18 ? 'wine' : 'water'
// console.log(drink);
 
// var num =45 
// num=65
// function print() {
//     var square= num+num
//     console.log(square);
// }
// print()
// console.log(num);

//  let num =34 
//  num =54
//  num=65
//  function print() {
//     let add = 34+34
//     console.log(add);
//  }
//  print()
//  console.log(num);

// const num=34
// num =75
// function print(params) {
//     const add =45+46

//     console.log(add);
// }
// print()

// Function 
// function fruitprocessor (apples,oranges){ 
//     const juice=`juice with ${apples} apples and ${oranges} oranges`
//     return juice
// }
// const applesjuice=fruitprocessor(5,9)
// console.log(applesjuice);

// function process(name,last) {
//     const detail =`my name is ${name} ${last}`
//     return detail
// }
//  const cat = process(7,9)
//  console.log(cat);
 
