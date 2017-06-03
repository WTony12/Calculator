//At load
$(document).ready(function(){
	var opClicked = false;
	var dotClicked = false;
	var eqClicked = false;
	var num = 0;

	$("#output").val("");
	$("#outSec").val("");

	//Clear button
	$("#clButt").on("click", function(){
		$("#output").val("");
		$("#outSec").val("");
		dotClicked = false;
		eqClicked = false;
	});
	//Numbers
	$("#zeroButt").on("click", function(){
		if($("#output").val() === "" || opClicked)
		{
			$("#output").val("0");
			$("#outSec").val($("#outSec").val() + "0");
			opClicked = false;
		}
		else
		{
			$("#output").val($("#output").val() + "0");
			$("#outSec").val($("#outSec").val() + "0");
			opClicked = false;
		}
	});
	$("#oneButt").on("click", function(){
		if($("#output").val() === "" || opClicked)
		{
			$("#output").val("1");
			$("#outSec").val($("#outSec").val() + "1");
			opClicked = false;
		}
		else
		{
			$("#output").val($("#output").val() + "1");
			$("#outSec").val($("#outSec").val() + "1");
			opClicked = false;
		}
	});
	$("#twoButt").on("click", function(){
		if($("#output").val() === "" || opClicked)
		{
			$("#output").val("2");
			$("#outSec").val($("#outSec").val() + "2");
			opClicked = false;
		}
		else
		{
			$("#output").val($("#output").val() + "2");
			$("#outSec").val($("#outSec").val() + "2");
			opClicked = false;
		}
	});
	$("#threeButt").on("click", function(){
		if($("#output").val() === "" || opClicked)
		{
			$("#output").val("3");
			$("#outSec").val($("#outSec").val() + "3");
			opClicked = false;
		}
		else
		{
			$("#output").val($("#output").val() + "3");
			$("#outSec").val($("#outSec").val() + "3");
			opClicked = false;
		}
	});
	$("#fourButt").on("click", function(){
		if($("#output").val() === "" || opClicked)
		{
			$("#output").val("4");
			$("#outSec").val($("#outSec").val() + "4");
			opClicked = false;
		}
		else
		{
			$("#output").val($("#output").val() + "4");
			$("#outSec").val($("#outSec").val() + "4");
			opClicked = false;
		}
	});
	$("#fiveButt").on("click", function(){
		if($("#output").val() === "" || opClicked)
		{
			$("#output").val("5");
			$("#outSec").val($("#outSec").val() + "5");
			opClicked = false;
		}
		else
		{
			$("#output").val($("#output").val() + "5");
			$("#outSec").val($("#outSec").val() + "5");
			opClicked = false;
		}
	});
	$("#sixButt").on("click", function(){
		if($("#output").val() === "" || opClicked)
		{
			$("#output").val("6");
			$("#outSec").val($("#outSec").val() + "6");
			opClicked = false;
		}
		else
		{
			$("#output").val($("#output").val() + "6");
			$("#outSec").val($("#outSec").val() + "6");
			opClicked = false;
		}
	});
	$("#sevenButt").on("click", function(){
		if($("#output").val() === "" || opClicked)
		{
			$("#output").val("7");
			$("#outSec").val($("#outSec").val() + "7");
			opClicked = false;
		}
		else
		{
			$("#output").val($("#output").val() + "7");
			$("#outSec").val($("#outSec").val() + "7");
			opClicked = false;
		}
	});
	$("#eightButt").on("click", function(){
		if($("#output").val() === "" || opClicked)
		{
			$("#output").val("8");
			$("#outSec").val($("#outSec").val() + "8");
			opClicked = false;
		}
		else
		{
			$("#output").val($("#output").val() + "8");
			$("#outSec").val($("#outSec").val() + "8");
			opClicked = false;
		}
	});
	$("#nineButt").on("click", function(){
		if($("#output").val() === "" || opClicked)
		{
			$("#output").val("9");
			$("#outSec").val($("#outSec").val() + "9");
			opClicked = false;
		}
		else
		{
			$("#output").val($("#output").val() + "9");
			$("#outSec").val($("#outSec").val() + "9");
			opClicked = false;
		}
	});
	//Dot button
	$("#dotButt").on("click", function(){
		if($("#output").val() === "" || opClicked)
		{
			$("#output").val("0.");
			$("#outSec").val("0.");
		}
		else if(!dotClicked)
		{
			$("#output").val($("#output").val() + ".");
			$("#outSec").val($("#outSec").val() + ".");
			dotClicked = true;
			opClicked = false;
		}
	});
	//Operators
	$("#plusButt").on("click", function(){
		if($("#output").val() === "")
		{
			//Not allowed
		}
		else if(!opClicked)
		{
			if(dotClicked)
			{
				$("#outSec").val($("#outSec").val() + "0");
			}
			$("#output").val("+");
			$("#outSec").val($("#outSec").val() + " + ");
			opClicked = true;
			dotClicked = false;
		}
	});
	$("#subButt").on("click", function(){
		if($("#output").val() === "")
		{
			//Not allowed
		}
		else if(!opClicked)
		{
			if(dotClicked)
			{
				$("#outSec").val($("#outSec").val() + "0");
			}
			$("#output").val("-");
			$("#outSec").val($("#outSec").val() + " - ");
			opClicked = true;
			dotClicked = false;
		}
	});
	$("#mulButt").on("click", function(){
		if($("#output").val() === "")
		{
			//Not allowed
		}
		else if(!opClicked)
		{
			if(dotClicked)
			{
				$("#outSec").val($("#outSec").val() + "0");
			}
			$("#output").val("x");
			$("#outSec").val($("#outSec").val() + " * ");
			opClicked = true;
			dotClicked = false;
		}
	});
	$("#divButt").on("click", function(){
		if($("#output").val() === "")
		{
			//Not allowed
		}
		else if(!opClicked)
		{
			if(dotClicked)
			{
				$("#outSec").val($("#outSec").val() + "0");
			}
			$("#output").val("/");
			$("#outSec").val($("#outSec").val() + " / ");
			opClicked = true;
			dotClicked = false;
		}
	});
	//Equals button
	$("#eqButt").on("click", function(){
		if($("#output").val() === "")
		{
			//Not allowed
		}
		else if(!opClicked)
		{
			$("#output").val(eval($("#outSec").val()));
			opClicked = false;
			dotClicked = false;
		}
	});
});
