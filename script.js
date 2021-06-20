
function sync(){
    let selectInputValue = document.getElementById("searchBox").value;
    console.log(selectInputValue);
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "http://192.168.187.130/cgi-bin/server.py?var="+selectInputValue, false);
    xhr.send();
    let output = xhr.responseText;
    document.getElementById("container").innerHTML = output;
  }   
  
let i = 0;
function gesture(){
  let ref = document.getElementById("image");
  console.log("call");
  ref.style.left = `${i}px`;
  i++;
  if(i === 1500){
    i = 0;
  }
  setTimeout(gesture, 10); // setTimeout() function used to delay 
}

