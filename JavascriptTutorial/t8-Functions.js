// function
// 		==> Its a Resusable block of code

// function <name>(){
	
// }


// ExternalVAriable = 250

// function getDate(){
// 	let out = ExternalVAriable
// 	console.log(out)		
// }


// function calcSquare(){
// 	let out  = []
// 	for (let data of arguments)
// 	{
// 		console.log(out)
// 		out.push(data ** 2)
// 	}
// 	return out
// }


// let out1 = calcSquare(10, 20, 30, 40, 50)

// console.log(out1)



// function
// 	function <name> ()
// 	{

// 	}

// function with return 
// 	function <name> ()
// 	{
// 		return <value>
// 	}


// function with arguments
// 	function <name> ()
// 	{
// 		return <value>
// 	}

// function_name(1,2,3,4)


// function performSomething()
// {
// 	return  
// 	10
	
// }

// let out = performSomething()
// console.log(out)


// function greatestOf3(num1, num2, num3)
// {
// 	let out = num3
// 	if (num1 > num2 && num1 > num3) {
// 		out = num1
// 	} else if (num2 > num1 && num2 > num3) {
// 		out = num2
// 	}
// 	return out

// 	let out = arguments[0]
// 	for (let x in arguments.length-1)
// 	{
// 		if (out > arguments[x+1])
// 		{
// 			out = arguments[x]
// 		}
// 		else
// 		{
// 			out = arguments[x+1]
// 		}
// 	}
// }


// function function_name (){

// }

// 1. return optional
// 2. parmeters/arguments optional
// 3. 


// function votersList(name, age=25, age=25, age=25, age=25){
// 	console.log(`Name: ${name}, Age: ${age}`)
// }

// votersList('Virat', 32)

// votersList('Subhman')


// let something = function (user){ 
// 					console.log(`hello ${user}`)
// 				}


// something('Sachin')

// function calCube(num)
// 	{ 
// 		console.log(num ** 3)
// 	}




// let cube = (function (num){ return num ** 3})()

// console.log(cube)


//Arrow Function

// function calcSquare(num){
// 	return num ** 2
// }

// let sumArray = (...args) => {
// 	let out = 0
// 	for (let el of args){
// 		out +=el
// 	}
// 	return out
// }

// console.log(sumArray(20, 30, 80))





function greatestOfAll()
{
	let out = arguments[0]
	for (let x = 1; x < arguments.length;x++)
	{
		if (out <= arguments[x]) out = arguments[x];
	}
	return out
}

let output = greatestOfAll(1, 0, 29, 31, 14, 2)

console.log(output)


	// for (let x = 1; x < arguments.length;x++)
	// {
	// 	if (parseInt(out) <= parseInt(arguments[x]))
	// 	{
	// 		out = parseInt(arguments[x])
	// 	}
	// }
	// return out