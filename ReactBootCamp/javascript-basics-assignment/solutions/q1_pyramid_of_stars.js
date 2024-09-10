/* Write a program to build a `Pyramid of stars` of given height */

const buildPyramid = (n) => {
  // Write your code here
  let res = '';

  for (let i = 0; i < n; i++) {
    let temp = '';

    for (let j = 0; j < n - i - 1; j++) {
     temp += ' ';
    }

    for (let j = 0; j <= i; j++) {
     temp += '*';
      if (j !== i) {
          temp += ' ';
      }
    }

    res += " "+temp + '  \n'; // Double spaces at the end
  }

  return res;
};

/* For example,
INPUT - buildPyramid(6)
OUTPUT -
     *
    * *
   * * *
  * * * *
 * * * * *
* * * * * *

*/

module.exports = buildPyramid;
