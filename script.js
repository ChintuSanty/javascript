let items = [];
const itemList = document.getElementById('ItemList');
const newItemInput = document.getElementById('newItem');
const addItem = () => {
    const newItemText = newItenInput.ariaValueMax.trim();
    if(newItemText !== ''){
        items.push(newItemText);
        renderItems();
        newItemInput.value = ''
    }
};
const renderItems = () => {
    itemList.innerHTML =  '';
    for(let i=0; i<items.length;i++){
        const li = document.createElement('li');
        li.textContent = items[i];
        itemList.appendChild(li)
    }
    

}

//create objects using object literals : 
/*Object Literals are simple and easy to use for creating small, one-off objects. They are useful when you need to create a simple object with a few properties.*/
function objectLiteral(){
    const obj1 = {
        name:'Santy',
        age:'32',
        city:'Hyderabad'
    }
    console.log(obj1);
}
objectLiteral();
//create object using constructor function:
/*Constructor Functions are useful when you need to create multiple instances of the same object with similar properties. They allow you to create an object template that you can use to create new objects with similar properties.*/
function constructorFunction(){
    function Person(name,age,city){
        this.name = name,
        this.age = age,
        this.city = city
    }
    Person = new Person('Santy',32,'Hyderabad');
    console.log(Person);
}
constructorFunction()
//create object using object.create:
/*Object.create() is useful when you want to create an object with a specific prototype. It allows you to create an object that inherits properties and methods from a parent object.*/
function objectCreate(){
    let personP1 ={
        name:'Santy',
        age:'32',
        city:'Hyderabad'
    }
    let myP1 = Object.create(personP1);
    console.log(myP1.name);
}
objectCreate();
// create object using ES6 classes:
/*ES6 Classes provide a cleaner syntax for creating constructor functions. They are useful when you need to create complex objects with methods and properties that need to be inherited.*/
function es6(){
    class Person {
        constructor(name,age,city){
            this.name=name;
            this.age=age;
            this.city=city;
        }
    }
    let myP2 = new Person('Santy',32,'Hyderabad');
}
es6()
//create object using singleton pattern:
/*Singleton pattern is useful when you want to restrict the creation of an object to a single instance. It is used when you need to ensure that there is only one instance of an object throughout the lifetime of your application.*/
let mySingleton =  (() => {
    let instance;
    function createInstance(){
        let object = new object("I'm Instance");
        return object;
    }
    return{
        getInstance: () => {
            if(!instance){
                instance = createInstance();
            }
            return instance;
        }
    }
})();
/* Prototype Chain: In JavaScript, each object has a hidden [[Prototype]] property that refers to another object. This other object is known as the object's prototype. When you access a property on an object, JavaScript looks for the property on the object itself first. If it doesn't find the property on the object, it looks for it on the object's prototype. If it doesn't find it there, it looks on the prototype's prototype, and so on. This chain of prototypes is known as the prototype chain.*/
function prototypeChain(){
    let p1 ={
        name:'Santy',
        age:32,
        greet:function(){
            console.log('Hello,my name is' + this.name);
        }
    };
    let student = Object.create(p1);
    student.name = 'Chintu';
    student.grade = 'A';
    student.greet = 'Santy'
    console.log(student);
}
prototypeChain();
/*In this example, we have an object person with properties name, age, and a greet method. We then create a new object student using Object.create(person). The student object has a name property that overrides the name property inherited from person. It also has a grade property that is unique to the student object. When we call the greet method on the student object, JavaScript first looks for the method on the student object itself. Since it doesn't find it there, it looks for it on the student object's prototype (person). It finds the greet method on the person object and executes it with this bound to the student object.*/
