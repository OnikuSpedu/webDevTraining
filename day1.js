var searchRange = function(nums, target) {
    const len = nums.length;
    let start = 0; //start pointer
    let end = len - 1; //end pointer
    let low = -1; // default result
    let high = -1; // default result
    
    //Binary search for first point.
    while(start <= end) {
        const mid = Math.floor((start + end)/2); //Find the mid using midpoint formula. The midpoint is an int, so it can be an index for arrays.
        
        if (nums[mid] < target) {
            start = mid + 1;
        } else if (nums[mid] > target) {
            end = mid - 1;
        } else {
            end = mid - 1;
            low = mid;
        }
    }
    if (low == -1) {
        return [-1, -1]; // if low == -1 then it is not in the arrray, so return [-1, -1]
    } else {
        start = low; //start pointer at the low so it has less to check.
        end = len - 1; //end pointer
        
        //Binary search
        while(start <= end) {
            const mid = Math.floor((start + end)/2);

            if (nums[mid] < target) {
                start = mid + 1;
            } else if (nums[mid] > target) {
                end = mid - 1;
            } else {
                high = mid;
                start = mid + 1;
            }
        }
        return [low, high];
    }
};
