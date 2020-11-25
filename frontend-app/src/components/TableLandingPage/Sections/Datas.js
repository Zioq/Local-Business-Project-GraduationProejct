const locations = [
    {
        "_id":1,
        "name": "Patio"
    },
    {
        "_id":2,
        "name": "Bar"
    },
    {
        "_id":3,
        "name":"Inside"
    },

];

const time = [
    {
        "_id":0,
        "name": "Any",
        "array": []
    },
    {
        "_id":1,
        "name": "4PM ~ 6PM",
        "array": [4, 5.9]
    }, 
    {
        "_id":2,
        "name": "6PM ~ 8PM",
        "array": [6, 7.9]
    },
    {  
        "_id":3,
        "name":  "8PM ~ 10PM",
        "array": [8, 9.9]
    },
    {
        "_id":4,
        "name" : "",
        "array": [30, 39]
    }
];

export {
    locations,
    time
}