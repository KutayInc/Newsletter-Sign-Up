var form = document.getElementById("form");
var content = document.getElementById("container");
var success = document.getElementById("success");
var mailSpan = document.getElementById("email-success");
var dismiss = document.getElementById("dismiss");
var mailInput = document.getElementById("email");
var mailError = document.getElementById("mail-error");

console.log(form);

form.addEventListener("submit", function (e) {
  e.preventDefault();

  var emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  var email = document.getElementById("email").value;

  if (emailRegex.test(email)) {
    content.style.display = "none";
    success.style.display = "flex";
    mailSpan.innerHTML = email;
  } else {
    mailInput.style.borderColor = "hsl(4, 100%, 67%)";
    mailInput.style.backgroundColor = "hsla(4, 100%, 67%, 0.2)";
    mailInput.style.color = "hsl(4, 100%, 67%)";
    if (screen.width < 1440) {
      mailError.style.display = "none";
    } else {
      mailError.style.display = "block";
    }
  }
});

dismiss.addEventListener("click", function (e) {
  e.preventDefault();
  content.style.display = "flex";
  success.style.display = "none";
  form.reset();
});
