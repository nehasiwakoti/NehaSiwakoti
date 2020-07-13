console.log("hello world");
var num='10';
console.log(num , typeof num);
var myStr = 'Hello World';
console.log(myStr, typeof myStr);
var myBool = true;
console.log(myBool, typeof myBool);
myNum = '10';
console.log(myNum, typeof myNum);

var myStr = 'Hello World';
console.log(myStr.length);
console.log(myStr.indexOf('ell'), myStr.indexOf('www'));
console.log(myStr[0], myStr[myStr.length - 1]);
console.log(myStr.concat('hello'), myStr);
console.log(myStr.split('ll'));
console.log(myStr.toUpperCase());
console.log(myStr.substr(1, 5));


var a;
console.log(a);
var b = null;
console.log(b);


var array = [1, 2, 3, 'four', true, [1, 2, 3]];
array.push(10);
array.pop();
[1, 2, 3].push(20);
console.log(array[2]);
console.log(array.length);
console.log(array.indexOf(0));
console.log(array.slice(1, 2), array);
console.log(array.splice(2, 3), array);

[].concat([1, 2, 3], ['a', 'b'], 5);

var obj = {
    num: 10,
    key: 'value',
    isTrue: true,
    arr: [1, 2, 3, 4, 5]
};
console.log(obj.num, obj['key'], obj.val);



obj.isTrue = 1;
obj.val = { newKey: 'newVal' };
console.log(obj.val.newKey);




var a = [1, 2, 3, 4];

for (var i = 0; i < a.length; i++) {
    console.log(i, a[i]);
}

 for (var i = 0; i < a.length; i++) {
    console.log(i, a[i]);
    if (a[i] === 3) {
        break;
    }
}


var a = [1, 2, 3, 4];

var i = 0;
while (i < a.length) {
    console.log(i, a[i]);
    i++;
}
var j = 0;
do {
    console.log(j, a[j]);
    j++;
} while (j < a.length);

var obj = {
    id: 1,
    name: 'John Doe'
};

var keys = Object.keys(obj);

for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    var value = obj[key];

    console.log(key, value);
}


function getSum(a, b) {
    return a + b;
}

getSum(1, 3);
var getSum = function(a, b) {
    return a + b;
}

getSum(1, 3);


