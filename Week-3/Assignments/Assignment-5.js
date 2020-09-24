
function twoSum(nums, target) {
	let tables = {};
	for (let i =0; i < nums.length; i++) {
		let tmp = nums[i];
		if (tables[target - tmp]>=0) {
			return [tables[target - tmp], i]
		}
		else {
			tables[tmp] = i;
		}
	}
};
//console.log(twoSum([2, 7, 3], 8));
console.log(twoSum([2, 7, 11, 15], 9));
/*
 For example:
 twoSum([2, 7, 11, 15], 9);
 Should returns:
 [0, 1]
 Because:
 nums[0]+nums[1] is 9
*/

