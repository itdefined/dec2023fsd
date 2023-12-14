
// let team_a = ['ind','aus','jap','chn','uk','usa']
// let team_b = ['uk','usa','can','chl','aus','ind','uk','usa']


// let Team_A = new Set(team_a)
// let Team_B = new Set(team_b)

// let a_intersection_b = team_b.filter(el => team_a.includes(el))

// a_intersection_b = new Set(a_intersection_b)

// console.log(a_intersection_b)

// //let team_b = ['uk','usa','can','chl','aus','ind']
// // let team_union = new Set([...team_a, ...team_b])


// Map

// let States = [
// 	["Assam", "Dispur"],
// 	["Meghalaya", "Shilong"],
// 	["Sikkim", "Gangtok"],
// 	["UK", "Dehradun"]]

// st = new Map(States)

// console.log(st)

//Structuring and Destructuring

// let x = [1, 2, 3, 4, 4, 4, 4, 4]

// let [one, two, ...c] = x

// let y = 
// console.log(...x)


// let Tools = [
// 		["Git","AWS","Jenkins","Docker","K8s"],
// 		["HTML","CSS","JS","React","NOde"],
// 	]

// let [Deveops, FSD] = Tools

// console.log(Deveops)

// let virat_profile = {
// 	first_name:'Virat',
// 	last_name :'Kohli',
// 	age :32
// }

let Tools = [
		["Git","AWS","Jenkins","Docker","K8s"],
		["HTML","CSS","JS","React","NOde"],
	]


for (let [tool1, tool2, tool3, tool4, tool5] of Tools)
{
	console.log(`tool1 ==> ${tool1}`)
	console.log(`tool5 ==> ${tool5}`)
}
