const foods = [
    {
        "_id":1,
        "name": "Food"
    },
    {
        "_id":2,
        "name": "Soft Drink"
    },
    {
        "_id":3,
        "name":"Alcohol"
    },
    {
        "_id":4,
        "name":"Vegetarian"
    }
]

const price = [
    {
        "_id":0,
        "name": "Any",
        "array": []
    },
    {
        "_id":1,
        "name": "$0 ~ $9",
        "array": [0, 9]
    }, 
    {
        "_id":2,
        "name": "$10 ~ $19",
        "array": [10, 19]
    },
    {  
        "_id":3,
        "name":  "$20 ~ $29",
        "array": [20, 29]
    },
    {
        "_id":4,
        "name" : "$30 ~ $39",
        "array": [30, 39]
    },
    {
        "_id":5,
        "name" : "More than $40",
        "array": [40, 2000]
    }
]

export {
    foods,
    price
}