var message:string = "Hello Ajith" 
var number1 : number = 12;
console.log(message)
console.log(number1);

class Greeting {
	greet(): void {
	console.log("Hello Greeting !!")
}
}

let greetObj = new Greeting();
greetObj.greet();


var name1 : string = "John";
var score1 : number =  50;
var score2 : number = 42.50;
var sum = score1 + score2;

var str = "1";
var str2 : Number = <Number> <any> str

console.log(str2);

console.log("name", name1);
console.log("first score: "+score1) 
console.log("second score: "+score2) 
console.log("sum of the scores: "+sum)

// Variables
console.log("Section VARIABLES")
var global_num = 12          //global variable 
class Numbers { 
   num_val = 13;             //class variable 
   static sval = 10;         //static field 
   
   storeNum():void { 
      var local_num = 14;    //local variable 
   } 
} 
console.log("Global num: "+global_num)  
console.log(Numbers.sval)   //static variable  
var obj = new Numbers(); 
console.log("Global num: "+obj.num_val) 



//Chapter 7 : Operators
console.log('Chapter 7 : Section Operators');
var x: Number = 4;
var y = -x
console.log("Y value", y)

var msg : String = "hello" + "world";
console.log(msg);

var num = -2
var result = num > 0 ? "positive" : "false"
console.log(result)

//typeof Operator
var num1 = "12";
console.log(typeof num1)

//Chapter 8 : Decision Making
/**
 * 1. if else
 * 2. switch case
 */
console.log("Chapter 8 : Decision Making ");

/**
 * for loop
 * while loop
 * do .. while loop * 
 */
console.log("Chapter 9 : Loops");
var i:number = 1 
while(i<=10) { 
   if (i % 5 == 0) {   
      console.log ("The first multiple of 5  between 1 and 10 is : "+i) 
      break     //exit the loop if the first multiple is found 
   } 
   i++ 
}  //outputs 5 and exits the loop


/**
 * 
 */
console.log("Chapter 10 : Functions")

function disp_details(id:Number, name : String, mail_id? : String) {
	console.log("Id :", id);
	console.log("Name :", name);

	if(mail_id != undefined) {
		console.log("Email Id", mail_id)
	}
}


disp_details(123, "Ajith");
disp_details(111, "ajith", "ajith.ajjarani@gmail.com");


function addNumbers(... nums: number[]) {
	var i;
	var sum:number = 0;

	for (let i = 0; i < nums.length; i++) {
		sum = sum + nums[i]; 		
	}
	console.log("Sum of the numbers", sum);
}

addNumbers(1,2,3);
addNumbers(10,10,10,10);

/**
 * Anonymus function
 */
var msg1 = function () {
	return "hello World"
}
console.log(msg1());

/**
 * Lambda/Anonymus/Arrow functions
 */
var foo = (x : number) => 10 + x;
console.log(foo(100));


/**
 * Chapter 11 - Numbers
 */
console.log("Chapter 11 : Numbers")
console.log("TypeScript Number Properties: "); 
console.log("Maximum value that a number variable can hold: " + Number.MAX_VALUE); 
console.log("The least value that a number variable can hold: " + Number.MIN_VALUE); 
console.log("Value of Negative Infinity: " + Number.NEGATIVE_INFINITY); 
console.log("Value of Negative Infinity:" + Number.POSITIVE_INFINITY);

/**
 * Chapter 12 - Strings
 * 
 * wraps the primitive string datatype to String Object * 
 */
console.log("Chapter 12 : Strings");
let fName = "Ajith"
let fNameString = new String(fName);


/**
 * Chapter 13 - Arrays
 */
console.log("Chapter 13 : Arrays");

var arrayVariable:String[];
arrayVariable = ["1", "2", "#"]
console.log(arrayVariable[2])

var arr_names:number[] = new Array(4);
var names:string[] = new Array("Mary","Tom","Jack","Jill");


for (const key in names) {
	if (names.hasOwnProperty(key)) {
		const element = names[key];
		console.log(element)
		
	}
}


/**
 * Chapter 14 - Tuples
 */
console.log("Chapter 14 : Tuples");
var mytuple = [10,"Hello"];
mytuple[2] = 120 
mytuple[3] = 234
console.log(mytuple[1]) 

mytuple.push("Ajith")

/**
 * Chapter 15 - Union
 * Allowing variable to have String or Number
 */
console.log("Chapter 15 : Union");
var val1 : string|number
val1 = 12 
console.log("numeric value of val "+val1) 
val1 = "This is a string" 
console.log("string value of val "+val1)


/**
 * Chapter 16 - Interfaces
 */
console.log("Chapter 16 : Interfaces");

interface Iperson {
	firstName : string,
	lastName : string,
	sayHi : ()=> string
}

var customer : Iperson = {
	firstName : "Tom",
	lastName : "Hanks",
	sayHi : (): string => {
		return("Hi There");
	}
}

console.log("Customer Object");
console.log(customer.firstName + customer.lastName + customer.sayHi);


var employee:Iperson = { 
	firstName:"Jim",
	lastName:"Blakes", 
	sayHi: ():string =>{return "Hello!!!"} 
 } 
 console.log("Employee  Object ") 
 console.log(employee.firstName);
 console.log(employee.lastName);


