//How to use a JavaScript Class: you must declare a class before you can use it.
//1. Use the keyword class to creata a class and always add a method named constructor().
class Car {
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }
}

myCar1 = new Car("Yaris", 2006);
myCar2 = new Car("Ford", 2008)
document.getElementById("demo1").innerHTML = myCar1.name + " " + myCar2.year;
//2.Create a Class method named "age", that returns the Car age:
class Auto {
    constructor(name, year) {
        this.name = name;
        this.year = year;

    }
    age() {
        let date = new Date();
        return date.getFullYear() - this.year;
    }
}

let myAuto = new Auto("Golf", 2018);
document.getElementById("demo2").innerHTML =
    "My car is " + myAuto.age() + " years old.";

//3. You can send a parameter to a class method:
class Macchina {
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }
    age(x) {
        return x - this.year;
    }
}
let date = new Date();
let year = date.getFullYear();
let myMacchina = new Macchina("Yaris", 2009);
document.getElementById("demo3").innerHTML = "La mia macchina ha" + " " + myMacchina.age(year) + " " + "anni";

//Java Script Class Inheritance:
//Inheritance is useful for code reusability: 
//reuse properties and methods of an existing class when you create a new class.
//1. Use the "extends" keyword to inherit all methods from another class.
class sezioneStudenti {
    constructor(sezione) {
        this.sezione = sezione;
    }

    nome() {
        return "Io sono in " + this.sezione;
    }
}
class laVeraSezione extends sezioneStudenti {
    constructor(sezione, lettera) {
        super(sezione);
        this.lettera = lettera;
    }
    show() {
        return this.nome() + this.lettera;
    }
}

let mySezioneStudenti = new laVeraSezione("3", "A");
document.getElementById("demo4").innerHTML = mySezioneStudenti.show();

//2. JavaScript Class Getter/Setter
//Using an underscore character is common practice when using getters/setters in JavaScript, but not mandatory,
//you can name them anything you like, but not the same as the property name.
class Condomini {
    constructor(piano) {
        this._pianoName = piano;
    }
    get pianoName() {
        return this._pianoName;
    }
    set pianoName(x) {
        this._pianoName = x;
    }
}
let myCondomini = new Condomini("secondo");
myCondomini.pianoName = "terzo";//Use a setter to change the pianoName from "secondo" to "terzo"
document.getElementById("demo5").innerHTML = myCondomini.pianoName;

//JavaScript Static Methods
//1. A static method is created with the "static" keyword.
//You can only call the method on the class itself.
class Strumenti {
    constructor(nome){
        this.nomeStrumento = nome;
    }
    get nStrumento (){
        return this.nomeStrumento;
    }
    set nStrumento(x){
        this.nomeStrumento = x;
    }
    static aCorde(){
        return ": uno strumento a corde";
    }
}

let myStrumento = new Strumenti("chitarra");
//If you want to use the myStrumento object inside the static method,
// you can send it as a parameter [Strumenti.aCorde(myStrumento)]:
document.getElementById("demo6").innerHTML=myStrumento.nStrumento + " " + Strumenti.aCorde(myStrumento);












