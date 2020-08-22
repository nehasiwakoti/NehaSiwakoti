// Q. 1 solution 

var nameList = `Neeta sapkota
Neha shiwakoti
Srijana Khatiwada 
Smrity Dhakal
Sami Chakradhar
Kirtee Maharjan
Trija Thebe
Sindhu Aryal
Kusum Ranjitkar
Elisha Bista
Rachana kafle
Barsha Maharjan
Pooja Gurung
Bisikha Subedi
Kritika Baral
Srijana Thulung`;
nameList = nameList.split('\n');

var result1 = function(array) {
	return array.map(function(value, index) {
		var obj = {};
		var name = value.split(' ');
		obj['id'] = index + 1;
		obj['firstName'] = name[0].charAt(0).toUpperCase() + name[0].slice(1);
		obj['lastName'] = name[1].charAt(0).toUpperCase() + name[0].slice(1);
	
		return obj;
	});
};

// Q. 1 Output
console.log('\n\n----------- Q.1 Answer ------------\n\n');
console.log(result1(nameList));

// Q. 2 solution 

var result2 = function(array, char) {
	var getArrayFromQ1 = result1(array);
	var finder = getArrayFromQ1.filter(function(value) {
		return value.firstName.charAt(0).toUpperCase() == char.toUpperCase();
	});
	var startingWith = finder.length;
	var startingWithout = getArrayFromQ1.length - startingWith;
	return char + ': ' + startingWith + ' and ' + startingWithout;
};

// Q. 2 Output
console.log('\n\n----------- Q.2 Answer ------------\n\n');
console.log(result2(nameList, 's'));
console.log(result2(nameList, 'a'));
console.log(result2(nameList, 'k'));
console.log(result2(nameList, 'r'));
