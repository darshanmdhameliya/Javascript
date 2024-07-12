/* javascript Array.at() method */

// The at() method of Array instances takes an integer value and returns the item at that index, allowing for positive and negative integers. Negative integers count back from the last item in the array.


// Syntax :- at(index)


// {
//     let at = 
// }


/* javascript Array.contact() method method */

// The concat() method of Array instances is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.

// Syntax :- concat()
//           concat(value1)
//           concat(value1, value2)
//           concat(value1, value2, /* …, */ valueN)

// {
//     let array1 = ['a', 'b', 'c'];
//     let array2 = ['d', 'e', 'f'];
//     let array3 = array1.concat(array2);

//     console.log(array3);
// }

/* javascript Array.copyWithin() method */

// The copyWithin() method of Array instances shallow copies part of this array to another location in the same array and returns this array without modifying its length.

// Synatx :- copyWithin(target, start)
//           copyWithin(target, start, end)

// {
//     let array1 = ['a', 'b', 'c', 'd', 'e','f','g'];

//     console.log(array1.copyWithin(3,5));

//     // console.log(array1.copyWithin(1,3,4));

// }


/* javascript Array.copyWithin() method */

// key and value return kre

// The entries() method of Array instances returns a new array iterator object that contains the key/value pairs for each index in the array.

// Syntax :- entries()

// {
//     let array1 = ['a', 'b', 'c'];

//     let entries = array1.entries();

//     console.log(entries.next().value);
//     console.log(entries.next().value);
//     console.log(entries.next().value);
// }

/* javascript Array.keys() method */

//keys return kre

// The keys() method of Array instances returns a new array iterator object that contains the keys for each index in the array.

// Syntax :- keys()

// {
//     let array1 = ['a', 'b', 'c'];
//     let keys = array1.keys();

//     console.log(keys.next().value);
//     console.log(keys.next().value);
//     console.log(keys.next().value);
// }

/* javascript Array.values() method */

//values return kre

//The values() method of Array instances returns a new array iterator object that iterates the value of each item in the array.

// Syntax :- values()

// {
//     let array1 = ['a', 'b', 'c'];
//     let values = array1.values();

//     console.log(values.next().value);
//     console.log(values.next().value);
//     console.log(values.next().value);
// }


/* javascript Array.every() */

// The every() method of Array instances tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.

// Syntax :- every(callbackFn)
//           every(callbackFn, thisArg)

// {
//     let array1 = [1, 30, 39, 29, 10, 23];

//     let showvalue = (value) => value < 40;

//     console.log(array1.every(showvalue));

// }

/* javacript Array.fill() */

// The fill() method of Array instances changes all elements within a range of indices in an array to a static value. It returns the modified array.

//Syntax :- fill(value)
//          fill(value, start)
//          fill(value, start, end)

// {
//     const array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//     // console.log(array1.fill(6));
//     console.log(array1.fill(5, 1));
//     console.log(array1.fill(0, 2, 8));

// }