	//This is a simple data model to store data/parameters and operator information
	var calcSpace = {
		valOne: "",
		valTwo: "",
		operator: "",
		isSecondParam: false,
		operatorFlag:false //this flag is used to avoid multiple click on the operator
	};
	
	//This namespace will be used to add all operator functions like add, subtract etc.
	var operateFunc = {
		add: function() {
			document.getElementById("displayVal").value = calcSpace.valOne + calcSpace.valTwo;
		},
		substract: function() {
			document.getElementById("displayVal").value = calcSpace.valOne - calcSpace.valTwo;
		},
		multiply: function() {
			document.getElementById("displayVal").value = calcSpace.valOne * calcSpace.valTwo;
		},
		divide: function() {
			document.getElementById("displayVal").value = calcSpace.valOne / calcSpace.valTwo;
		}

	};
	
	// operateOnVariables() is used to invoke actual operations on the operand if it satisfies all conditions.
	function operateOnVariables() {
		if (calcSpace.operator == "+" && !calcSpace.operatorFlag) {		//calcSpace.operatorFlag is used to check multiple click on the operator like "+", "-" etc			
			operateFunc.add();
		} else if (calcSpace.operator == "-" && !calcSpace.operatorFlag) {
			operateFunc.substract();
		} else if (calcSpace.operator == "*" && !calcSpace.operatorFlag) {
			operateFunc.multiply();
		} else if (calcSpace.operator == "/" && !calcSpace.operatorFlag) {
			operateFunc.divide();
		}
	}
	//This is used to set data model variable based on user input and invoke operateOnVariables() when it receives two operand and an operator
	function setCalcSpace(operator) {
		var param = parseFloat(document.getElementById("displayVal").value);
		if (calcSpace.valOne == "") {
			document.getElementById("displayVal").value = param;
			calcSpace.valOne = param;
			calcSpace.operator = operator;
			calcSpace.operatorFlag = true;	
		} else {
			calcSpace.valTwo = param;
			operateOnVariables();
			calcSpace.operator = operator;
			resetCalcSpace();
		}
	}
	//This will be used to reset data model to accept more operator and operands when one operation is completed.
	function resetCalcSpace() {
		calcSpace.valOne = parseFloat(document.getElementById("displayVal").value);
		calcSpace.valTwo = "";
		calcSpace.isSecondParam = false;
	}
	//This will be used basically to update the display to end user
	function setDisplayVal(val) {
		calcSpace.operatorFlag = false;
		var displayVal = document.getElementById("displayVal").value;
		if(val=="." && displayVal.indexOf(".")>=0){
			return;
		}else if(val=="." && displayVal == "0"){
			document.getElementById("displayVal").value = "0.";
			return;
		}
		if (displayVal == "0") {
			document.getElementById("displayVal").value = val;
		} else if (!calcSpace.isSecondParam && calcSpace.valTwo=="" && calcSpace.operator!=="") {
			document.getElementById("displayVal").value = val;
			calcSpace.isSecondParam = true;
		} else if (displayVal != "0") {
			document.getElementById("displayVal").value += val;
		}
	}
	//This is used for the "C" button on the calculator. This will reset everything to initial values.
	function clearVal() {
		document.getElementById("displayVal").value = "0";
		calcSpace.valOne = "";
		calcSpace.valTwo = "";
		calcSpace.isSecondParam = false;
		calcSpace.operator = "";
		calcSpace.operatorFlag = false;
	}
