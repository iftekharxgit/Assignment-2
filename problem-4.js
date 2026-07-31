function topRatedRestaurant(restaurants) {
   if(!Array.isArray(restaurants) || restaurants.length===0)
   {
    return "Invalid";
   }
   
   let topRestaurant = restaurants[0];
   for( i = 0; i<restaurants.length; i++){
     if (restaurants[i].rating > topRestaurant.rating) {
            topRestaurant = restaurants[i];
        }
   }
   return topRestaurant.name.toUpperCase();
}
// console.log(topRatedRestaurant([
//     { name: "Chillox", rating: 4.5 },
//     { name: "Sultan's Dine", rating: 4.8 }
// ]));

// console.log(topRatedRestaurant([]));