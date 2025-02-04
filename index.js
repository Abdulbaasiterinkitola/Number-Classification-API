import express from "express"
import cors from "cors"
import axios from "axios"
import {configDotenv} from "dotenv"

configDotenv()

const PORT = process.env.PORT || 3000
const app = express()

app.use(express.json())
app.use(cors())

//check for prime number
function is_prime(n) {
    
    if ((n< 2) || ((n > 2) && (n % 2 === 0))) {
        return false
    }
    else if (n = 2) {
        return true
    }
    for (let i = 3; i <= Math.sqrt(n); i += 2) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}

//check for perfect number
function is_perfect(n) {
    if (n < 2) {
        return false
    }
    let sum = 0
    for (let i = 1; i <= (n/2); i++) {
       if (n % i === 0) {
        sum += i
       }
    }
    return sum === n
}

//check for parity
function isOddOrEven(n) {
    return n % 2 === 0 ? "even" : "odd"
}

//check for armstrong number
function isArmstrong(n) {
    if (n<1) {
        return false
    }
    const digits = String(n).split("")
    const numOfDigits = digits.length
    const sum = digits.reduce((acc, digits) => acc + (Math.pow(Number(digits), numOfDigits)), 0)
    return sum === n
}

//sum of digits
function digit_sum(n) {
    const digits = String(Math.abs(n))
    if (n < 0) {
        const ans = digits
        .split("")
        .reduce((acc, digits) => acc + Number(digits), 0)
        return ans * -1    
}
    return digits
    .split("")
    .reduce((acc, digits) => acc + Number(digits), 0)}
    

//getting fun fact
const getFunFact = async(number) => {
    try {
        const response = await axios.get(`http://numbersapi.com/${number}/math`)
        return response.data
    } catch (error) {
        return "No fun fact available"
    }
}

//API endpoint
app.get("/api/classify-number", async (req, res) => {
    const {number} = req.query
    if ((number === "") || isNaN(number)) {
    return res.status(400).json({
        number: number || "undefined",
        error: true
    })
}

const num = Number(number)
const properties = []
if (isArmstrong (num)) {
    properties.push("armstrong")
}
properties.push(isOddOrEven(num))

const fun_fact = await getFunFact(num)

res.status(200).json({
    number: num,
    is_prime: is_prime(num),
    is_perfect: is_perfect(num),
    properties,
    digit_sum: digit_sum(num),
    fun_fact: fun_fact
})
})



app.listen(PORT, () => {
    console.log(`server started on port ${PORT}`);    
})