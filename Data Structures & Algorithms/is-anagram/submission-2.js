class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const freqS = {}
        const freqT = {}
        if (s.length !== t.length) return false
        for (let i = 0; i < s.length; i++) {
            freqS[s[i]] = (freqS[s[i]] || 0) + 1
            freqT[t[i]] = (freqT[t[i]] || 0) + 1
        }
        for (const char in freqS) {
            if (freqS[char] !== freqT[char]) return false
        }
        return true
    }
}
