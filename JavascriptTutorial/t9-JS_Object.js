//JS OBJECTS

let first_name = 'KL'
let last_name  = 'Rahul'

// Create
let virat_profile = {
	first_name:'Virat',
	last_name :'Kohli',
	age :32,
	team :'India',
	skill :['Batting', 'Bowling', 'Fielding'],
	full_name : function(){
					return `${this.first_name} ${this.last_name}`
				}
}

// Read
//console.log(virat_profile['team 1'])


// Modify
// virat_profile.height = "5.8"
// virat_profile.height = "5.8"
// virat_profile.height = "5.8"
// virat_profile.height = "5.8"

// console.log(Object.keys(virat_profile))
// console.log(Object.values(virat_profile))
// console.log(Object.entries(virat_profile))



let skills  = ['Batting', 'Bowling', 'Fielding']

//let copySkill = [...skills]
//let copySkill = Object.assign({}, skills)

//skills  = ['Batting', 'Bowling', 'Fielding', 'Reading']

// console.log(copySkill)
// console.log(skills)

skills.push('Reading')

console.log(copySkill)
console.log(skills)

