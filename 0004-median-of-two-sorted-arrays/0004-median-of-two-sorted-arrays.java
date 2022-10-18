class Solution {
    public double findMedianSortedArrays(int[] nums1, int[] nums2) {
        int[] A = nums1.length <= nums2.length ? nums1 : nums2;
        int[] B = nums1.length > nums2.length ? nums1 : nums2;
        
        System.out.println(Arrays.toString(A));
        System.out.println(Arrays.toString(B));
        
        int len = nums1.length + nums2.length;
        int half = len/2;
        int l = 0, r = A.length;
        
        while(l<=r) {
            int i = l + (r-l)/2;
            int j = half-i;
            
            double aLeft = i == 0 ? Integer.MIN_VALUE : A[i-1];
            double bLeft = j == 0 ? Integer.MIN_VALUE : B[j-1];
            double aRight = i == A.length ? Integer.MAX_VALUE : A[i];
            double bRight = j == B.length ? Integer.MAX_VALUE : B[j];
            
            if(aLeft <= bRight && bLeft <= aRight) {
                // System.out.println("ssss");
                if(len%2 == 0) {
                    return ((Math.max(aLeft, bLeft) + Math.min(aRight, bRight))/2);
                } else {
                    return Math.min(aRight, bRight);
                }
            } else if(aLeft > bRight) {
                r = i-1;
            } else {
                l = i+1;
            }
        }
        return -1;
    }
}