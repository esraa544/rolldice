'use strict';

//dice
//let activePlayer = 0;
//let dice = Math.trunc((Math.random()*6)+1);
//let current = 0;
//let playerscore = 0;
//const switchPlayer = function() {
//    document.getElementById(`current--${activePlayer}`).textContent = current;
//    
//    document.querySelector('.active').classList.toggle('.hidden');
//    document.querySelector('.active').classList.toggle('.hidden');
//}
//document.querySelector('.roll').addEventListener('click', function() {
//    document.querySelector('.image').style.visibility='visible';  
//    document.querySelector('.image').src =`img/dice-${dice}.png`;  
//    dice = Math.trunc((Math.random()*6)+1);
//    document.querySelector('.image').src =`img/dice-${dice}.png`;  
//      
//    if (dice === 1) {
//        switchPlayer ();
//        
//        }else{
//            current = current + dice;
//            document.querySelector('.current').textContent = current ;
//        }
//})
//
//document.querySelector('.hold').addEventListener('click', function() {
//    if (dice === 1) {
//        
//        current = 0;
//        document.querySelector('.current').textContent = current ;
//        }else{
//            playerscore = playerscore + current;
//            current = 0;
//            document.querySelector('.current').textContent = current ;
//            document.querySelector('.score').textContent = playerscore ;
//            document.querySelector('.active').classList.toggle('.hidden');
//            document.querySelector('.active').classList.toggle('.hidden');            
//        };
//})
//
//document.querySelector('.newGame').addEventListener('click', function(){
//    document.querySelector('.image').style.visibility='hidden';  
//    dice = Math.trunc((Math.random()*6)+1);
//    current = 0;
//    playerscore = 0;
//    document.querySelector('.current').textContent = current ;
//    document.querySelector('.score').textContent = playerscore ;
//    document.querySelector('.image').src =``; 
//})


//nine
//OOP
//constructive
//prototype
let Person = function(firstName, birthyear){
//    console.log(this);
    this.firstName = firstName; //properity
    this.birthyear = birthyear; //properity
    
}
//Person() ;

//prototype.addedMethod (for adding methods for the main method)
Person.prototype.calcAge = function(){
    console.log(2021 - this.birthyear);
}
let esraa = new Person("esraa", 2002);
console.log(esraa.calcAge());

console.log(esraa.__proto__);
console.log(Person.prototype);
console.log(Person.prototype === esraa.__proto__);

console.log(Person.prototype.isPrototypeOf(esraa));

//add properity
Person.prototype.welcome = "Hey man";

//hasOwnProperty (identify inside =>false / identify outaide => true)
console.log(Person.prototype.hasOwnProperty('welcome'));
console.log(Person.prototype.hasOwnProperty('firstName'));

console.log(Person.prototype.constructor);

//methods of array
const arr = [7, 8, 7, 3, 8, 3];
console.log(arr.__proto__);

//add new method in array
Array.prototype.unique = function() {
    return[...new Set(this)];
};
console.log(arr.unique());


//inheritance
const student1 = function(firstName, bithyear, course){
    Person.call(this, firstName, bithyear);
    this.course = course;
}

const esraa3 = new student1('esraa', 2002, 'web developer');
console.log(esraa3);


console.log(' ');


//ES6 classes
class PersonCl {
    //privte
    #movement = [400, 500, 600];
    constructor(firstName, birthyear){
        this.firstName = firstName;
        this.birthyear = birthyear;
    }
    calcAge(){
        console.log(2021 - this.birthyear);
    }
};

PersonCl.prototype.great = function(){
     console.log(`Hey ${this.firstName}`)
};

esraa = new PersonCl("esraa", 2002);
console.log(esraa.calcAge());
console.log(esraa.great());

const account = {
    owner : 'esraa',
    movement : [400, 300, 500, 600, 200],
    
    get latest(){
        return this.movement.slice(-1);
    },
    //set => add to the array (have parameter)
    set latest(move){   
        this.movement.push(move)
    }
}
console.log(account.latest);

