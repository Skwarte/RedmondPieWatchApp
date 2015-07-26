var xhrRequest = function (url, type, callback) {
  var xhr = new XMLHttpRequest();
  xhr.onload = function() {
    callback(this.responseText);
  };
  xhr.open(type, url);
  xhr.send();
};
function getFiller() {
  var url = 'https://www.kimonolabs.com/api/45hg9mne?apikey=xTQMfZbyqaCjLhHrNLGjqlzpkDC3Bppz';
  xhrRequest(url, 'GET', function(responseText){
      var json = JSON.parse(responseText);
  var count;
  for(count = 1; count < 21; count++ ) {
    console.log(count);
   // var title = json.results.collection + count + "[0]" + ".Title" + count + ".text";
   var title = json.results.collection1[0].Title1.text; 
    //+ 1[0]+".Title" + 1 + ".text";
    //var title2 = json[0].collection.count[0].Title
    console.log("after title");
    console.log(title);
  }
});
}

//Listen for when the watchapp is open
Pebble.addEventListener('ready', 
                        function(e) {
                          console.log('PebbleKit JS ready!');
                          getFiller();
                        });
//Listen for when an AppMessage is received
Pebble.addEventListener('appmessage',
                       function(e) {
                         console.log('AppMessage Received');
                         getFiller();
                       });
