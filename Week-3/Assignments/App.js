/**
 * Return an array includes two indices of number that add up to the specific target sum.
 * Return undefined if fail to find the sum of such target.
 * @param {Int32Array} nums Sorted array of intergers
 * @param {Number} target Sum of integer
 */

function twoSum(nums, target) {
    let firstIndex = 0;
    let lastIndex = nums.length - 1;
    let sum;
    while (firstIndex !== lastIndex) {
        sum = nums[firstIndex] + nums[lastIndex];
        if (sum === target) {
            return [firstIndex, lastIndex];
        }
        else if (sum < target) {
            firstIndex++;
        } else {
            lastIndex--;
        }
    }
    return undefined;
}

console.log(twoSum([2, 7, 11, 15], 9));

/*
 For example:
 twoSum([2, 7, 11, 15], 9);
 Should returns:
 [0, 1]
 Because:
 nums[0]+nums[1] is 9
*/