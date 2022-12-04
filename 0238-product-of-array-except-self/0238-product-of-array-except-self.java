class Solution {
    public int[] productExceptSelf(int[] nums) {
        int len = nums.length;
        int[] pre = new int[len];
        int[] post = new int[len];
        
        for(int i=0; i<len; i++) {
            if(i==0) pre[i] = nums[i];
            else {
                pre[i] = pre[i-1] * nums[i];
            }
        }
        
        for(int i=len-1; i>=0; i--) {
            if(i==len-1) post[i] = nums[i];
            else {
                post[i] = post[i+1] * nums[i];
            }
        }
        
        // System.out.println("--------: " + Arrays.toString(pre));
        // System.out.println("--------: " + Arrays.toString(post));
        
        int[] ans = new int[len];
        
        for(int i=0; i<len; i++) {
            if(i == 0) ans[i] = post[i+1];
            else if(i == len-1) ans[i] = pre[i-1];
            else {
                ans[i] = pre[i-1] * post[i+1];
            }
        }
        
        return ans;
    }
}

//      [1,2,3,4]
//pre:  [1, 2, 6, 24]
//post: [24,24,12,4]

