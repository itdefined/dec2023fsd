/*
Data Types
Variables: Containers to hold some value in js
           depending on characteristic of the dat variables
           types are difened

Data types can be classified in 2 types
	1. Primitive Data Types
	2. Non-Primitive Data Types
*/

/* Primitive Data Types

1. Numbers 		==> Integers and Floats
2. Strings 		==> '', ``, ""
3. Boolean 		==> true, false
4. Null    		==> Empty or no value
5. Undefined	==> without a memory location and value

 */

// Numbers 
let num1 = 30
let num2 = 30.56544
const pi = 3.142


// Strings

let var_blank = ''
let var_space = ' '
let var_first_name = 'Sachin'
let var_last_name = "Tendulkar"
let var_team = `Mumbai`
let var_age = 40
let var_bio1 = 'Sachin Ramesh Tendulkar, is an "Indian" former'
let var_bio2 = 'Sachin Ramesh Tendulkar, is an \'Indian\' former'
let var_bio3 = "Sachin Ramesh Tendulkar, is an 'Indian' former"
let var_bio4 = `Sachin Ramesh Tendulkar, is an 'Indian' former`
let var_bio5 = `Sachin Ramesh Tendulkar, is an "Indian" former`
let var_bio6 = 'Sachin \n Ramesh \t Tendulkar, \\ is an \'   \" Indian former'

var_bio6 = `${var_first_name} ${var_last_name} is ${var_age} years old and he is from ${var_team} team`

//console.log(var_bio6)

let full_name = "            Sachin Ramesh Tendulkar         "
// console.log(full_name.length)

// console.log(full_name.substr(0,6))
// console.log(full_name.substr(7,6))
// console.log(full_name.substring(7,12))

let out = full_name.trim()



let news = `Asian Qadsd 6 Games 2023 Day 6`

// out = news.includes('Live Updates')
// out = news.replace('Asian', 'Indian')
// out = news.replaceAll('Asian', 'Indian')
// out = news.charCodeAt(21)
// out = news.lastIndexOf('Days')
// out = news.startsWith('Day 6')
// out = news.endsWith('Day 6')


out = news.search(/Games/)
console.log(out)


// indexOf
// lastIndexOf

// includes

// startsWith
// endsWith 

// search
// match
