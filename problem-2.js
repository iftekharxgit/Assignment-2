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
 