account.latest = 500;
console.log(account.movement);

console.log(esraa.movement);
//inheritance
class student extends PersonCl{
    constructor(firstName, birthyear, course){
        super(firstName, birthyear);
        this.course = course;
    }
};

const esraa4 = new student ('esraa', 2002, 'web');
console.log(esraa4);

//static method

 Person = function(firstName, birthyear){
//    console.log(this);
    this.firstName = firstName; //properity
    this.birthyear = birthyear; //properity
    
}

Person.prototype.calcAge = function(){
    console.log(2021 - this.birthyear);
}
esraa = new Person("esraa", 2002);
console.log(esraa.calcAge());

console.log(esraa.__proto__);
console.log(Person.prototype);
console.log(Person.prototype === esraa.__proto__);

console.log(Person.prototype.isPrototypeOf(esraa));

Person.prototype.welcome = "Hey man";
console.log(esraa.welcom)

console.log(' ');

//object.create method

const PersonOb = {
    data(firstName, birthyear){
        this.firstName = firstName;
    this.birthyear = birthyear;
    },
    calcAge(){
        console.log(2021 - this.birthyear)
    }
}
const esraa1 = Object.create(PersonOb);
esraa1.name = 'esraa';
esraa1.birthyear = '2000';
console.log(esraa1);
esraa1.data("esraa", 2002);
console.log(esraa1);


//inheritance
const studentOb = Object.create(PersonOb);
studentOb.data = function(firstName, birthyear, course){
 PersonOb.data.call(this,firstName,birthyear);
    this.course = course;
};

const esraa5 = Object.create(studentOb);
esraa5.data('esraa', 2002, 'web');
console.log(esraa5);  




//eight


//seven
////return function
//const welcome = function(welcoming){
//    return function(name) {
//        console.log`${welcoming} ${name}`;
//    }
//};
//const myWelcoming = welcome('Hey');
//myWelcoming('Esraa')
//const lafthansa = {
//    airline: "lafthansa",
//    iataCode: "lh",
//    booking: [],
//    book(flightName, name) {
//        console.log(
//            `${name} booked a set of ${this.airline} flight ${this.iataCode} ${flightName}`
//        );
//    },
//};
//
//lafthansa.book(230, "esraa");
//
//// this. => undefined (read parameter only)
//const bookings = lafthansa.book;
//bookings(230, "esraa");
//
////CALL
//bookings.call(lafthansa, 230, "esraa");
//
//const eurowings = {
//    airline: "eurowings",
//    iataCode: "EW",
//    booking: [],
//};
//const flightData = [345, "khaled ali"];
//bookings.call(eurowings, 250, "esraa");
//// APPLY bookings.apply(new object, parameter)
//bookings.apply(eurowings, lafthansa);
//
////BIND bookings.bind(OBJECT);
//const bookEW = bookings.bind(eurowings);
//bookEW(234, "mahmoud");
//
////CLOUSERS (save data)
//const secureBooking = function() {
//    let passengerNum = 0;
//    return function() {
//        passengerNum++;
//        console.log(`${passengerNum} passengers`);
//    };
//};
//secureBooking();
//const booker = secureBooking();
//booker();
//booker();
//booker();
//booker();
//console.dir(booker);
//
//// Array
////slice
//const arr = ["A", "B", "C", "D", "E"];
//console.log(arr.slice(2, 5));
//console.log(arr.slice(-2));
//console.log(arr);
//
////splice
//console.log(arr.splice(2, 5));
//console.log(arr.splice(-2));
//console.log(arr);
//
////reverse
//console.log(arr.reverse());
//console.log(arr);
//
//const arr2 = ["f", "g", "h"];
//
////concat
//console.log(arr.concat(arr2));
//
////join
//console.log(arr.join("-"));
//
////for each
//const numbers = [100, -22, 22, 50, -40];
//for (const num of numbers) {
//    if (num > 0) {
//        console.log(`positive numbers is ${num}`);
//    } else {
//        console.log(`negative numbers is ${num}`);
//        console.log(`negative numbers is ${Math.abs(num)}`);
//    }
//}
//
//numbers.forEach(function(num2) {
//    if (num2 > 0) {
//        console.log(`positive numbers is ${num2}`);
//    } else {
//        console.log(`negative numbers is ${num2}`);
//        console.log(`negative numbers is ${Math.abs(num2)}`);
//    }
//});
//
////Numbers
//
//console.log(23 === 23.0);
//
//console.log(0.1 + 0.2);
//
//console.log(0.1 + 0.2 === 0.3);
//
////convert from string to number
//console.log(Number("25"));
//
//console.log(+"25");
//
////parseInt (the first numder only in the string)
//console.log(parseInt("23px"));
//console.log(parseInt("2.3px"));
//
////parseFloat
//console.log(parseFloat("23px"));
//console.log(parseFloat("2.3px"));
//
////isNaN (isn't number )
//console.log(isNaN(2));
//console.log(isNaN("px"));
//
////Math
////sqrt (square root)
//console.log(Math.sqrt(25)); // == 25 **(1/2)
//
////max,min
//console.log(Math.max(43, 2, 66, 9, 40));
//console.log(Math.min(43, 2, 66, 9, 40));
//
////pi
//console.log(Math.PI);
//
////randomInt
//// console.log(Math.randomInt(10, 20));
//
////math.round (nearest)
//console.log(Math.round(32.4));
//console.log(Math.round(32.9));
//
////ceil (near to the biggest number)
//console.log(Math.ceil(32.4));
//
////floor (near to the smallest number)
//console.log(Math.floor(32.4));
//
////tofixed
//console.log((2.7).toFixed(3));
//
////reminder operator (whole no. => 0) (decimal no. => 1) (%)
//
////isEven
//// console.log(Number.isEven(8));
//
//// Date
//
//const now = new Date();
//console.log(now);
//console.log(new Date("December 20, 2015"));
//console.log(new Date(2307, 4, 3, 19, 8));
//
////get year, month, day,...
//console.log(now.getFullYear());
//console.log(now.getMonth());


