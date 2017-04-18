var slaying = true;

var youHit = Math.floor(Math.random() * 2);

var damageThisRound = Math.floor(Math.random() * 5 + 1);

var totalDamage = 0;

while (slaying){
    if (youHit > 0){
        console.log("You have hit the fiery Dragon " + damageThisRound + " times");
        totalDamage += damageThisRound;
        
        if (totalDamage >= 4){
            console.log("Ooosh, you slayed it mehn");
            slaying = false;
        }
        else{
            youHit = Math.floor(Math.random() * 2);
        }
    }
    else{
        console.log("Ooops, the Dragon don roast you o");
        slaying = false;
    }
}
