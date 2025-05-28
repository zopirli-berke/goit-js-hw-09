const form = document.querySelector(`.feedback-form`);
const STORAGE_KEY = `feedback-form-state`;

let formData = {};

document.addEventListener(`DOMContentLoaded`, () => {
  const savedData = localStorage.getItem(STORAGE_KEY);
  if (savedData) {
    formData = JSON.parse(savedData);
    form.elements.email.value = formData.email || '';
    form.elements.message.value = formData.message || ``;
  }
});

form.addEventListener(`input`, event => {
  const { name, value } = event.target;
  formData[name] = value.trim();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
});

form.addEventListener(`submit`, event => {
  event.preventDefault();

  const { email, message } = form.elements;

  if (!email.value.trim() || !message.value.trim()) {
    alert('Lütfen tüm alanları doldurun.');
    return;
  }

  console.log('Gönderilen Data:', {
    email: email.value.trim(),
    message: message.value.trim(),
  });

  form.reset();
  localStorage.removeItem(STORAGE_KEY);
  formData = {};
});
