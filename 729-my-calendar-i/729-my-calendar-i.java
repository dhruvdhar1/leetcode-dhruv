class MyCalendar {
    
    private final List<int[]> cal;
    
    public MyCalendar() {
         cal = new ArrayList();
    }
    
    public boolean book(int start, int end) {
        for(int[] interval: cal) {
            int iStart = interval[0];
            int iEnd = interval[1];
            
            if(start>=iStart && start < iEnd) {
                return false;
            } else if(end > iStart && end <= iEnd) {
                return false;
            } else if(start<= iStart && end >= iEnd) {
                return false;
            }
        }
        
//         for(int i=0; i<cal.size()-1; i++) {
//             int[] interval = cal.get(i);
//             int iStart = interval[0];
//             int iEnd = interval[1];
            
//             if(start>=iStart && start < iEnd) {
//                 return false;
//             } else if(end > iStart && end <= iEnd) {
//                 return false;
//             } if(start<iEnd || end > cal.get(i+1)[0]) {
//                 return false;
//             }
//         }
        int[] intr = new int[]{start, end};
        cal.add(intr);
        Collections.sort(cal, (i1, i2)->i1[0]-i2[0]);
        return true;
    }
}

/**
 * Your MyCalendar object will be instantiated and called as such:
 * MyCalendar obj = new MyCalendar();
 * boolean param_1 = obj.book(start,end);
 */