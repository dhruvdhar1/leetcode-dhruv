class Solution {
    Map<Character, String> map = new HashMap();

    public Solution() {
        map.put('2', "abc");
        map.put('3', "def");
        map.put('4', "ghi");
        map.put('5', "jkl");
        map.put('6', "mno");
        map.put('7', "pqrs");
        map.put('8', "tuv");
        map.put('9', "wxyz");
    }

    void backtrack(String digits,int ind,String comb,List<String> res) {
        if(comb.length() == digits.length() && comb.length() > 0) {
            res.add(comb);
            return;
        }
        if(ind >= digits.length()) return;

        String keys = map.get(digits.charAt(ind));
        for(int i=0; i<keys.length(); i++) {
            char ch = keys.charAt(i);
            backtrack(digits, ind+1, comb+ch, res);
        }
    }
    public List<String> letterCombinations(String digits) {
        List<String> res = new ArrayList();
        backtrack(digits, 0, "", res);
        return res;
    }
}