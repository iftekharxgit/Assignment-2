// Problem - 1 

function matchWinner(teamAGoals, teamBGoals) {
    if(typeof teamAGoals !== "number" || typeof teamBGoals !== "number"){
        return "Invalid";
    }
 if(teamAGoals>teamBGoals){
  return 'Team A Won';
 }
 else if(teamAGoals<teamBGoals){
    return "Team B Won";
 }

 else{
  return 'Draw';
 }
 
}

// Problem - 2

function isElevatorSafe(weights) {
    if (!Array.isArray(weights)) {
        return "Invalid";
 }
    let totalweight = 0;
    for (let i = 0; i < weights.length; i++) {
      
        totalweight = totalweight + weights[i];
    }
  if(totalweight<=400){
    return true;
  }
  else{
    return false;
  }
}
 
// Problem - 3


function calculateAiCost(tokensUsed) {
    if (typeof tokensUsed !== "number" || tokensUsed < 0) {
        return "Invalid";
    }

    if (tokensUsed <= 500) {
        return 0;
    }

    let extraToken = tokensUsed - 500;
    let fullHundred = Math.floor(extraToken / 100);
    let totalCost = fullHundred * 5;

    return totalCost;
}

// Problem - 4

function topRatedRestaurant(restaurants) {
   if(!Array.isArray(restaurants) || restaurants.length===0)
   {
    return "Invalid";
   }
   
   let topRestaurant = restaurants[0];
   for( let i = 0; i<restaurants.length; i++){
     if (restaurants[i].rating > topRestaurant.rating) {
            topRestaurant = restaurants[i];
        }
   }
   return topRestaurant.name.toUpperCase();
}


// Problem - 5

function averageResponseTime(times) {
    if (!Array.isArray(times)) {
        return "Invalid";
    }

    if (times.length === 0) {
        return "Invalid";
    }

    let total = 0;

    for (let i = 0; i < times.length; i++) {

        if (typeof times[i] !== "number") {
            return "Invalid";
        }

        total = total + times[i];
    }

    return total / times.length;
}



