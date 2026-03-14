j
document.querySelector(".btn-1").addEventListener("click", function() {
  alert("Welcome to my website!");
});

document.querySelector(".btn-2").addEventListener("click", function() {
  alert("Error! Please enter a valid password.");
});

document.querySelector(".btn-3").addEventListener("click", function() {
  alert("Welcome to JS Land...\nHappy Coding!");
});


document.querySelector(".btn-4").addEventListener("click", function() {
  alert("Welcome to JS Land...");
  alert("Happy Coding!");
});


document.querySelector(".btn-5").addEventListener("click", function() {
  alert("This message was generated through the browser console!");
  console.log("Hello! I can run JS through my web browser console");
});


document.querySelector(".btn-6").addEventListener("click", function() {
 
  let newPage = window.open("", "_blank");





    newPage.alert(" Welcome to the Home Page!");
    newPage.alert(" Welcome to the Blog Page!");
    newPage.alert(" Welcome to the Services Page!");
    newPage.alert(" Welcome to the Contact Page!");
  }, 500);
;


document.querySelector(".btn-7").addEventListener("click", function() {

  alert(" Right answer is D:  ");
   alert("   Body (after your page's HTML)");

 
  document.getElementById("output").innerHTML = `
    <p><b>Practice placement of &lt;script&gt;&lt;/script&gt; element in following sections of your project in exercise 6:</b></p>
    <p>a. Head</p>
    <p>b. Body (before your page's HTML)</p>
    <p>ALERTS | JAVASCRIPT</p>
    <p>c. Body (inside your page's HTML)</p>
    <p>d. Body (after your page's HTML)</p>
  `;
});
