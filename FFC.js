(function(){

var user_input = document.getElementById("user_input");
var button = document.getElementById("factorial");
var answer;


button.onclick = function (){
	// reset the answer
	answer = 1;
	for (var i = user_input.value; i >= 1; i--){
		answer *= i;		
	}
	alert(answer);
}	

})();
