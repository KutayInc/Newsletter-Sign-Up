const form = document.getElementById("form");
const content = document.getElementById("container");
const success = document.getElementById("success");
const mailSpan = document.getElementById("email-success");
const dismiss = document.getElementById("dismiss");
const mailInput = document.getElementById("email");
const mailError = document.getElementById("mail-error");

console.log(form);

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  const email = document.getElementById("email").value;

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