//six
////print the value once (no repeat)
//
//const resturant = new Set (['pizza', 'pasta', 'bread', 'pizza', 'pasta']);
//console.log(resturant);
//
//console.log(new Set('esraa'));
//
//// set.size => array.length
//
//console.log(resturant.size);
//
////set.has => array.indexof (true/false)
//
//console.log(resturant.has('pizza'));
//console.log(resturant.has('salad'));
//
////set.add => array.push (unshift)
//
//console.log(resturant.add('salad'));
//
////set.delete => array.pull (shift)
//
//console.log(resturant.delete('pasta'));
//console.log(resturant);
//
////set.clear (delete all set)
//
//console.log(resturant.clear);
//
////print each item alone
//
// for(let item of resturant) {
//     console.log(item)
// };
//const job = new Set (['sheif', 'waiter', 'pasta']);
//for(item of job) {
//    console.log(item)
//};
//console.log(job.has('waiter'));
//console.log(job.delete('pasta'));
//console.log(job.size);
//
////map
//
//const rest = new Map();
//
////rest.set(KEY, VALUE)
//
//rest.set("name", "italiano");
//console.log(rest);
//
////key => Number,String Boolean ,array ,object ,...
//
//rest.set(2, "classico");
//console.log(rest);
//rest.set("categories",['pizzaeria', 'italiano']);
//rest.set("open",11);
//rest.set("close",12);
//console.log(rest);
//
////rest.get(key)
//
//console.log(rest.get('name'));
//
//console.log(rest.has('open'));
//console.log(rest.delete('close'));
//console.log(rest.size);
//
////new Map ([KEY, VALUE], [KEY, VALUE])
//
//const question = new Map ([
//    ['question', 'what is your name'],
//    [1, 'esraa'],
//    [2, 'mohamed'],
//    ['correct', 1],
//    [true, 'correct'],
//    [false, 'wrong'],
//]);
//console.log(question.get(1));
//console.log(question);
//
//
////simple list => array (no delete)
////            => set
////KEY /VALUE list => object (String Boolean ,array ,object ,...) 
////            => map ()
//
////String
//let airline = "tap air egypt";
//let plane = "A320";
//
//// array اعتبر الكلمه 
//
//console.log(plane[0]);
//console.log(plane.length);
//
////   (indexOf) بحدد مكان الحرف او الكلمه من الاول
//
//console.log(airline.indexOf('r'));
//console.log(airline.indexOf('air'));
//
////  (lastIndexOf) بحدد مكان الحرف او الكلمه من الاخر
//
//console.log(airline.lastIndexOf('air'));
//
////.slice (start, end)
//
//console.log(airline.slice(4,7));
//
////Lower/Upper Case 
//
//console.log(airline.toLowerCase());
//console.log(airline.toUpperCase());
//
////.replace (word, replacement)
//console.log(airline.replace('air', 'air22'));
//
////include
//
//console.log(airline.includes('air'));
//console.log(airline.includes('plane'));
//
//// the string start with (true/ false)
//
//console.log(airline.startsWith('air')); 
//console.log(airline.startsWith('tap'));
//
//console.log(airline.split(' ')); //in array
//
//console.log(airline.split(' ').join(', ')); //without array
// 
////default parameters
//
//const creatBooking = function (flightNum  ,numPassenger = 1 ,price = 200) {
////    flightNum = flightNum || 1;
////    numPassenger = numPassenger || 1;
////    price = price || 200;
//    const booking = {
//        flightNum,
//        numPassenger,
//        price
//    }
//    console.log(booking);
//};
//creatBooking ('lh123');
//creatBooking ('lh123' , 10 ,1);
//
//
//
//const flight = 'lh234';
//const esraa = {
//    name: 'esraa',
//    passport: 1234567890
//};
//
//const checkIn = function (flightNum1, Passenger) {
//    flightNum1 = 'lm4567';
//    Passenger.name="Mrs. " + Passenger.name;
//};
//
//checkIn(flight, esraa);
//console.log(flight);
//console.log(esraa);
//
//
//const upperFirstWord = function(str) {
//    const [first, ...other] = str;
//    return [first.toUpperCase(),...other].join('');
//};
//console.log(upperFirstWord('esraa mohamed is student'));
//const transformer = function (str, fn) {
//  console.log('original string ' + str);  
//  console.log('transformed string : ' + fn(str));  
//};
//transformer("esraa mohamed ", upperFirstWord);


