
function sortArray(arr, sortOrderAscending = true) {
    if (sortOrderAscending) return arr.sort();
    else return arr.sort((a,b) => b > a);
}


console.log("Calling sortArray without specifying sort order = ", sortArray([3,2,1]));

console.log("Calling sortArray specifying sort order (sortOrderAscending = false) = descending = ", sortArray([2,3,1], false));