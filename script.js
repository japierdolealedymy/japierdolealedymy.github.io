var requestURL = 'https://api.ipify.org?format=json'
var request = new XMLHttpRequest();


request.open('GET', requestURL)
request.responseType = 'json'
request.send();
          
request.onload = function() {
  var response = request.response
  console.log(response)
  document.getElementById('o chuj').innerHTML = response.ip
}


