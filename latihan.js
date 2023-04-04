// no 1
const rand = (min, max) => {
    if(min == null && max == null){
        return 0
    } else if(max == null){
        max = min
        min = 0
    } 

    return Math.floor(Math.random() * (max - min) + min);
}

console.log(rand(2 , 8))

// no 2
const chooseDecimals = (n , d) =>{
    return Number.parseFloat(n).toFixed(d);
}

console.log(chooseDecimals(2.32222, 3))

// no 3
const isItNumeric = (x) => {
    if (isNaN(x)){
        return false
    }
    
    return true
}

console.log(isItNumeric("2a"))

// no 4
const roundUpToFive = (num) =>{
    return Math.ceil(num/5) * 5
}

console.log(roundUpToFive(22))



