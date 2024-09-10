/* Write a Program to Flatten a given n-dimensional array */

const flatten = (arr) => {
	// Write your code here
	if(!Array.isArray(arr)) return null;
	let res = arr.flat(Infinity)

	return res;
};

/* For example,
INPUT - flatten([1, [2, 3], [[4], [5]])
OUTPUT - [ 1, 2, 3, 4, 5 ]

*/

module.exports = flatten;
