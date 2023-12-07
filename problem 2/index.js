function sum(parmeter1, parmeter2){
    return parmeter1 + parmeter2
    
}
console.log(sum(1,2))

function parmeter(...parmeter){
    let total =0;
        parmeter.forEach((val) => {
            total += val
        })
        return total

}
console.log(parmeter(13,45,64,3323,3434,34))