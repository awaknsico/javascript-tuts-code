var user = prompt("You dey drive along Ikot Ekpene Road...\
You discover say Ekelebe dey follow you for back...\
And dem don signal say make you stop...Wetin you go do???\
 STOP, SPEED, abi BRANCH!!!").toLowerCase();
 
 switch(user){
     
     
     case 'stop':
         var particulars = prompt("You been don carry Vehicle Particulars? (Yes or No)").toLowerCase();
         var license = prompt("Shey you get Drivers License?");
         
         if (particulars === "yes" || license === "yes"){
             alert("You only need one of them sha...Dem don dey free you to go!");
         }
         else{
             alert("Omo, you no get anything and you stop. Da, you don enter Case o.");
         }
         break;
         
     
     case 'speed':
         var drivingMora = prompt("Omo, you get driving mora? (Yes or No)");
         var fuel = prompt("Shey you get enough fuel for tank?");
         
         if(drivingMora === "yes" && fuel === "yes"){
             alert("Oh man, you don show dem mora...dem no see your break light again");
         }
         else{
             alert("Why you no been consider say you no set to carry Ekelebe run. Dem don block you!");
         }
         break;
         
         
     case 'branch':
         var sabiArea = prompt("Shey you sabi the area you enter so? (Yes or No)");
         var offRoad = prompt("Shey your car good for off-road movement?");
         if (sabiArea === "yes" && offRoad === "yes"){
             alert("Come see nkoro master o! Choi, them no even see your break light again");
         }
         else{
             alert("Chai, you lucky die. Dem don almost bam you but you manage beat them");
         }
         break;
         
         
     default:
         alert("Which one be that one sef???");
 }
