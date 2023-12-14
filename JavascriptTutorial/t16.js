// Promises

// function checkBanlance(){
// 	function time_taking_function(){
// 		console.log("Money")
// 		console.log("Thank you")
// 	}
// 	console.log("Checking ur balence")
// 	time_taking_function()
// }

// console.log("Enter the amount you want")

// setTimeout(checkBanlance, 3000)

// Callback
// Promise
// Async / Await



// console.log("Enter the amount you want")
// setTimeout(()=>console.log("Pls wait...."), 3000)
// console.log("Some Action")





// let promise = new Promise((resolve, reject) => 
// {
// 	setTimeout(()=>resolve(console.log("Pls wait....")), 3000)
// })

// promise
// 	.then(()=>console.log("Some Action"))
// 	.then(()=>console.log("Some Action2"))
// 	.then(()=>console.log("Some Action3"))
// 	.then(()=>console.log("Some Action4"))
// 	.then(()=>console.log("Some Action5"))
// 	.then(()=>console.log("Some Action6"))


// async function asyncFunc(){
// 	await promise
// 	console.log("Some Action")
// 	console.log("Some Action2")
// 	await promise2
// 	console.log("Some Action4")
// 	console.log("Some Action5")
// }

// console.log("Enter the amount you want")
// asyncFunc()

// let promise = new Promise((res, rej) => 
// {
// 	let theFileUploaded = false

// 	if (theFileUploaded){
// 			resolve(console.log("The file has been uploaded"))	
// 	}
// 	else{
// 			reject(console.log("Error is uploading file"))
// 	}	
// })

// promise
// 	.then(()=>console.log("Pleas check ur gallery"))
// 	.catch(()=>console.log("SPlease try again!!"))


let x = (resolve, reject)=> setTimeout(reject, 8000, "Hello1")


let promise1 = new Promise(x)


let p = Promise.resolve(10)

let promise3 = new Promise((resolve, reject)=>
	setTimeout(reject, 3000, "Hello3"))


let promise4 = new Promise((resolve, reject)=>
		setTimeout(resolve, 6000, "Hello4")
)

// Promise.race([promise1, promise3, promise4]).then((out)=> console.log(out)).catch((err)=> console.log(err))


//Promise.allSettled([promise1, promise3, promise4]).then((out)=> console.log(out)).catch((err)=> console.log(err))

Promise.allSettled([promise1, promise3, promise4]).then((out)=> console.log(out)).catch((err)=> console.log(err))
