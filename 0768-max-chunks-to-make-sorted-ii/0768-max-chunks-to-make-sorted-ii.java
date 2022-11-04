class Solution {
    public int maxChunksToSorted(int[] arr) {
        int count = 0;
        int size = arr.length;
        int[] rightMin = new int[size+1];
        rightMin[size] = Integer.MAX_VALUE;
        
        for(int i=size-1; i>=0; i--) {
            rightMin[i] = Math.min(rightMin[i+1], arr[i]);
        }
        // System.out.println(Arrays.toString(rightMin));
        int leftMax = -1;
        for(int i=0; i<size; i++) {
            leftMax = Math.max(leftMax, arr[i]);
            if(leftMax <= rightMin[i+1]) count++;
        }
        return count;
    }
}