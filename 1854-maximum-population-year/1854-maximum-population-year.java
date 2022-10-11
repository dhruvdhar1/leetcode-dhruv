class Solution {
    public int maximumPopulation(int[][] logs) {
        int[] arr = new int[101];
        for(int[] interval: logs) {
            int start = interval[0];
            int end = interval[1];
            
            arr[start-1950]++;
            arr[end-1950]--;
        }
        // System.out.println(Arrays.toString(arr));
        int minYear = 1950;
        int maxF = arr[0];
        for(int i=1; i<arr.length; i++) {
            arr[i] = arr[i] + arr[i-1];
            if(arr[i] > maxF) {
                maxF = arr[i];
                minYear = i+1950;
            }
        }
        return minYear;
    }
}