"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var message = "Hello Ajith";
var number1 = 12;
console.log(message);
console.log(number1);
var Greeting = /** @class */ (function () {
    function Greeting() {
    }
    Greeting.prototype.greet = function () {
        console.log("Hello Greeting !!");
    };
    return Greeting;
}());
var greetObj = new Greeting();
greetObj.greet();
var name1 = "John";
var score1 = 50;
var score2 = 42.50;
var sum = score1 + score2;
var str = "1";
var str2 = str;
console.log(str2);
console.log("name", name1);
console.log("first score: " + score1);
console.log("second score: " + score2);
console.log("sum of the scores: " + sum);
// Variables
console.log("Section VARIABLES");
var global_num = 12; //global variable 
var Numbers = /** @class */ (function () {
    function Numbers() {
        this.num_val = 13; //class variable 
    }
    Numbers.prototype.storeNum = function () {
        var local_num = 14; //local variable 
    };
    Numbers.sval = 10; //static field 
    return Numbers;
}());
console.log("Global num: " + global_num);
console.log(Numbers.sval); //static variable  
var obj = new Numbers();
console.log("Global num: " + obj.num_val);
//Chapter 7 : Operators
console.log('Chapter 7 : Section Operators');
var x = 4;
var y = -x;
console.log("Y value", y);
var msg = "hello" + "world";
console.log(msg);
var num = -2;
var result = num > 0 ? "positive" : "false";
console.log(result);
//typeof Operator
var num1 = "12";
console.log(typeof num1);
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
var i = 1;
while (i <= 10) {
    if (i % 5 == 0) {
        console.log("The first multiple of 5  between 1 and 10 is : " + i);
        break; //exit the loop if the first multiple is found 
    }
    i++;
} //outputs 5 and exits the loop
/**
 *
 */
console.log("Chapter 10 : Functions");
function disp_details(id, name, mail_id) {
    console.log("Id :", id);
    console.log("Name :", name);
    if (mail_id != undefined) {
        console.log("Email Id", mail_id);
    }
}
disp_details(123, "Ajith");
disp_details(111, "ajith", "ajith.ajjarani@gmail.com");
function addNumbers() {
    var nums = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nums[_i] = arguments[_i];
    }
    var i;
    var sum = 0;
    for (var i_1 = 0; i_1 < nums.length; i_1++) {
        sum = sum + nums[i_1];
    }
    console.log("Sum of the numbers", sum);
}
addNumbers(1, 2, 3);
addNumbers(10, 10, 10, 10);
/**
 * Anonymus function
 */
var msg1 = function () {
    return "hello World";
};
console.log(msg1());
/**
 * Lambda/Anonymus/Arrow functions
 */
var foo = function (x) { return 10 + x; };
console.log(foo(100));
/**
 * Chapter 11 - Numbers
 */
console.log("Chapter 11 : Numbers");
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
var fName = "Ajith";
var fNameString = new String(fName);
/**
 * Chapter 13 - Arrays
 */
console.log("Chapter 13 : Arrays");
var arrayVariable;
arrayVariable = ["1", "2", "#"];
console.log(arrayVariable[2]);
var arr_names = new Array(4);
var names = new Array("Mary", "Tom", "Jack", "Jill");
for (var key in names) {
    if (names.hasOwnProperty(key)) {
        var element = names[key];
        console.log(element);
    }
}
/**
 * Chapter 14 - Tuples
 */
console.log("Chapter 14 : Tuples");
var mytuple = [10, "Hello"];
mytuple[2] = 120;
mytuple[3] = 234;
console.log(mytuple[1]);
mytuple.push("Ajith");
/**
 * Chapter 15 - Union
 * Allowing variable to have String or Number
 */
console.log("Chapter 15 : Union");
var val1;
val1 = 12;
console.log("numeric value of val " + val1);
val1 = "This is a string";
console.log("string value of val " + val1);
/**
 * Chapter 16 - Interfaces
 */
console.log("Chapter 16 : Interfaces");
var customer = {
    firstName: "Tom",
    lastName: "Hanks",
    sayHi: function () {
        return ("Hi There");
    }
};
console.log("Customer Object");
console.log(customer.firstName + customer.lastName + customer.sayHi);
var employee = {
    firstName: "Jim",
    lastName: "Blakes",
    sayHi: function () { return "Hello!!!"; }
};
console.log("Employee  Object ");
console.log(employee.firstName);
console.log(employee.lastName);
var drummer = {};
drummer.age = 29;
drummer.instrument = "drums";
console.log("Age :" + drummer.age);
console.log("Instrument :" + drummer.instrument);
var IObj = {
    v1: 12,
    v2: 23
};
console.log("value 1: " + IObj.v1 + " value 2: " + IObj.v2);
/**
 * Chapter 17 - Classes
 * - fields/ private variables
 * - constructors - (responsible for allocating memory for objects of class)
 * - Functions - Implementation methods in Classs
 */
