/* Write a Program to convert an array of objects to an object
	based on a given key */


const convert = (arr,key) => {
	// Write your code here
	if(!Array.isArray(arr)){
		return null;
	}
	let obj = {}

	arr.forEach(ele => {
		obj[ele[key]] = {
			...ele
		}
	});

	return obj;
};

/* For example,
INPUT - convert([{id: 1, value: 'abc'}, {id: 2, value: 'xyz'}], 'id')
OUTPUT - {
			'1': {id: 1, value: 'abc'},
			'2': {id: 2, value: 'xyz'}
		 }


*/

module.exports = convert;
