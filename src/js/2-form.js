const form = document.querySelector('.feedback-form');
const localStorageKey = 'feedback-form-state';
let formData = { email: '', message: '' };

form.addEventListener('input', evt => {
  evt.preventDefault();
  formData.email = form.elements.email.value.trim();
  formData.message = form.elements.message.value.trim();
  localStorage.setItem(localStorageKey, JSON.stringify(formData));
});

window.addEventListener('load', evt => {
  const localFormData = JSON.parse(
    localStorage.getItem(localStorageKey) ?? '{}'
  );
  formData = {
    ...localFormData,
    email: localFormData.email ?? '',
    message: localFormData.message ?? '',
  };
  form.elements.email.value = formData.email;
  form.elements.message.value = formData.message;
});

form.addEventListener('submit', evt => {
  evt.preventDefault();
  if (!formData.email || !formData.message) {
    alert('Fill please all fields');
    return;
  }
  console.log(formData);
  formData.email = '';
  formData.message = '';
  localStorage.removeItem(localStorageKey);
  form.reset();
});
