function httpGetSync(filePath) {
  var xhr = new XMLHttpRequest();
  
  var finalPath = filePath;
  
  //console.log("finalPath=" + finalPath);
  
  xhr.open("GET", finalPath, false);
  xhr.send();
  return xhr.responseText;
}

function preloadTemplate(path) {
  return inject(function ($templateCache) {
    var response = httpGetSync(path);
    //console.log(response);
    $templateCache.put(path, response);
  });
}