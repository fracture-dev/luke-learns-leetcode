function twoSum(nums, target) {
    let success = false; 

    while (!success) {
        for (var i = 0; i < nums.length; i++) { 
            for (var j = i + 1; j < nums.length; j++) {
                if (nums[i] + nums[j] == target) {
                    success = true; 
                    return [i, j];
                } 

            }
        }
    }
};