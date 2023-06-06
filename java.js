//ngacha bo'lgan sonlarni chiqarish

// let n = 10;
// let  b= [];
// for (let i = 0; i <= n; i++) {
//   b.push(i)
   
// }
// console.log(b);


// let n =10;
// let arr =[];
// let juft =[];
// let toq =[];
// for (let i = 1; i <= n; i++) {
//        arr.push(i);
//              if (i % 2 == 0) {
//                 juft.push(i)            
//              }else{
//               i % 2 == 0
//                 toq.push(i)
//              }
// }
// console.log(arr);
// console.log(juft);
// console.log(toq);

// let A = [1,2,3,4,5,3];
// let sum = 0;
// for (let i = 0; i < A.length; i++) {
//   sum += A[i];
// }
// console.log(sum);

//misol remove("hello!!"); hello!
//misol remove ("salom")   salom
// function removeLastEl (str) {
//   if (str.slice(-1)  === "!") {
//     return str.slice(0,-1)
//   }else{
//     return str
//   }
      

// }
// console.log(removeLastEl("hello1!!!"));

//juftlarini va toqlarining yig'indisini hisoblash

// let arr = [1,2,3,4,5];
// function x(arr) {
//   let arr1 = 0;
//   let arr2 = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 == 0) {
//       arr1 += arr[i];
//     }else{
//       arr2 += arr[i];
//     }   
//   }
//   return [arr1,arr2];
// }
// console.log(x(arr));



// let str = "Robert Sharma"
// console.log(str.split(" "));

// string raqamlarni hisoblash

// let someArr = [1,"olma", "anor",2, 4];
// function checkTypeof(arr) {
// let sum = 0;
// for (let i = 0; i < someArr.length; i++) {
//             //console.log(someArr[i]);
//             if (typeof someArr[i] == `number` ) {
//               sum += someArr[i]
//             }
// }
//      return sum;
// }

// console.log(checkTypeof(someArr));


// function encode(str) {
//   let result = "";
//   for (let i = 0; i < str.length; i++) {
//     let charCode = str.charCodeAt(i)-10;
//     if (charCode<97) {
//       charCode = 123 -(97-charCode);
//     }
//     result +=
//     String.fromCharCode(charCode);
//   }
//     return result
// }
// function decode(str) {
//   let result = "";
//   for (let i = 0; i < str.length; i++) {
//     let charCode = str.charCodeAt(i)+10;
//     if (charCode> 122) {
//       charCode = 96 +(charCode-122);
//     }
//       result +=
//       String.fromCharCode(charCode); 
//   }
//   return result;
// }
// console.log(encode("xabar"));
// console.log(decode("qarsik"));

// PROMPDA so'zlarni teskarisigaaylantirish

// let s = prompt ("So'zni kiriting");
// let words = s.split(" ");
// let  reverse_s = words.reverse().join(" ");
// console.log(reverse_s);

// n butoun son berilgan n gacha butun son butun sonlarni ko'paytmasini topuvchi dasturni toping
// function namber(num) {
//   //let  number = 5;
// let x=1;
// for (let i = 1; i <= num; i++) {
//   x*=i 
// }
// return x
// }
// console.log(namber(6));
