import iziToast from 'izitoast';

import 'izitoast/dist/css/iziToast.min.css';

const delayInput = document.querySelector('[name="delay"]');

const form = document.querySelector('form');

form.addEventListener('submit', event => {
  event.preventDefault();
  const delay = delayInput.value;
  createPromise(delay, form.elements.state.value)
    .then(delay => {
      console.log(`✅ Fulfilled promise in ${delay}ms`);
      iziToast.show({
        message: `✅ Fulfilled promise in ${delay}ms`,
        closeOnClick: true,
        closeOnEscape: true,
      });
    })
    .catch(delay => {
      console.log(`❌ Rejected promise in ${delay}ms`);
      iziToast.show({
        message: `❌ Rejected promise in ${delay}ms`,
        closeOnClick: true,
        closeOnEscape: true,
      });
    });

  form.reset();
});

function createPromise(delay, state) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === 'fulfilled') {
        resolve(delay);
      } else {
        reject(delay);
      }
    }, delay);
  });
  return promise;
}
