class Person {
  private name: string;
  private age: number;
  private height: number;

  constructor(name = "Default", age = 0, height = 0) {
    this.name = name;
    this.age = age;
    this.height = height;
  }

  get_name() {
    return this.name;
  }

  get_age() {
    return this.age;
  }

  get_height() {
    return this.height;
  }

  set_name(name: string) {
    this.name = name;
  }

  set_age(age: number) {
    this.age = age;
  }

  set_height(height: number) {
    this.height = height;
  }
}

let person1: Person = new Person("Rohit", 18, 5.1);
let person2: Person = new Person("Jack", 40, 5.11);
person1.set_age(40);
console.log(person1.get_age === person2.get_age);
console.log(person1.get_name() === person2.get_name());
person2.set_name("Rohit");
console.log(person1.get_name() === person2.get_name());
