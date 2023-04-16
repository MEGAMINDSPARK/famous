const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const name = form.elements.name.value.trim();
  const email = form.elements.email.value.trim();
  const phone = form.elements.phone.value.trim();
  const date = form.elements.date.value;
  const time = form.elements.time.value;
  if (name === '' || email === '' || phone === '' || date === '' || time === '') {
    alert('Please fill in all the required fields');
    return;
  }
  form.submit();
});
