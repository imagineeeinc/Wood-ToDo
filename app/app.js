  if('serviceWorker' in navigator){
  navigator.serviceWorker.register('sw.js')
    .then(reg => console.log('service worker registered'))
    .catch(err => console.log('service worker not registered', err));
}


var obje = [obje]

window.onload = function() {
  display_saved_note();
  function move(id){
            alert(id);     
        }
}

document.onkeypress = function (e) {
    e = e || window.event;
    // use e.keyCode
    //console.log(event);
    if (event.key === 'Enter') {//"&& event.ctrlKeyuse" for using combinations like 'ctrl+_'
      add()
    }
};

function add() {
  var addt = document.getElementById('text').value
  if (addt != "") {
  if (obje != null) {
  //console.log(addt);
  //console.log()
  //document.getElementById('dos').value = '<li><input type="checkbox" id="tos" name="to1" value="to1"><label for="to1"> ' + add + '</label><br></li>';
  //oOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO
  var list = document.createElement('li');
  
  list.id =  addt;
  list.className = "obj";
  list.setAttribute("onclick", "move(addt)");

  var node = document.createTextNode(addt);
  list.appendChild(node);
  obje.push(addt);
  //console.log(obje);

  var element = document.getElementById("dos");
  element.appendChild(list);

  var anchor = document.getElementById(addt);
  var att = document.createAttribute("onclick");
  att.value = "move(" + "this.id" + ")";
  anchor.setAttributeNode(att);

  document.getElementById('text').value = "";
  console.log("added " + addt);
  save(obje)
  }
  else {
  //console.log(addt);
  //console.log()
  //document.getElementById('dos').value = '<li><input type="checkbox" id="tos" name="to1" value="to1"><label for="to1"> ' + add + '</label><br></li>';
  //oOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO
  var list = document.createElement('li');
  
  list.id =  addt;
  list.className = "obj";
  list.setAttribute("onclick", "move(addt)");

  var node = document.createTextNode(addt);
  list.appendChild(node);
  obje = [addt]
  //console.log(obje);

  var element = document.getElementById("dos");
  element.appendChild(list);

  var anchor = document.getElementById(addt);
  var att = document.createAttribute("onclick");
  att.value = "move(" + "this.id" + ")";
  anchor.setAttributeNode(att);

  document.getElementById('text').value = "";
  console.log("added " + addt);
  save(obje)
}
}
}

function check_web_storage_support() {
    if(typeof(Storage) !== "undefined") {
        return(true);
    }
    else {
        alert("Web storage unsupported!");
        return(false);
    }
}

function display_saved_note() {
    if(check_web_storage_support() == true) {
        result = JSON.parse(localStorage.getItem("does"));
        
        obje = result
        //console.log(result)
        //console.log(obje)
        var num = -1;
        //console.log(num);
        
        for (i = 0; i < result.length; i++) {
          num = num + 1;

          if (result[num] == null) {
            //console.log("done loding")
          }
          else {
            var list = document.createElement('li');
            list.id =  result[num];
            list.className =  "obj";
            //list.setAttribute("onclick", "move()", result[num]);
            var node = document.createTextNode(result[num]);
            list.appendChild(node);

            var element = document.getElementById("dos");
            element.appendChild(list);

            var anchor = document.getElementById(result[num]);
            var att = document.createAttribute("onclick");
            att.value = "move(" + "this.id" + ")";
            anchor.setAttributeNode(att);

            document.getElementById('text').value = "";
            //console.log(result.length)
        }
      }

    if(result === null) {
        result = "";
    }
    //console.log(result);
    }
}

function save(obje) {
    if(check_web_storage_support() == true) {
      obte = obje
        localStorage.setItem("does", JSON.stringify(obte));
        //console.log(localStorage.getItem('does'))
        }
    }

function move(that) {
 setTimeout(function(){

  document.getElementById(that).className = "remove"; 
 }, 500);
setTimeout(function(){
  var element = document.getElementById(that);
  element.parentNode.removeChild(element);

  var sto = JSON.parse(localStorage.getItem("does"))
  var re = sto.indexOf(that);
  sto.splice(re, re);
  if (sto.indexOf(that) > -1) {
      sto.pop()
  }  
  console.log(sto)
  if(check_web_storage_support() == true) {
      obte = sto
        localStorage.setItem("does", JSON.stringify(obte));
        //console.log(localStorage.getItem('does'))
        } 
 }, 2000);
}
