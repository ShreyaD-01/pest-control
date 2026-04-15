const form = document.getElementById("contactForm");
const formNote = document.getElementById("formNote");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();

  if (!name || !email || !phone) {
    formNote.textContent = "Please fill in the required fields before submitting.";
    formNote.style.color = "#fca5a5";
    return;
  }

  formNote.textContent = "Thanks! Your inspection request has been received. We’ll contact you soon.";
  formNote.style.color = "#86efac";
  form.reset();
});
