var Name = document.getElementById("name");
var Email = document.getElementById("email");
var Subject = document.getElementById("subject");

function info(name, email, subject) {
  var returnObject = {
    name: name.value,
    subject: subject.value,
    email: email.value
  }
  return returnObject
}

function submitted() {
  var infoReturnedObject = info(Name, Email, Subject)
  console.log("Your name is: " + infoReturnedObject.name)
  console.log("Your e-mail is: " + infoReturnedObject.email)
  console.log("The issue is: " + infoReturnedObject.subject)
  document.getElementById('pageOne').style.display = 'none';
  document.getElementById('pageTwo').style.display = 'block';
}

function back() {
  document.getElementById('pageOne').style.display = 'block';
  document.getElementById('pageTwo').style.display = 'none';
}