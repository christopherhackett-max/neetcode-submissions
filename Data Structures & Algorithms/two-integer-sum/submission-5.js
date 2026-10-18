class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const seen = new Map()
        for (let i = 0; i < nums.length; i++) {
            const compliment = target - nums[i]
            if (seen.has(compliment)) {
                return [i, seen.get(compliment)]
            }
            seen.set(nums[i], i)
        }
    }
}