//fifth
//spread operator
//const arr = [4, 5, 6, ...[6, 7, 8]];
//console.log(arr);
////rest operator (x spread operator) (at the end of the array)
//const [x, y, ...z] = [3, 5, 6, 7, 8];
//console.log(x,y,z);
//
//let openingHour = {
//        sat:{
//            open: 5,
//            close: 7,
//        },
//        sun:{
//            open: 1,
//            close: 8,
//        },
//        mon:{
//            open: 3,
//            close: 9,
//        }
//    };
//const resturant = {
//    name: 'classico italiano',
//    location: 'firenze 4 street, italy',
//    categories: ['italian', 'pizzeria', 'vegetarian', 'organic'],
//    startMenu: ['focaccia', 'bruschetta', 'bread', 'salad'],
//    mainMenu: ['pizza', 'pasta', 'meat'],
//    order: function (startIndex, mainIndex){
//        return [this.startMenu[startIndex], this.mainMenu[mainIndex]];   
//    },
//    openingHour,
//    orderFood: function(foodOne, foodTwo, foodThree) {
//        console.log('you chose ${foodOne} and ${foodTwo} and ${foodThree}')
//    }
//};
//
//console.log(resturant.openingHour);
//console.log(resturant.openingHour.mon.open);
//
////optional chaining
//console.log(resturant.openingHour.thur ?.open);
//console.log(" ");
//
//const {sat, ...weekDays} = resturant.openingHour;
//console.log(sat, weekDays);
//
////rest parameter
//            
//            
//console.log(" ");
//console.log(" ");
//console.log(" ");
//const add = function(...numbers) {
//    let sum = 0;
//    for(let i = 0 ; i < numbers.length ; i++) {
//        sum = sum + numbers[i];
//    }
//    console.log(sum)
//};
//add(4, 6, 7, 8, 8);
//add(8, 5, 3, 7);
//
//            console.log(" ");
//            console.log(" ");
//            console.log(" ");
//            console.log(" ");
//            
//            
//console.log(''|| null);
//
//const num = 30;
//const guest1 = num ? num : 10;
//console.log(guest1)
//
////console.log(true1 && true2) = true2
////console.log(false1 && false2) = false2
////console.log(true1 && false) = false
//console.log(5 && 0)
//console.log(5 && 7)
//
////null and undifined => false in ??
//const num2 = 0;
//const guest2 = num2 ?? 10;
//console.log(guest2);
//
//console.log(" ");
//
//const arr3 = [4, 6, 9, 7];
//for(const i of arr3.entries()) {
////    console.log(i);
//    console.log(`${i[0]} : ${i[1]}`);
//};
////looping object
////OBJECT KEYS
////print in array
//
//let days = Object.keys(openingHour);
//console.log(days);
////print in single items
//
//for(let day of Object.keys(openingHour)){
//    console.log(day);
//};
//
////OBJECT VALUES
// days = Object.values(openingHour);
//console.log(days);
////print in single items
//for( day of Object.values(openingHour)){
//    console.log(day);
//};
////OBJECT ENTRSS
//days = Object.entries(openingHour);
//console.log(days);
////print in single items
//for( day of Object.entries(openingHour)){
//    console.log(day);
//};

