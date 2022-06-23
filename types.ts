let username: string = "Rohit";
let age: number = 5;
let height: number = 5.1;
let courses: string[] = [
  "Systems Programming",
  "Discrete Mathematics",
  "Human Origins",
  "Writing for College and Beyond",
];
let scores: number[] = [0.9, 0.7, 0.8, 0.4];
enum Month {
  "Jan",
  "Feb",
  "March",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
}
console.log(Month[0] == "Jun");
console.log(Month[0] == "Jan");
enum Days {
  "Sat" = 1,
  "Sun" = 2,
  "Mon" = 3,
  "Tue" = 4,
  "Wed" = 5,
  "Thu" = 6,
  "Fri" = 7,
}
console.log(Days[2] == "Sun");
/*
prints:
false
true
true
*/
