class Solution {
    private boolean compareDouble(double a, double b) {
        double delta = 0.00000001D;
        return Math.abs(a-b) <= delta;
    }
    private List<Double> getOps(double a, double b) {
        List<Double> ops = new ArrayList();
        ops.add(a+b);
        ops.add(a*b);
        if(a-b >= 0) {
            ops.add(a-b);
        }
        
        if(b-a >= 0) {
            ops.add(b-a);
        }
        if(a > 0.00000001) {
            ops.add(b/a);
        }
        if(b > 0.00000001) {
            ops.add(a/b);
        }
        return ops;
    }
    private boolean backtrack(List<Double> arr) {
        if(arr.size() == 1) {
            return compareDouble(arr.get(0), 24.0);
        }
        
        for(int i=0; i<arr.size(); i++) {
            for(int j=0; j<arr.size(); j++) {
                if(i != j) {
                    double a = arr.get(i);
                    double b = arr.get(j);
                    List<Double> ops = getOps(a, b);
                    List<Double> newArr;
                    for(double op: ops) {
                        newArr = new ArrayList();
                        newArr.add(op);
                        for(int k=0; k<arr.size(); k++) {
                            if(k!= i && k!=j) {
                                newArr.add(arr.get(k));
                            }
                        }
                        if(backtrack(newArr)) return true;
                    }
                }
            }
        }
        return false;
    }
    public boolean judgePoint24(int[] cards) {
        List<Double> arr = new ArrayList();
        for(int card: cards) {
            arr.add((double)(card));
        }
        return backtrack(arr);
    }
}