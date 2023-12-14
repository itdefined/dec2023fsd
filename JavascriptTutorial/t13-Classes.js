// Class is a blueprint to Create Objects


class PersonProfile {
	constructor(fn, ln, age, city){
		this.first_name = fn
		this.last_name = ln
		this.age = age
		this.city = city
		this.country = "India"
	}

	getDetails(){
		console.log(`${this.first_name} ${this.last_name} is ${this.age} years old, he lives in ${this.city}`)
	}

	static bluePrintDetails(){
		console.log("Here is the Class details")		
	}
}


sachin_profile = new PersonProfile("Sachin", "Tendulkar", 40, "Mumbai")
viart_profile = new PersonProfile("Sachin", "Tendulkar", 40, "Mumbai")

