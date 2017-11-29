var add = function(number1, number2) {
  return number1 + number2;
};

var subtract = function(number1, number2) {
  return number1 - number2;
};

var multiply = function(number1, number2) {
  return number1 * number2;
};

var divide = function(number1, number2) {
  return number1 / number2;
};

$(document).ready(function() {
	$("form#add").submit(function(event) {
		event.preventDefault();
		var number1 = parseInt($("#add1").val());
	  var number2 = parseInt($("#add2").val());
	  var result = add(number1, number2);
		$("#output").text(result);
	});

	$("form#subtract").submit(function(event) {
		event.preventDefault();
		var num1 = parseInt($("#sub1").val());
		var num2 = parseInt($("#sub2").val());
		var result = subtract(num1, num2);
		$("#output2").text(result);
	});

	$("form#multiply").submit(function(event) {
		event.preventDefault();
		var num1 = parseInt($("#multiply1").val());
		var num2 = parseInt($("#multiply2").val());
		var result = multiply(num1, num2);
		$("#output3").text(result);
		debugger;
	});

	$("form#divide").submit(function(event) {
		event.preventDefault();
		var num1 = parseInt($("#divide1").val());
		var num2 = parseInt($("#divide2").val());
		var result = divide(num1, num2);
		$("#output4").text(result);
	});



});
