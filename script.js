const form = document.getElementById("contactForm");
const formNote = document.getElementById("formNote");

form.addEventListener("submit", (event) => {
<<<<<<< HEAD
  event.preventDefault()
=======
  event.preventDefault();
// test aditya
>>>>>>> 6784daab6b64151c802d9417a50dc7cf2d0f4d84
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
<<<<<<< HEAD

  formNote.textContent = "Thanks! Your inspection request has been received. We�ll contact you soon.";
=======
// test aditya
  formNote.textContent = "Thanks! Your inspection request has been received. We’ll contact you soon.";
>>>>>>> 6784daab6b64151c802d9417a50dc7cf2d0f4d84
  formNote.style.color = "#86efac";
  form.reset();
});
