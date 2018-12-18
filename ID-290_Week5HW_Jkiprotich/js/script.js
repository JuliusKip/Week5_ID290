$( document ).ready(function() {
  getWeatherByCity('Madrid');
});
function getWeatherByCity(city){
  var finalRequestURL = prepareRequestURL(city);
  getJSON(finalRequestURL);
};
function getWeatherBySearch(){
  var cityInput = $('#city-input').val();
  var finalRequestURL = prepareRequestURL(cityInput);
  getJSON(finalRequestURL);
};
function prepareRequestURL(city){
  var baseURL = 'https://api.openweathermap.org/data/2.5/weather?';
  var APIKey = 'c23161fea560efcf54959cfcd1554ce1';
  var cityRequestParam = 'q=' + city;
  var APIKeyRequestParam = 'appid='+ APIKey;
  var unitCelsiustRequestParm = 'units=metric'
  return baseURL+cityRequestParam+'&'+APIKeyRequestParam+'&'+unitCelsiustRequestParm;
}
function getJSON(requestURL){
  $.getJSON(
  requestURL,
  function(data) {
    // Success!
    console.log(data);
    $('#description').text(data.weather[0].main);
    var weatherDesc = $('#description').text();
    chancheBackground(weatherDesc);
    $('#city').text(data.name);
    $('#temp').text(data.main.temp.toFixed()+'°C');
    $('#city-input').val('');
  }
);
}
function chancheBackground(weatherDesc){
    console.log(weatherDesc);
    switch(weatherDesc){
      case 'Thunderstorm':
        chancheBackgroundURL('https://images.unsplash.com/photo-1504758465325-2c4a444131c7?w=1489');
      break;
      case 'Drizzle':
        chancheBackgroundURL('https://images.unsplash.com/photo-1417008914239-59b898b49382?w=1528');
      break;
      case 'Rain':
        chancheBackgroundURL('https://images.unsplash.com/photo-1434118489318-42a0e62c6235?w=1567&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D');
      break;
      case 'Clear':
        chancheBackgroundURL('https://images.unsplash.com/photo-1495110823793-aa4ed8127d6e?w=1558');
      break;
      case 'Clouds':
        chancheBackgroundURL('https://images.unsplash.com/photo-1505860125062-3ce932953cf5?w=1534');
      break;
      case 'Snow':
        chancheBackgroundURL('https://images.unsplash.com/photo-1504642641925-1c733fb8e8e1?w=1500');
      break;
      case 'Atmosphere':
        chancheBackgroundURL('https://images.unsplash.com/photo-1469386220931-a05a3a71cbb5?w=1502');
      break;
      default:
        chancheBackgroundURL('https://images.unsplash.com/photo-1417444900330-dc44c79af021?ixlib=rb-0.3.5&q=85&fm=jpg&crop=entropy&cs=srgb&s=6fb4aa46b7a14e25ef09f2c1bbdf49c3');
      break;
   }
}
function chancheBackgroundURL(URL){
  $('#forecast-info-container').css("background-image", "");
  $('#forecast-info-container').css('background-image','url('+URL+')');
  $('#forecast-info-container').css("transition", "background-image 0.5s");
  $('#forecast-info-container').css("-webkit-transition", "background-image 0.5s");
  $('#forecast-info-container').css("-moz-transition", "background-image 0.5s");
  $('#forecast-info-container').css("-o-transition", "background-image 0.5s");
}