//const arr2 = [4, 6, 9, 7];
//for(let i = 0 ; i < arr2.length ; i++) {
//    console.log(arr2[i]);
//}



//fourth
//
//const resturant = {
//    name: 'classico italiano',
//    location: 'firenze 4 street, italy',
//    categories: ['italian', 'pizzeria', 'vegetarian', 'organic'],
//    startMenu: ['focaccia', 'bruschetta', 'bread', 'salad'],
//    mainMenu: ['pizza', 'pasta', 'meat'],
//    order: function (startIndex, mainIndex){
//        return [this.startMenu[startIndex], this.mainMenu[mainIndex]];   
//    },
//    openingHour: {
//        sat:{
//            open: 1,
//            close: 11,
//        },
//        sun:{
//            open: 1,
//            close: 11,
//        },
//        fri:{
//            open: 1,
//            close: 11,
//        }
//    },
//    orderFood: function(foodOne, foodTwo, foodThree) {
//        console.log('you chose ${foodOne} and ${foodTwo} and ${foodThree}')
//    }
//}
//let Food = [
//    prompt('Enter food one ?'),
//    prompt('Enter food two ?'),
//    prompt('Enter food three ?'),
//]
//console.log(resturant.order(Food[0], Food[1], Food[2]));
//
//
//let restCopy = {...resturant};
//console.log(restCopy);
//
//let arr = [25, 7,19];
//let [x, y, z] = arr;
//console.log(arr);
//console.log(x, y, z);
//
//const [first, second, ,fourth] = resturant.categories;
//console.log(first, second, fourth);
//console.log(resturant.order(2, 1));
//const [start, main] = resturant.order(2, 1);
//console.log(start, main);
//
//let {name, categories, openingHour} = resturant;
//console.log(name, categories, openingHour);
//
//const {name: resName, openingHour: hours, categories: tags} = resturant;
//console.log(resName, hours, tags);
//
//let {menu = [], startMenu = []} = resturant;
//console.log(menu, startMenu);
//
//const {fri} = resturant.openingHour;
//console.log(fri);
//
//const {
//    fri: {open, close}
//      } = resturant.openingHour;
//console.log(open);
//console.log(close);
//
//let newArray = [2, 4, arr];
//console.log(newArray);
//newArray = [2, 4, ...arr];
//console.log(...newArray);
//newArray = [...resturant.categories];
//console.log(newArray);
// 
//let str = 'ESRAA';
//let me = [...str];
//console.log(...me);
////[first = fourth] = [fourth = first];


