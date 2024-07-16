/**
 * @param {number[]} nums
 * @return {number}
 */
var minimizeSum = function(nums) {
    let res1=0
    let res2=0
    let res3=0

    if(nums.length === 3) return 0
    nums.sort((a, b) => b-a)
    //option1
    let tempArr = [...nums]
    tempArr[0] = tempArr[2]
    tempArr[1] = tempArr[2]
    res1 = Math.abs(tempArr[0] - tempArr[tempArr.length-1])

    //option2
    tempArr = [...nums]
    tempArr[tempArr.length-1] = tempArr[tempArr.length-3]
    tempArr[tempArr.length-2] = tempArr[tempArr.length-3]
    res2 = Math.abs(tempArr[0] - tempArr[tempArr.length-1])
    // console.log("res1: ", res1, " : ", res2)

    //option3
    tempArr = [...nums]
    tempArr[0] = tempArr[1]
    tempArr[tempArr.length-1] = tempArr[1]
    res3 = Math.abs(tempArr[0] - tempArr[tempArr.length-2])
    return Math.min(res1, res2, res3)
};