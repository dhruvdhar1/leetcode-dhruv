class Solution {
    public int maxChunksToSorted(int[] arr) {
        int count = 0;
        int sum = 0;
        for(int i=0; i<arr.length; i++) {
            sum += arr[i];
            
            if(sum == (i*(i+1)/2)) count++;
        }
        return count;
    }
}