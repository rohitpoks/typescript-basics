interface Human {
  // properties
  user_age: number;
  // method headers
  talk(): string;
  get_height(): number;
  set_height(height: number);
}

class Student implements Human {
  user_age: number;
  height: number;
  talk(): string {
    return "Hi";
  }
  get_height(): number {
    return this.height;
  }
  set_height(height: number) {
    this.height = height;
  }
}

class Teacher implements Human {
  user_age: number;
  height: number;
  talk(): string {
    return "Hello";
  }
  get_height(): number {
    return this.height;
  }
  set_height(height: number) {
    this.height = height;
  }
  instruct() {
    console.log("Please do your homework!");
  }
}

let student1: Student = new Student();
let teacher1: Teacher = new Teacher();

console.log(student1.talk());
teacher1.instruct();
