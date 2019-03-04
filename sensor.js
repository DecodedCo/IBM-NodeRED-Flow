// Get JSON data from local API
$.getJSON( "http://127.0.0.1:1880/data", function(data) {
  
  // view data in JavaScript console
  console.log(data);
  
  // Store temperature from data object 
  var temp = data.temp;
  
  // Add to bottom left box on dashboard
  $("#FeatureLowLeft").append("<h3>The current temperature is " + temp + "&deg;C</h3>")
  
})