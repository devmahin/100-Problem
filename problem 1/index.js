function arrayReplace (inputArray,replaceEle,substractionEle){
    inputArray.forEach((element, index)=> {
        if(element === replaceEle){
            inputArray[index] = substractionEle
        }
    })
console.log(inputArray)
}

arrayReplace([1,2,1],1,3)