//Desired result Print out all names except the name passed into the function 

var people = [
    { name: "John", age: 55 },
    { name: "Roger", age: 44 },
    { name: "Betty", age: 37 }
    ]

var nameFilter = function(filteredName) {
    var results = []
    for (var i = 0; i < people.length; i++) {
        let name = people[i].name
        if (name != filteredName) {
            results.push(name)
        }
    }
    return results
}
var selectName = function() {
    var currentName = "Betty";
    return currentName
}
var filteredNames = nameFilter(currentName)
console.log(filteredNames)
