var foodAffairs = function(){
    var lunch = prompt("What do you want for lunch?","Type your lunch choice here");

	switch(lunch){
  		case 'sandwich':
    		alert("Sure thing! One sandwich, coming up.");
    		break;
  		case 'soup':
    		alert("Got it! Tomato's my favorite.");
    		break;
  		case 'salad':
    		alert("Sounds good! How about a caesar salad?");
    		break;
  		case 'pie':
    		alert("Pie's not a meal!");
    		break;
  		default:
    		alert("Huh! I'm not sure what " + lunch + " is. How does a sandwich, soup, salad or pie sound?");
			foodAffairs();
	}
    
};

foodAffairs();
