// Code your solution here
function findMatching(drivers, query) {
    // Convert to lowercase for case insensitive comparison
    const lowercaseQuery = query.toLowerCase();

    // Use the filter method to create a new array with matched drivers
    const matchingDrivers = drivers.filter(driver =>
        driver.toLowerCase().includes(lowercaseQuery)
    );

    return matchingDrivers;
}

function fuzzyMatch(drivers, partialName) {
    // make the Name to lowercase for case insensitive comparison
    const lowercasePartialName = partialName.toLowerCase();

    // filter to create a new array with matched drivers
    const matchingDrivers = drivers.filter(driver =>
        driver.toLowerCase().startsWith(lowercasePartialName)
    );

    return matchingDrivers;
}

function matchName(drivers, name) {
    // filter to create a new array with matching driver name
    const matchingDrivers = drivers.filter(driver =>
        driver.name.toLowerCase() === name.toLowerCase()
    );

    return matchingDrivers;
}