class Solution {
    public double findMedianSortedArrays(int[] nums1, int[] nums2) {
        int l1 = nums1.length;
        int l2 = nums2.length;
        
        int[] A;
        int[] B;
        
        if(l1 < l2) {
            A = nums1;
            B = nums2;
        } else {
            A = nums2;
            B = nums1;
        }
        l1 = A.length;
        l2 = B.length;
        int l = 0, r = A.length;
        while(l<= r) {
            int i = l+(r-l)/2; //0
            int j = ((l1+l2)/2) - i;
            // System.out.println("j: " + j + " : " + l2);
            int aL = (i==0) ? Integer.MIN_VALUE : A[i-1];
            int bL = (j==0) ? Integer.MIN_VALUE : B[j-1];
            int aR = (i==l1) ? Integer.MAX_VALUE : A[i];
            int bR = (j==l2) ? Integer.MAX_VALUE : B[j];
            
            if(aL <= bR && bL <= aR) {
                if((l1+l2)% 2 == 0) {
                    return (double)(Math.max(aL, bL) + Math.min(aR, bR))/2;
                } else {
                    return Math.min(aR, bR);
                }
            } else if (aL > bR) {
                r = i-1;
            } else {
                l = i+1;
            }
        }
        return -1;
    }
}