interface Person {
	age : number
}

interface Musician extends Person {
	instrument : string
}

var drummer = <Musician>{	
};
drummer.age = 29;
drummer.instrument = "drums"
console.log("Age :" + drummer.age)
console.log("Instrument :" + drummer.instrument)


interface IParent1 {
	v1 : number
}

interface IParent2 {
	v2 : number
}

interface Child extends IParent1, IParent2 {

}

var IObj : Child = {
	v1 : 12,
	v2 : 23
}
console.log("value 1: "+ IObj.v1+" value 2: "+IObj.v2)


/**
 * Chapter 17 - Classes
 * - fields/ private variables
 * - constructors - (responsible for allocating memory for objects of class)
 * - Functions - Implementation methods in Classs
 */
console.log("Chapter 17 : Classes");
class Car {

	/**
	 * Field 
	 * Note - var keyword is not used
	 */
	engine : string;

	// Constructor
	constructor(engineParm : string) {
		this.engine = engineParm;
	}

	/**
	 * Function in Class
	 * this is to reference the current class
	 */
	disp(): void {
		console.log("Engine is :" + this.engine)
	}
}

let carOb = new Car("Apollo");

console.log("Reading attribute value Engine as :  "+carOb.engine)  
console.log("Test :", carOb.disp());

/**
 * Parent Class
 */
class Shape {
	Area : number
	constructor(area : number) {
		this.Area = area;
	}
}

/**
 * Child Class
 */
class Circle extends Shape {
	disp() : void {
		console.log("Area of the circle :", this.Area)
	}
}

const circleObj = new Circle(35);
circleObj.disp();


/**
 * Multi-Level Inheritence
 */

class Root {
	str : string;
	constructor(str1 : string) {
		this.str = str1;
	}
}

class Child1 extends Root {
}

class Leaf extends Child1 {
}

const leafObj = new Leaf("chandrappa")
leafObj.str = "Chandrappa1";
console.log(leafObj.str);



/**
 * TypeScript ─ Class inheritance and Method Overriding
 */

console.log("**** TypeScript ─ Class inheritance and Method Overriding ***")
class PrinterClass {
	doPrint() : void {
		console.log(" doPrint() from Parent Called ..");
	}
}

class StringPrinter extends PrinterClass {

	doPrint() : void {
		super.doPrint()
		console.log(" doPrint() is printing a string")
	}
}

const stringPrinterObj = new StringPrinter();
stringPrinterObj.doPrint();

class StaticMem {
	static staticVariable: number;

	static staticMethod(): void {
		console.log("The Value of num is" + this.staticVariable)
	}	
}

StaticMem.staticVariable = 100;
StaticMem.staticMethod();


/**
 * The instanceof operator
 */
console.log("**** TypeScript ─ The instanceof operator ***")
class Person1 {}
var perObj = new Person1();
var isPerson = perObj instanceof Person1;
console.log("Obj is an instance of Person1 :" + isPerson);


/**
 * Data Hiding 
 * 
 * Public.
 * Protected
 * Private 
 */
console.log("**** TypeScript ─ Data Hiding***")

class Encapsulate {
	str : string = "Hello"
	private str2 : string = "world"

	disp() : void {
		console.log("Accessing Private Variable Inside :" + this.str2);
	}
}

const objEncapsulate = new Encapsulate();
console.log("Global Variable accessed Outside", objEncapsulate.str);
objEncapsulate.disp();



/**
 *	Classes and Interfaces
 */
console.log("**** TypeScript ─ Classes and Interfaces***")

interface ILoan {
	interest : number
}

class AgriLoan implements ILoan {
	interest : number
	rebate : number 

	constructor(interest : number, rebate : number) {
		this.interest = interest;
		this.rebate = rebate;
	}
}

const agriObj = new AgriLoan(10, 1);
console.log("Interest is :" + agriObj.interest + "Rebate is : "+ agriObj.rebate);


/**
 * Chapter 18 - Objects
 * An object is an instance which contains set of key value pairs. The values can be scalar values or functions or even array of other objects. The syntax is given below −
 */
console.log("Chapter 18 : Objects");

var person = {
	firstName:"Tom", 
	lastName:"Hanks", 
	sayHello:function() {  }  //Typescript template 
 } 

 person.sayHello = function() {  
	console.log("hello "+person.firstName)
 }  


 person.sayHello()



 var person2 = { 
	firstname:"Tom", 
	lastname:"Hanks" 
 }; 
 var invokeperson = function(obj: { firstname:string, lastname :string }) { 
	console.log("first name :"+obj.firstname) 
	console.log("last name :"+obj.lastname) 
 } 
 invokeperson(person2)


 /**
 * Chapter 19 - NameSpaces
 */
console.log("Chapter 19 : Namespaces");


 /**
 * Chapter 20 - Modules
 * 
 * Internal Modules - should be replaced with namespaces
 */
console.log("Chapter 20 : Modules");

import TestShape = require("./TestShape");
import circle = require("./Circle"); 
import triangle = require("./Triangle");  

TestShape.drawAllShapes(new circle.Circle());
TestShape.drawAllShapes(new triangle.Triangle());