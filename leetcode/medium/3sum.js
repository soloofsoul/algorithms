/*
Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.
Notice that the solution set must not contain duplicate triplets.

Example 1:

Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
Example 2:

Input: nums = []
Output: []
Example 3:

Input: nums = [0]
Output: []


Constraints:

0 <= nums.length <= 3000
-105 <= nums[i] <= 105
*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  if (nums.length === 0) {
    return [];
  } else if (nums.length === 1) {
    return [];
  } else if (nums.length === 2) {
    return [];
  } else if (nums.length > 2 && nums.length <= 3000) {
    const areAll0 = nums.reduce((acc, num) => {
      if (num != 0) {
        acc = false;
      }
      return acc;
    }, true);

    if (areAll0) {
      return [[0, 0, 0]];
    } else {
      let i, j, result = [];

      for (i = 0; i < nums.length; i++) {
        for (j = i + 1; j < nums.length; j++) {
          const sumOf2 = nums[i] + nums[j];
          let index = nums.indexOf(0 - sumOf2, j + 1);
          if (index > -1) {
            result.push([nums[i], nums[j], nums[index]].sort());
          }

        }
      }


      return result.reduce((acc, arr, ind, array) => {
        const isIn = acc.find(fItem => (fItem[0] === arr[0] && fItem[1] === arr[1] && fItem[2] === arr[2]));
        if (!isIn) {
          acc.push(arr);
        }

        return acc;
      }, []);
    }
  }
};