//hw1 區間亂數 
	function random(m) {
	return Math.floor(Math.random() * m + 1);
}

//hw2 a,b取大者
	function max(a, b) {
	//	console.log(a>b)
	if (a > b) {
		return a;
	} else {
		return b;
	}
}

//hw3 傳回arr陣列最後元素
	function lastChar(arr) {
	var index = arr[arr.length - 1];
	alert(index);
	console.log(index);
	return (index);
	}


//hw4 回傳a平方加b
	function squares(a, b) {
	return a * a + b * b;
	//	return Moth.pow(a,2)+Moth.pow(b,2);
		}

//hw5  輸入y年份是否為閏年（被4整除 且不被100整除 或被400整除 及成立）
	function leapYear(y) {

	//	判斷y是否整除4 傳回yy
	console.log(y % 100 != 0 || y % 400 === 0);
	var yy = y % 100 != 0 || y % 400 === 0;

	//	若整除，傳回值：是
	if (y % 4 === 0 && yy) {
		return "yes";
		}
	//	若不整除，傳回值：不是
	else {
		return "no";
		}
	}