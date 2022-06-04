// enum - store constants; duplicate value is not allowed here.

//  enum 3 prokar.

// 1. Numeric
// 2. String
// 3. Hetergenous

//numeric enum

enum requestType {
    readData, // value 0, 1, 2 nirdishto kore dite pari jemon: readData = 1, tahole 1 theke shuru hobe. jodi saveData = 3 dei tahole 1, 3, 4...
    saveData,
    deleteData,
}
console.log(requestType);
console.log(requestType.readData);
console.log(requestType["readData"]);


// String enum

enum requestType2 {
    readData = "Read Data value",
    deleteData = "delete Data value",
}
console.log(requestType2.deleteData);
console.log(requestType2["deleteData"]);

// hetergenous enum

enum requestType3 {
    readData = "Read Data value",
    deleteData = "delete Data value",
    id = 101,
}
console.log(requestType3);
