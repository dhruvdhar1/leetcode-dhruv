class Solution {
    public int maximumPopulation(int[][] logs) {
        int[] population = new int[101];
        
        
        for(int[] range: logs) {
            int start = range[0];
            int end = range[1];
            
            population[start-1950]++;
            population[end-1950]--;
        }
        int maxP = population[0];
        int year = 1950;
        for(int i=1; i<population.length; i++) {
            population[i] += population[i-1];
            if(population[i] > maxP) {
                maxP = population[i]; 
                year = i+1950;
            }
        }
        return year;
    }
}