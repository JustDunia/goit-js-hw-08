import _ from 'lodash';

const LS_KEY = 'feedback-form-state';
const form = document.querySelector('.feedback-form');

let savedContent;

const onLoadHandler = () => {
  try {
    const savedState = localStorage.getItem(LS_KEY);
    if (savedState) {
      const loadedContent = JSON.parse(savedState);
      form.email.value = loadedContent.email;
      form.message.value = loadedContent.message;
    }
  } catch (error) {
    console.error(error.message);
  }
};

const onInputHandler = () => {
  savedContent = JSON.stringify({
    email: form.email.value,
    message: form.message.value,
  });
  localStorage.setItem(LS_KEY, savedContent);
};

const onSubmitHandler = e => {
  e.preventDefault();
  console.log(savedContent);
  localStorage.removeItem(LS_KEY);
  form.reset();
};

onLoadHandler();
form.addEventListener('input', _.throttle(onInputHandler, 500));
form.addEventListener('submit', onSubmitHandler);
