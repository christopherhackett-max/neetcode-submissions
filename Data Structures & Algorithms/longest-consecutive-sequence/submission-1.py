class Solution:
    def longestConsecutive(self, nums: List[int]) -> int:
        seen, count = set(nums), 0

        for num in seen:
            if num-1 not in seen:
                step = 1
                while num+1 in seen:
                    step+=1
                    num+=1
                count = max(count, step)
        return count