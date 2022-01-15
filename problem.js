/*
LOGIC - Get maximum blocks on both sides for every block.
        Get minimum of both maximas.
        Subtract it with current block's height.
*/

function maxWaterStored(arr) {
    const left = [], right = [];
    let max = 0;

    // Get max block for every block in the left side
    for (let index = 0; index < arr.length; index++) {
        max = Math.max(max, arr[index]);
        left[index] = max;
    }

    max = 0;

    // Get max block for every block in the right side
    for (let index = arr.length - 1; index >= 0; index--) {
        max = Math.max(max, arr[index]);
        right[index] = max;
    }

    let stored = 0, waterArr = [];

    // Subtract the current block height with minimum of max left & right for this specific block
    for (let index = 0; index < arr.length; index++) {
        waterArr[index] = Math.min(left[index], right[index]) - arr[index];
        stored += waterArr[index];
    }

    return { waterArr, stored };
}

console.log(maxWaterStored([0, 4, 0, 0, 0, 6, 0, 6, 4, 0]));

// 0,4,2,0,0,6,0,6,4,0