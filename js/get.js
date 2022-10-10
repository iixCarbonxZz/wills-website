//An attempt to inject HTML into the page using AJAX.
function getNav(element){

  if(element == "nav"){
    var url = "./page-elements/navbar.html";
    var destTag = "navbar";
  }
  else if(element == "header"){
    var url = "./page-elements/header.html";
    var destTag = "header";
  }

  let req = new Request(url, {
    method: "GET"
  });

  fetch(req)
  .then(response => response.text())
  .then (text => {
    let dest = document.querySelector(destTag);
    dest.innerHTML = text;
  })
}
