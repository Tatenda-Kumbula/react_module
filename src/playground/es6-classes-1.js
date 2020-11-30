class Person {
    constructor(name = 'Anonymous', age = 0) {
        this.name = name;
        this.age = age;
    }
getGretting() {
    return 'Hi. I am ${this.name}!';
}
getDescription() {
    return '${this.name} is ${this.age} year(s) old.';
 }
}

class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }
}
 class Student extends Person {
     constructor(name,age,major) {
         super(name, age);
         this.major = major;
     }
 }

const me = new Person('Tatenda Kumbula', 19);
console.log(me.getDescription());

const other = new Person();
console.log(other.getDescription());