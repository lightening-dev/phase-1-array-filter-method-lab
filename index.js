// Code your solution here


function findMatching(drivers, name) {

 
   return drivers.filter(driver => driver.toUpperCase() === name.toUpperCase())
}




function fuzzyMatch(drivers, name) {

        let length = name.length
    return drivers.filter(driver => driver.slice(0, length) === name)


}

function matchName(drivers, personName) {

    return drivers.filter(driver => driver.name === personName)


}