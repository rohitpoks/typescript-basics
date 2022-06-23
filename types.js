var username = "Rohit";
var age = 5;
var height = 5.1;
var courses = [
    "Systems Programming",
    "Discrete Mathematics",
    "Human Origins",
    "Writing for College and Beyond",
];
var scores = [0.9, 0.7, 0.8, 0.4];
var Month;
(function (Month) {
    Month[Month["Jan"] = 0] = "Jan";
    Month[Month["Feb"] = 1] = "Feb";
    Month[Month["March"] = 2] = "March";
    Month[Month["Apr"] = 3] = "Apr";
    Month[Month["May"] = 4] = "May";
    Month[Month["Jun"] = 5] = "Jun";
    Month[Month["Jul"] = 6] = "Jul";
    Month[Month["Aug"] = 7] = "Aug";
    Month[Month["Sept"] = 8] = "Sept";
    Month[Month["Oct"] = 9] = "Oct";
    Month[Month["Nov"] = 10] = "Nov";
    Month[Month["Dec"] = 11] = "Dec";
})(Month || (Month = {}));
console.log(Month[0] == "Jun");
console.log(Month[0] == "Jan");
var Days;
(function (Days) {
    Days[Days["Sat"] = 1] = "Sat";
    Days[Days["Sun"] = 2] = "Sun";
    Days[Days["Mon"] = 3] = "Mon";
    Days[Days["Tue"] = 4] = "Tue";
    Days[Days["Wed"] = 5] = "Wed";
    Days[Days["Thu"] = 6] = "Thu";
    Days[Days["Fri"] = 7] = "Fri";
})(Days || (Days = {}));
console.log(Days[2] == "Sun");
