function submitEmail() {
  var emailName = getElementById("name").value;
  var emailAddress = getElementById("email").value;
  var emailMessage = getElementById("subject").innerText;
  window.location.href = "mailto:emailName?subject=Feedback%20for%20TCT&body="+encodeURIComponent(emailMessage);
}


window.onscroll = function() {myFunction()};
var panel = document.getElementById("panel");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    panel.classList.add("sticky");
  } else {
    panel.classList.remove("sticky");
  }
}

function openEmail() {
  window.open('mailto:timothymoon08@gmail.com');
} 

function submit(){
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;

  if (name.trim() == "" || email.trim() == "" || message.trim() == "") {
      //handle exception, prompt user
  }

  name    = encodeURIComponent(name);
  email   = encodeURIComponent(email);
  message = encodeURIComponent(message);

  //%0A is the replacement of \n in link
  window.open("mailto:shieldcoder.team@gmail.com?subject=Feedback&body=Hello,%0A"+message+"%0Amy email: "+email+"%0A%0AThank%20you,%0A"+name);
}