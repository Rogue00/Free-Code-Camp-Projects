$(document).ready(function() {

 
  var apiKey;
  var getIp = "http://ip-api.com/json";
  $.getJSON(getIp, function(dataIp) {
    var lat = dataIp.lat;
    var lon = dataIp.lon;
    var fahr;
    var celsius;
    var kelvin;
    var changeTemp= true;
    var icon;
    
    //$("#weather").text(lat);
     apiKey = "http://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+lon+ "&appid=3803f13e36ce7e19cce62bb28764f921";
   
     //console.log(apiKey);
     $.getJSON(apiKey, function(data) {
console.log(data);
$("#weather").html(data.weather[0].description);  
       
 // add weather icons
 var iconPng = 'http://openweathermap.org/img/w/' + data.weather[0].icon + '.png'
    $("#icon").attr("src", iconPng);
      console.log(iconPng);
       
     kelvin= data.main.temp;
       var windspeed= data.wind.speed;
       var city= data.name;
     
            
// changes temp to fahrenheight       
fahr= (kelvin * (9/5) - 459.67).toFixed(1);
       
 //changes temp to celcius      
celsius= (kelvin - 273).toFixed(1);
       
       
 //change windspeed to mph
 windspeed= (2.2378 * (windspeed)).toFixed(1);
 
       
       
  //display info  
     
       
  $("#city").html(city);      
   $("#celsius").html(celsius);
    $("#windspeed").html(windspeed + " mph");
       
       
    
 //switch between fahr and celsius
 $("#fahr").html(fahr +" &#x2109;");  
     $("#fahr").click(function() {
         if(changeTemp=== false)  {
             $("#fahr").html(celsius +  " &#x2103;");
               changeTemp= true;
             } 
          else {
              $("#fahr").html(fahr +" &#x2109;");
                changeTemp= false;
          }
       
  //this is where i'm trying to make the background images change with the current temp     
       if (fahr > 80) {    
          
        }
           else if (fahr > 70) {
               $("#body").css("background-image", "url (http://i68.tinypic.com/106ivf9.jpg)");  
             
                         
             
           };
        
      }); //change temp
       
    }); //data
  }); //dataIp
}); //ready

/*


https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=AIzaSyClaBlZN8BLOSAc6h0EXK921wA6NIfwX-c




AIzaSyClaBlZN8BLOSAc6h0EXK921wA6NIfwX-c
*/