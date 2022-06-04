// enum - store constants; duplicate value is not allowed here.
//  enum 3 prokar.
// 1. Numeric
// 2. String
// 3. Hetergenous
//numeric enum
var requestType;
(function (requestType) {
    requestType[requestType["readData"] = 0] = "readData";
    requestType[requestType["saveData"] = 1] = "saveData";
    requestType[requestType["deleteData"] = 2] = "deleteData";
})(requestType || (requestType = {}));
console.log(requestType);
console.log(requestType.readData);
console.log(requestType["readData"]);
// String enum
var requestType2;
(function (requestType2) {
    requestType2["readData"] = "Read Data value";
    requestType2["deleteData"] = "delete Data value";
})(requestType2 || (requestType2 = {}));
console.log(requestType2.deleteData);
console.log(requestType2["deleteData"]);
// hetergenous enum
var requestType3;
(function (requestType3) {
    requestType3["readData"] = "Read Data value";
    requestType3["deleteData"] = "delete Data value";
    requestType3[requestType3["id"] = 101] = "id";
})(requestType3 || (requestType3 = {}));
console.log(requestType3);
