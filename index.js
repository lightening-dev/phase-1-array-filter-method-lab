// Code your solution here

function findMatching(drivers, driverWeAreLookingFor) {

        return drivers.filter(name => name.toUpperCase() === driverWeAreLookingFor.toUpperCase());


}

function fuzzyMatch(drivers, driverWeAreLookingFor) {

        return drivers.filter(name => name.slice(0,2) === driverWeAreLookingFor)
}

function matchName(drivers, nameWeAreLookingFor) {

    const driverWeAreLookingFor = drivers.filter(driver => driver.name === nameWeAreLookingFor)

    return driverWeAreLookingFor;
}