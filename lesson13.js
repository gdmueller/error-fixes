//Desired Result filteredNames will not have the name that 
//is passed intot it as an argument

var people = [
    { name: "John", age: 55 },
    { name: "Roger", age: 44 },
    { name: "Betty", age: 37 }
    ]


var nameFilter = function(filteredName) {
    var results = []
    for (var i = 0; i < people.length; i++) {
        let currentName = people[i].name
        if (currentName !== filteredName) {
            results.push(filteredName)
        }
    }
    return results
}

//Error is Above
var filteredNames = nameFilter("Roger")
console.log(filteredNames)
