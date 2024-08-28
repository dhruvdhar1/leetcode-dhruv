class Solution:
    def getPalindroms(self, s, start, end):
        l,r= start,end
        count=0
        while l >= 0 and r < len(s) and s[l] == s[r]:
            count += 1
            l -= 1
            r += 1
        return count

    def countSubstrings(self, s: str) -> int:
        res = 0
        for i in range(len(s)):
            n1 = self.getPalindroms(s, i, i)
            n2 = self.getPalindroms(s, i, i+1)
            res += (n1+n2)
        return res