var loggedItems = {
    names: [
        {
            id: 123,
            name: 'Apple',
            amt: 3,
            expiry: 2,
         },
         {
            id: 0,
            name: 'Banana',
            amt: 3,
            expiry: 7,
         },
         {
            id: 2,
            name: 'Wheat Bread',
            amt: 1,
            expiry: 21,
         },
         {
            id: 3,
            name: 'Bell Pepper',
            amt: 6,
            expiry: 7,
         },
         {
            id: 4,
            name: 'Cucumber',
            amt: 3,
            expiry: 7,
         }
    ]
}

const addNewItem = (id, name, amt, expiry) => {
    loggedItems.names.push({
        id: id, 
        name: name, 
        amt: amt, 
        expiry: expiry
    })
}
    
export { loggedItems, addNewItem };