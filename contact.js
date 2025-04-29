const formContainer = document.getElementById('contact');
const form = document.createElement('form'); 
//used const because form and formContainer are not changing
form.innerHTML = `
  <label for="name">Name:</label>
  <input type="text" id="name" name="name" required />

  <label for="email">Email:</label>
  <input type="email" id="email" name="email" required />

  <label for="message">Message:</label>
  <textarea id="message" name="message" rows="5" required></textarea>

  <button type="submit">Send</button>`;
formContainer.appendChild(form);

form.addEventListener('submit', function(event) {
  event.preventDefault(); //the default action is to reload the page

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
    //trim to make sure there's no unneeded spaces
  if (name && email && message) {
    form.reset();
    const successMsg = document.createElement('p');
    successMsg.className = 'success';
    successMsg.textContent = 'Thanks for contacting us! We will get back to you shortly.';
    formContainer.appendChild(successMsg);
  } else {
    alert('Please fill in all fields.');
  }
});