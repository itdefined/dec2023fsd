// // class Vehicle {
// // 	constructor(wheels){
// // 		this.wheels = wheels
// // 	}
// // }

// // class Car extends Vehicle{
// // 	constructor(wheels, airbags){
// // 		super(wheels)
// // 		this.airbags = airbags
// // 	}
// // }

// // //let v1 = new Vehicle(8)


// // let c1 = new Car(6, 6)
// // console.log(c1.wheels)

class Father {
	constructor(){
		console.log("Hello Father!!")
	}


	details(){
		console.log(this)
	}
}

class Son extends Father{
	constructor(bike, car){
		super(bike)
		this.car = car
	}

	details(){
			sadsadsa
	}

	upgrade(new_bike, new_house){
		this.bike = new_bike
		this.house = new_house
	}
}
// let S2 = new Son("Honda", "BMW") 
// OOPs
// 	1. Inheritance
// 	2. Overriding


// class Person {
// 	constructor(){
// 		this.currentLocation = "Bangalore"
// 	}


// 	getCurrentLocation(){
// 		return this.currentLocation		
// 	}

// 	moveTOLocation(location){
// 		this.currentLocation = 	location
// 	}
// }

// let Sachin = new Person()
// let Ramesh = new Person()
// let Tendulkar = new Person()


// Sachin.moveTOLocation('Mumbai')

// console.log(Sachin.getCurrentLocation())
// console.log(Ramesh.getCurrentLocation())
// console.log(Tendulkar.getCurrentLocation())
