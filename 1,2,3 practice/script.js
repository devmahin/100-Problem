// function arrayToReplace (element,elementToReplace,SubstractiopElem){
//     element.forEach((val,index) => {
//         if(val === elementToReplace){
//             element[index] = SubstractiopElem
//         }
//     })
//     return element;

// }
// let replecElem = arrayToReplace([1,2,1],1,3);
// console.log(replecElem)


// function sum(parent1,parent2){
//     return parent1 + parent2
// }
// const TwoNumbers = sum(1,2)
// console.log(TwoNumbers)



// function element (...rest){
//     let total = 0;
//     rest.forEach((val,index) => {
//         total += val;
//     })
//     return total
// }

// let sum = element(10,20,2,30)
// console.log(sum)




// function addBorder (picture){
//         let arrayPush = "*".repeat(picture[0].length + 2)
//         picture.push(arrayPush)
//         picture.unshift(arrayPush)
//         for(i=1; i< picture.length -1 ; i++){
//             picture[i] = "*".concat(picture[i],"*")
//         }
//         return picture
// }

// let picture = addBorder(["abc2hgghughj","degergerg32f"])
// console.log(picture)


// function sequence (...rest){
//     for(i=0; i< rest.length;i++){
//         // console.log(rest[i] -1)
//         if(rest[i]<rest[i -1]){
//             return false
//         }
//     }
//     return true
// }

// console.log(sequence(1,2,3,4,5,7))
// console.log(sequence(1,2,3,4,5,7,1))


