class Solution:
    def isPalindrome(self, s: str) -> bool:
        filtered_s = ''.join([char for char in s if char.isalnum()])
        left = 0
        right = len(filtered_s) - 1
        while left <= right:
            if filtered_s[left].lower() != filtered_s[right].lower(): return False
            left += 1
            right -= 1
        return True

        