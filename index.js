
const colors = require("colors/safe")

const start = process.argv[2]
const end = process.argv[3]
let arr = []
let counter = 0


const checkThisNumber = number => {
    for(let i = 2; i <= number / 2; i++) {
        if(number % i === 0){
            return false
        }
    }
   return true
}

const searchPrimeNumber = () => {
    if(Number(start) && Number(end)){
        for(let i = start; i <= end; i++){
            arr.push(i)
        }

        arr = arr.filter((elem) => {
            return checkThisNumber(Number(elem))
        })
        
        arr.forEach((elem, index) => {
            switch(Number(counter)){
                case 0:
                    counter++
                    console.log(colors.green(elem))
                    break
                case 1:
                    counter++
                    console.log(colors.yellow(elem))
                    break
                case 2:
                    counter = 0
                    console.error(colors.blue(elem))
                    break
            }
        })
    } else{
        return console.error(colors.red(`This "${start}, ${end}" arguments not number`))
    }
}

searchPrimeNumber()

