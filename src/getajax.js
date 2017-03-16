module.exports = function(url, doneCallback, errorCallback) {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onload = function () {
    doneCallback && doneCallback(xmlhttp.responseText);
  };
  xmlhttp.onerror = function(){
    errorCallback && errorCallback(xmlhttp);
  }
  xmlhttp.open("GET", url, true);
  xmlhttp.send();
}
