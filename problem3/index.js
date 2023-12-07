function addborder (picture){
    let well = "*".repeat(picture[0].length + 2)
    picture.unshift(well)
    picture.push(well)

    for(i=1; i<picture.length - 1; i++){
        picture[i] = "*".concat(picture[i] , "*")
    }

    return picture
}
console.log(addborder(["abc","def"]))