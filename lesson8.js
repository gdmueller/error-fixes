//Desired result Print out all people under age 50

var people = [
    { name: "John", age: 55 },
    { name: "Roger", age: 44 },
    { name: "Betty", age: 37 }
    ]

var nameFilter = function() {
    for (var i = 0; i < people.length; i++) {
        let name = people[i].name
        if (name > 50) {
            console.log("My Name is " + name)
        }
    }
}
nameFilter()
