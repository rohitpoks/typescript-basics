var Student = /** @class */ (function () {
    function Student() {
    }
    Student.prototype.talk = function () {
        return "Hi";
    };
    Student.prototype.get_height = function () {
        return this.height;
    };
    Student.prototype.set_height = function (height) {
        this.height = height;
    };
    return Student;
}());
var Teacher = /** @class */ (function () {
    function Teacher() {
    }
    Teacher.prototype.talk = function () {
        return "Hello";
    };
    Teacher.prototype.get_height = function () {
        return this.height;
    };
    Teacher.prototype.set_height = function (height) {
        this.height = height;
    };
    Teacher.prototype.instruct = function () {
        console.log("Please do your homework!");
    };
    return Teacher;
}());
var student1 = new Student();
var teacher1 = new Teacher();
console.log(student1.talk());
teacher1.instruct();
