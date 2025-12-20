let arr = [1,2,3,4,5,6,7,8,9,10]
console.log("Before Map:", arr)
let result = arr.map(function(x, index){return x * index;})
console.log("After Map:", result)

// Filter
let filterResult = arr.filter(function(x){return x%2 === 0;})
console.log("After Filter:", filterResult)

// Reduce
let reduceResult = arr.reduce(function(acc, curr){return acc + curr;}, 0)
console.log("After Reduce:", reduceResult)