console.log("Chapter 17 : Classes");
var Car = /** @class */ (function () {
    // Constructor
    function Car(engineParm) {
        this.engine = engineParm;
    }
    /**
     * Function in Class
     * this is to reference the current class
     */
    Car.prototype.disp = function () {
        console.log("Engine is :" + this.engine);
    };
    return Car;
}());
var carOb = new Car("Apollo");
console.log("Reading attribute value Engine as :  " + carOb.engine);
console.log("Test :", carOb.disp());
/**
 * Parent Class
 */
var Shape = /** @class */ (function () {
    function Shape(area) {
        this.Area = area;
    }
    return Shape;
}());
/**
 * Child Class
 */
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Circle.prototype.disp = function () {
        console.log("Area of the circle :", this.Area);
    };
    return Circle;
}(Shape));
var circleObj = new Circle(35);
circleObj.disp();
/**
 * Multi-Level Inheritence
 */
var Root = /** @class */ (function () {
    function Root(str1) {
        this.str = str1;
    }
    return Root;
}());
var Child1 = /** @class */ (function (_super) {
    __extends(Child1, _super);
    function Child1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Child1;
}(Root));
var Leaf = /** @class */ (function (_super) {
    __extends(Leaf, _super);
    function Leaf() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Leaf;
}(Child1));
var leafObj = new Leaf("chandrappa");
leafObj.str = "Chandrappa1";
console.log(leafObj.str);
/**
 * TypeScript ─ Class inheritance and Method Overriding
 */
console.log("**** TypeScript ─ Class inheritance and Method Overriding ***");
var PrinterClass = /** @class */ (function () {
    function PrinterClass() {
    }
    PrinterClass.prototype.doPrint = function () {
        console.log(" doPrint() from Parent Called ..");
    };
    return PrinterClass;
}());
var StringPrinter = /** @class */ (function (_super) {
    __extends(StringPrinter, _super);
    function StringPrinter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StringPrinter.prototype.doPrint = function () {
        _super.prototype.doPrint.call(this);
        console.log(" doPrint() is printing a string");
    };
    return StringPrinter;
}(PrinterClass));
var stringPrinterObj = new StringPrinter();
stringPrinterObj.doPrint();
var StaticMem = /** @class */ (function () {
    function StaticMem() {
    }
    StaticMem.staticMethod = function () {
        console.log("The Value of num is" + this.staticVariable);
    };
    return StaticMem;
}());
StaticMem.staticVariable = 100;
StaticMem.staticMethod();
/**
 * The instanceof operator
 */
console.log("**** TypeScript ─ The instanceof operator ***");
var Person1 = /** @class */ (function () {
    function Person1() {
    }
    return Person1;
}());
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
console.log("**** TypeScript ─ Data Hiding***");
var Encapsulate = /** @class */ (function () {
    function Encapsulate() {
        this.str = "Hello";
        this.str2 = "world";
    }
    Encapsulate.prototype.disp = function () {
        console.log("Accessing Private Variable Inside :" + this.str2);
    };
    return Encapsulate;
}());
var objEncapsulate = new Encapsulate();
console.log("Global Variable accessed Outside", objEncapsulate.str);
objEncapsulate.disp();
/**
 *	Classes and Interfaces
 */
console.log("**** TypeScript ─ Classes and Interfaces***");
var AgriLoan = /** @class */ (function () {
    function AgriLoan(interest, rebate) {
        this.interest = interest;
        this.rebate = rebate;
    }
    return AgriLoan;
}());
var agriObj = new AgriLoan(10, 1);
console.log("Interest is :" + agriObj.interest + "Rebate is : " + agriObj.rebate);
/**
 * Chapter 18 - Objects
 * An object is an instance which contains set of key value pairs. The values can be scalar values or functions or even array of other objects. The syntax is given below −
 */
console.log("Chapter 18 : Objects");
var person = {
    firstName: "Tom",
    lastName: "Hanks",
    sayHello: function () { } //Typescript template 
};
person.sayHello = function () {
    console.log("hello " + person.firstName);
};
person.sayHello();
var person2 = {
    firstname: "Tom",
    lastname: "Hanks"
};
var invokeperson = function (obj) {
    console.log("first name :" + obj.firstname);
    console.log("last name :" + obj.lastname);
};
invokeperson(person2);
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
var TestShape = require("./TestShape");
var circle = require("./Circle");
var triangle = require("./Triangle");
TestShape.drawAllShapes(new circle.Circle());
TestShape.drawAllShapes(new triangle.Triangle());
//# sourceMappingURL=index.js.map