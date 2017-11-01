//Disired Result filteredNames does not have "Roger in it"

var people = [
    { name: "John", age: 55 },
    { name: "Roger", age: 44 },
    { name: "Betty", age: 37 }
    ]


var nameFilter = function(filteredName) {
    var results = {}
    for (var i = 0; i < people.length; i++) {
        let currentName = people[i].name
        if (currentName != filteredName) {
            results.push(currentName)
        }
    }
    return results
}


var filteredNames = nameFilter()
console.log(filteredNames)