//while (dice !== 1){
//    console.log(dice);
//    dice ++
//}


//third
////LOOP
////for
////for(initial, end, inc/dec by)
//for(let x =0; x<= 10; x =x+2){
//    console.log(x)
//}
//console.log(" ");
////while
////initial while(end){;inc/dec by}
////let y =0
////while(y <= 15){
////    console.log(y);
////    y++;
////}
//console.log(" ");
////RANDOM
////Math.random();
////Math.trunc((Math.random()) (whole no.)
//
////add (classList.add) or remove (classList.remove) class
//document.querySelector('.show').classList.remove('.hidden');
////document.getElementById ( 'id' ) = document.querySelector('#id')
////document.getElementsByClassName ( 'class' ) = document.querySelector('.class')


//second
////'use strict';
//////FUNCTION
////
////function data(name, age) {
////    
////    console.log(`welcome ${name}`)
////    console.log("esraa");
////    console.log(40 + 66);
////    console.log("welcome " + name + age);
////    return
////}
////data("esraa ", 19);
////data("moh. ", 22);
////function juice(apples, orange) {
////    const myJuice=`used ${apples} apples and used ${orange} oranges`;
////    return myJuice;
////}
////console.log(juice(4, 5));
////console.log(juice(2, 9));
//////Function decliration
////
////function colAge1(birthyear) {
////    const myAge = 2021 - birthyear;
////    return myAge;
////}
////console.log(colAge1(2002));
////console.log(colAge1(2006));
////console.log(" ")
//////Function expretion
////
////const colAge2 =function (birthyear) {
////    const myAge = 2021 - birthyear;
////    return myAge;
////}
////console.log(colAge2(2002));
////console.log(colAge2(2006));
////console.log(" ")
//////Function arrow
////
////const colAge3=birthyear =>{
////    const myAge = 2021 - birthyear;
////    return myAge;
////}
////console.log(colAge3(2002));
////console.log(colAge3(2006));
////console.log(" ")
//////function inside function
////
////function cutFruit(fruit) {
////    const pieces =fruit * 4
////    return pieces;
////}function juice (apple, oranges) {
////    const applePieces = cutFruit(apple);
////    const orangePieces = cutFruit(oranges);
////    const myJuices =`use ${applePieces} pieces of apple and use ${orangePieces} pieces of oranges`;
////    return myJuices;
////}
////console.log(juice(2, 1));
////console.log(" ")
//////Array
////const myData=['esraa',19,'programer'];
////console.log(myData);
//////Array order (0 -..)
////console.log(myData[0]);
////console.log(myData[1]);
////console.log(myData[2]);
//////no. of data inside array
////console.log(myData.length);
//////const myData1= new Array()
////
//////Array push (add data in the end of the array)
////myData.push('moh.');
////console.log(myData);
////
//////Array unshift (add data in the begainnig of the array)
////myData.unshift('moha.');
////console.log(myData);
////
//////Array order (add data in the middle of the array)
////myData[2]= 2002;
////console.log(myData);
////
//////Array pop (remove data in the end of the array)
////myData.pop();
////console.log(myData);
////
//////Array shift (remove data in the begainnig of the array)
////myData.shift();
////console.log(myData);
////
//////search in the data of the array (order)
////console.log(myData.indexOf('programer'));
////
//////search in the data of the array (exist/not exist)(true/false)
////console.log(myData.includes('programer'));
////
//////OBJECT
////const dataa = {
////    name:'esraa',
////    age:19,
////    birthYear:2002,
////    job:'programmer',
////    friends:['aaa','bbb','ccc'],
////    //Function inside Object (expretion)
////    colAge4:function (year){
////    return 2021 - this.birthYear;
//////    return `welcome ${this.name}`
////}
////}
////console.log(dataa);
////console.log(" ");
////
//////dot notation
////console.log(dataa.name);
////console.log(dataa.age);
////console.log(dataa.job);
////console.log(dataa.friends);
////console.log(" ");
////
//////bracket notation
////console.log(dataa['age']);
////console.log(dataa['name']);
////
//////pop up input (same as alert)
////const wel = prompt("welcome");
////console.log(wel);
////console.log(dataa[wel]);
////console.log(dataa.colAge4())



