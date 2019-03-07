//Desired result Print out all names but John
var people = [
    { name: "John", age: 55 },
    { name: "Roger", age: 44 },
    { name: "Betty", age: 37 }
    ];


for (var i = 0; i < people.length; i++) {
    let names = people[i].name;
    if (names !== "John") {
        console.log("My Name is " + names)
    }
}
