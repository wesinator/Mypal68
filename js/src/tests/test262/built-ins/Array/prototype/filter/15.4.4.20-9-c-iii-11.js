// Copyright (c) 2012 Ecma International.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-array.prototype.filter
es5id: 15.4.4.20-9-c-iii-11
description: >
    Array.prototype.filter return value of callbackfn is a number
    (value is Infinity)
---*/

function callbackfn(val, idx, obj) {
  return Infinity;
}

var newArr = [11].filter(callbackfn);

assert.sameValue(newArr.length, 1, 'newArr.length');
assert.sameValue(newArr[0], 11, 'newArr[0]');

reportCompare(0, 0);