//------------------------ 555555555555555
// function primeSum (num){
//     let totalnum = 0;
//     for(let i = 2; i <= num; i++){
//         for(var j = 2; j <= num; j++){
//             // console.log(j)
//             // console.log(i)
//             if(i === j){
//                 totalnum+= i

//             }
             
   
//         }
//         if(i % j === 0){
//             break;
//         }
      
//     }
//     return totalnum;
// }

// let prime = primeSum(5)
// let prime2 = primeSum(50)
// console.log(prime2)
// console.log(prime)















/////-------------------------------------------7
// ****
// ****
// ****
// ****
// ****
// let rows = 5;
// let col = 4;
// function reactangle(){
//     let start = "";
//     for(let i=1; i<=rows; i++){
//         for(let j=1; j<=col; j++){
//             // console.log(i)
//             // console.log(j)
//             start += "*";
//         }   
//         start += "\n"
//     }
//     return start;
// }
// let rect = reactangle()
// console.log(rect)



// ****
// *  *
// *  *
// *  *
// ****

// let rows = 5;
// let col = 4;
//     let start = "";
//     for(let i=1; i<=rows; i++){
//         for(let j=1; j<=col; j++){
//             // console.log(i)
//             console.log(j)
//           if(j==1 || j === col){

//             start += "*";
//           }
//           else if(i==1 || i=== rows){
//             start += "*";
//           }else{
//             start += " ";
//           }
//         }   
//         start += "\n"
//     }

// console.log(start)



// let rows = 5;

// let start = "";
//     for(let i=rows; i >= 1; i--){
//         for(let j =1; j<=i;j++ ){

//             console.log(j)
//             start += "*";
//         }
//         start += "\n"
//     }
//     console.log(start)














////=========================================8============
function sortDeghit (num){
    let array = num.toString().split("").sort();
    
    let sum = Number(array[0] + array[3]) + Number(array[1] + array[2])
    return sum
}
let result = sortDeghit(2311)
console.log(result)