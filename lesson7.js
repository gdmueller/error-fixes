//Desired result Print out all names but John
var people = [
    { name: "John", age: 55 },
    { name: "Roger", age: 44 },
    { name: "Betty", age: 37 }
    ]


for (var i = 0; i < people.length; i++) {
    let name = people[i].name
    if (name == "John") {
        console.log("My Name is " + name)
    }
}
