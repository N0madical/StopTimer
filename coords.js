// The coords of each stoplight we visited, rounded to the nearest thousandth
const coordslist = [
    
    '29.715, -95.415', // University @ Morningside
    '29.713, -95.469', // Elm @ South Rice
    'Longitude, Latitude', // Street name here
    'Longitude, Latitude', // Street name here
    'Longitude, Latitude', // Street name here
    'Longitude, Latitude', // Street name here
    'Longitude, Latitude', // Street name here
    'Longitude, Latitude', // Street name here
    'Longitude, Latitude', // Street name here
    'Longitude, Latitude', // Street name here
]

// The low period green light times for each street we visited, listed in the same order as the list above. Listed in seconds.
const downgreen = [
    '20', // University @ Morningside
    '0', // Elm @ South Rice
]

// The low period yellow light times plus the low period green light times for each street we visited, listed in the same order as the list above. Listed in seconds.
const downyellow = [
    '23', // University @ Morningside
    '0', // Elm @ South Rice
]

// The low period red light times plus the low period yellow light times plus the low period green light times for each street we visited, listed in the same order as the list above. Listed in seconds.
const downred = [
    '25', // University @ Morningside
    '0', // Elm @ South Rice
]

// The high period green light times for each street we visited, listed in the same order as the list above. Listed in seconds.
const populargreen = [
    '20', // University @ Morningside
    '0', // Elm @ South Rice
]

// The high period yellow light times plus the high period green light times for each street we visited, listed in the same order as the list above. Listed in seconds.
const popularyellow = [
    '23', // University @ Morningside
    '0', // Elm @ South Rice
]

// The high period red light times plus the high period yellow light times plus the high period green light times for each street we visited, listed in the same order as the list above. Listed in seconds.
const popularred = [
    '25', // University @ Morningside
    '0', // Elm @ South Rice
]

// The First Street Name
const street1 = [
    'University St',
    'Elm St',
    'Street Name Here',
    'Street Name Here',
    'Street Name Here',
    'Street Name Here',
    'Street Name Here',
    'Street Name Here',
    'Street Name Here',
    'Street Name Here',
]

// The Second Street Name
const street2 = [
    'Morningside Road',
    'South Rice',
    'Street Name Here',
    'Street Name Here',
    'Street Name Here',
    'Street Name Here',
    'Street Name Here',
    'Street Name Here',
    'Street Name Here',
    'Street Name Here',
]