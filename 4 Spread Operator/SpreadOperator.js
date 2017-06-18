var params = [ "hello", true, 7 ]
var other = [ 1, 2, ...params ] // [ 1, 2, "hello", true, 7 ]

console.log("other ", other)

var withoutSpreading = [ 1, 2, params ] // [ 1, 2, "hello", true, 7 ]

console.log("withoutSpreading ", withoutSpreading)