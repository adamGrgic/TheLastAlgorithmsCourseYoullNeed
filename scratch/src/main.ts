// Notes
// Why learn? 

// - Learn the handshake!
// - Will you use it on the job? Sometimes
// - Its there and you don't have to be a genius to understand these things


// Course hook
// if const a= [] isn't an array then what is it? 
// array => contiguous memory space 
// (0101010100101010)
// [                ]
// 0 -------------> N
// 



// Time and Space Complexity

// Big O 
// Categorizes your algorithm's time or memory requirements based on input 
// Not an exact measurement
// Will not tell you how many CPU cycles it takes
// Generalize the growth of your algorithm


// Great for creating performant applications which is highly desirable for business

// Most Important Concepts
// 1. Growth is with respect to input
// 2. Constants are dropped (because the difference between 2n and n^2 is neglible, we're interested in "the shape")
// 3. Worst case is usually the way we measure 


// common list of complexities
// O(1)
// O(logn)
// O(n)
// O(nlogn)
// O(n^2)
// O(2^n)
// O(n!)

// O(n log n)  -> Quicksort
// O(log n) -> Binary search trees



// arrays => simple contiguous memory space 


// Sample array buffer things
// const a = new ArrayBuffer(6);
// console.log('a : ',a);

// const a8 = new Uint8Array(a);

// console.log('a8 at decleration: ', a8);

// a8[0] = 45;

// console.log('a8 after modifying a8[0] with 45', a8);

// console.log('end');


// Linear Search
// *** It is good to be able to explain these things in your own words,
// *** fluently, on a whiteboard :D 



// Linked Lists

// "Lists without indices"
// -> each item in the list has a reference to the next item (singly) or previous item (doubly)

// 