//task1
////'use strict';
////
////console.log(" challenge1 data1  ");
////
//////challenge1
//////data1
////let massMark1 = 78;
////let heightMark1 = 1.69;
////let massJohn1 = 92;
////let heightJohn1 = 1.95;
////let bmiJohn1= massJohn1 / heightJohn1 ** 2;
////let bmiMark1= massMark1 / heightMark1 ** 2;
////console.log(bmiJohn1);
////console.log(bmiMark1);
////if(bmiMark1 >= bmiJohn1){
////    console.log(true);
////}else{
////    console.log(false);
////}
////let com1 = bmiMark1 > bmiJohn1;
////console.log(com1);
////
////console.log("   ")
////console.log(" challenge1 data2  ")
////
//////data2
////let massMark2 = 95;
////let heightMark2 = 1.88;
////let massJohn2 = 85;
////let heightJohn2 = 1.76;
////let bmiJohn2= massJohn2 / heightJohn2 ** 2;
////let bmiMark2= massMark2 / heightMark2 ** 2;
////console.log(bmiJohn2);
////console.log(bmiMark2);
////if(bmiMark2 >= bmiJohn2){
////    console.log(true);
////}else{
////    console.log(false);
////}
////let com2 = bmiMark2 > bmiJohn2;
////console.log(com2);
////
////console.log("   ");
////console.log(" challenge2 data1  ");
////
//////challenge2
//////data1
////
////if(bmiMark1 > bmiJohn1){
////   console.log("Mark's BMI is higher than John's!");
////   console.log("Mark's BMI" +" "+ bmiMark1 + "is higher than John's" +" "+ bmiJohn1);
////   }else{
////       console.log("John's BMI is higher than Mark's!");
////       console.log("John's BMI" +" "+bmiJohn1 + "is higher than Mark's" +" "+bmiMark1);
////   }
////
////console.log("   ");
////console.log(" data2  ");
////
//////data2
////
////if(bmiMark2 > bmiJohn2){
////   console.log("Mark's BMI is higher than John's!");
////   console.log("Mark's BMI" + " "+bmiMark2 + "is higher than John's" +" "+ bmiJohn2);
////   }else{
////       console.log("John's BMI is higher than Mark's!");
////       console.log("John's BMI"+" "+ bmiJohn2 + "is higher than Mark's" +" "+bmiMark2);
////   }
////
////
////console.log("  ");
////console.log(" challenge3 data1  ");
////
//////challenge3
//////data1
////let dolphinsScore = (96+108+89) / 3;
////let koalasScore = (88+91+110) / 3;
////if(dolphinsScore > koalasScore){
////   console.log("The winner of the competition is Dolphins team");
////   }else{
////       console.log("The winner of the competition is Koalas team");
////   }
////
////
////console.log("  ");
////console.log(" bonus1  ");
////
//////bonus1
////let dolphinsScore1 = (97+112+101) / 3; 
////let koalasScore1 = (109+95+123) / 3;
////if(dolphinsScore1 > koalasScore1 && dolphinsScore1 >= 100){
////   console.log("The winner of the competition is Dolphins team");
////   }else if(koalasScore1 > dolphinsScore1 && koalasScore1 >= 100){
////       console.log("The winner of the competition is Koalas team");
////   }else{
////       console.log("Neither of them won ");
////   }
////
////console.log("  ");
////console.log(" bonus2 ");
////
//////bonus2
////let koalasScore2 = (109+95+106) / 3;
////if(dolphinsScore1 > koalasScore2 && dolphinsScore1 >= 100){
////   console.log("The winner of the competition is Dolphins team");
////   }else if(koalasScore2 > dolphinsScore1 && koalasScore1 >= 100){
////       console.log("The winner of the competition is Koalas team");
////   }else{
////       console.log("No team wins the trophy");
////   }
////console.log("  ");
////console.log(" challenge4  ");
////
////challenge4
////let bill = 275;
////let tip = bill >= 50 && bill <= 300;
////tip = bill *  0.15;
////let total = bill + tip;
////console.log("The bill was"+" "+bill+" the tip was"+" "+ tip +" the total value"+" "+ total);
////bill = 40;
////tip = bill * 0.2;
////total = bill + tip;
////console.log("The bill was"+" "+bill+" the tip was"+" "+ tip +" the total value"+" "+ total);
////bill = 430;
////tip = bill * 0.2;
////total = bill + tip;
////console.log("The bill was"+" "+bill+" the tip was"+" "+ tip +" the total value"+" "+ total);
////
////console.log(" ");
////console.log(" ");
////console.log(" ");
////
////// by if statement
////let billl = 275; 
////let x;
////billl >= 50 && billl <= 300 ? x=0.15 : x =0.2;
////let tips = x * billl;
////let totalValue = billl + tips;
////console.log("The bill was"+" "+billl+" the tip was"+" "+ tips +" the total value"+" "+ totalValue);
////billl = 40;
////billl >= 50 && billl <= 300 ? x=0.15 : x =0.2;
////tips = x * billl;
////totalValue = billl + tips;
////console.log("The bill was"+" "+billl+" the tip was"+" "+ tips +" the total value"+" "+ totalValue);
////billl = 430;
////billl >= 50 && billl <= 300 ? x=0.15 : x =0.2;
////tips = x * billl;
////totalValue = billl + tips;
////console.log("The bill was"+" "+billl+" the tip was"+" "+ tips +" the total value"+" "+ totalValue);


