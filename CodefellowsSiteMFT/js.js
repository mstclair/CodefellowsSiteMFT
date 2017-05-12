	function NameData (myform) {
			var TestVar = myform.inputbox.value;
		if(TestVar.length===0)
			{
			alert ("You must have not entered anything " + TestVar+ " please enter your name");
			}
		else if (TestVar.length>0)
		{	
		
			window.open("MFTExamII.html");
		
			localStorage.clear();
			localStorage.setItem("name", TestVar)
		}
	}

function calculateTotal (){
	var points = 0;
	var answerCount = 0;
	var questionCount = document.getElementsByName("question").length;
	var weight = 100/questionCount;
	var inputs = document.getElementsByTagName("input");
	
	// Iterate all inputs
	for( var i = 0; i < inputs.length; i++ ){

		// Look at all inputs that are checked
		if( inputs[i].type == "radio" && inputs[i].checked ){
			answerCount++;
			
			// All ids that contain [c] are flagged to be correct
			if( inputs[i].id.indexOf("[c]") != -1 ){
				points += weight;
			}

			// Any id that was selected and doesn't contain [c] is a wrong answer
			else{
			}
		}
	}
	
	/* Do not load results if user did not make a selection for every question */
	if( answerCount < questionCount ){
		alert( "Please answer all questions." );
		return;
	}

	localStorage.setItem("total", points.toFixed( 2 ) );// Round to two decimal places
	window.open("Results.html");
	}
	
