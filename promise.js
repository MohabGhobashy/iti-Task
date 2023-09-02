function fetchData(url){
    var promise=new Promise(function(resolve,reject){
        var xhr=new XMLHttpRequest();
        xhr.open('GET',url);
        xhr.onreadystatechange=function(){
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                  var data = JSON.parse(xhr.responseText);
                  resolve(data);
                } else {
                  reject(new Error(`XHR request failed with status ${xhr.status}`));
                }
              }   
        }
        xhr.send();

   })
return promise
}

var Url = "https://jsonplaceholder.typicode.com/users";

console.log(fetchData(Url));