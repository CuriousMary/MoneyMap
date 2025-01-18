 // Fetch the navbar HTML file and load it into the div
 fetch('navbar.html')
 .then(response => response.text())
 .then(data => {
     document.getElementById('navbar-placeholder').innerHTML = data;
 });