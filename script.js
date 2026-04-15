const form = document.getElementById("contactForm");
const formNote = document.getElementById("formNote");

form.addEventListener("submit", (event) => {
  event.preventDefault();
// test aditya
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  // test aditya
  const phone = document.getElementById("phone").value.trim();
// test aditya
  if (!name || !email || !phone) {
    formNote.textContent = "Please fill in the required fields before submitting.";
    formNote.style.color = "#fca5a5";
    return;
  }
// test aditya
  formNote.textContent = "Thanks! Your inspection request has been received. We’ll contact you soon.";
  formNote.style.color = "#86efac";
  form.reset();
});
