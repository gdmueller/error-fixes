/*Desired result the name or (argument) that is passed into the nameFilter 
 function when invoked will be filtered out.
 IE  nameFilter("Roger") would print
 ["John", "Betty"]
 */

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
            results.push(currentName)
        }
    }
    return results
}

var filteredNames = nameFilter("Roger")
console.log(filteredNames)