//first
////console.log("hello world");
//////alert("hello world");
////
////var name="esraa";
////var num=7;
////var bool=true;
////var non;
////console.log("my name is "+name);
////console.log(typeof(name));
////console.log(typeof(num));
////console.log(typeof(bool));
////console.log(typeof(non));
////
////let namee="esraa";
////namee="ESRAA";
////console.log(namee);
////let year = 2002;
////const age = 2021-year;
////console.log(age);
////
////let x =10;
////if(x === 8){
////    console.log(8);
////}else if(x === 9){
////    console.log(9);
////}else if(x === 10){
////    console.log(10);
////}else{
////    console.log("error");
////}
////let y =true;
////
////if(y){
////    console.log(true);
////}else{
////    console.log(false);
////}
////// != (not gate)(not equal)
////let not =5;
////if(not != 5){
////    console.log("true");
////}else{
////     console.log("false");
////}
//////&& (and gate)(both are correct)
////let and =3;
////if(not === 5 && and === 3){
////    console.log("true");
////}else{
////     console.log("false");
////}
////// || (or gate)(one of them is correct)
////let or =3;
////if(not === 7 || and === 3){
////    console.log("true");
////}else{
////     console.log("false");
////}
////
////let e = 10;
////e >= 10 ? console.log(10):console.log(0);
////let f ="19";
////let g =9;
//////convert from String tp no.
////console.log(Number(f)+g);
//////convert from no. to String
////console.log(f+" "+String(g));
////// 0 '' null NaN undefined (their default value =false )
////if(0){
////   console.log(true)
////   }else{
////    console.log(false);
////}
//////switch statment
////let h =25
////switch(h){
////    case 20:
////        console.log(20);
////        break;
////    case 25:
////        console.log(25);
////        break;
////    default:
////        console.log("non");
////        break;
////}
