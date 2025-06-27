// Write a function called sumIntervals/sum_intervals that accepts an array of intervals, and returns the sum of all the interval lengths. 
// Overlapping intervals should only be counted once.

// Intervals
// Intervals are represented by a pair of integers in the form of an array. The first value of the interval will always be less than the second value. 
// Interval example: [1, 5] is an interval from 1 to 5. The length of this interval is 4.

// Overlapping Intervals
// List containing overlapping intervals:

// [
//    [1, 4],
//    [7, 10],
//    [3, 5]
// ]
// The sum of the lengths of these intervals is 7. Since [1, 4] and [3, 5] overlap, we can treat the interval as [1, 5], which has a length of 4.

//  const intervals = [
//     [1, 5],
//     [10, 20],
//     [1, 6],
//     [16, 19],
//     [5, 11]
//  ]

function sumIntervals(intervals) {
  //TODO
  const order = [...intervals.sort((a,b) => a[0]-b[0])]

  let interval = order[0];

  const newIntervals = new Array(interval);

  for(const i=1;i<order.length;i++){

      if(interval[1]>=order[i][0] ){

          if(interval[1]<=order[i][1] ){

              interval = [interval[0],order[i][1]]
              newIntervals.pop()
              newIntervals.push(interval)

          }

          continue

      }

      newIntervals.push(order[i])

      interval = order[i]

  }


  return newIntervals.reduce(
      (sum,interval) => sum + interval[1]-interval[0],0
  )

  
}



const chai = require('chai');
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe('sumIntervals', function(){
  it('should return the correct sum for non overlapping intervals', function(){
    const test1 = [[1,5]];
    const test2 = [[1,5],[6,10]];
    assert.strictEqual(sumIntervals(test1), 4);
    assert.strictEqual(sumIntervals(test2), 8);
  });
  
  it('should return the correct sum for overlapping intervals', function(){
    const test1 = [[1,5],[1,5]];
    const test2 = [[1,4],[7, 10],[3, 5]];
    assert.strictEqual(sumIntervals(test1), 4);
    assert.strictEqual(sumIntervals(test2), 7);
  });
  
  it('should return the correct sum for large intervals', function(){
    let intervals = [
      {intervals: [[-1e9, 1e9]], sum: 2e9},
      {intervals: [
        [0, 20],
        [-1e8, 10],
        [30, 40]
      ], sum: 1e8 + 30}
    ];
    for(let i = 0; i < intervals.length; i++){
      assert.strictEqual(sumIntervals(intervals[i].intervals), intervals[i].sum); 
    }
  });
});