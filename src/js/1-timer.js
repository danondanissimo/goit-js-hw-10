import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import iziToast from 'izitoast';

import 'izitoast/dist/css/iziToast.min.css';

const startBtn = document.querySelector('[data-start]');
const timePicker = document.querySelector('#datetime-picker');

const timerDays = document.querySelector('[data-days]');
const timerHours = document.querySelector('[data-hours]');
const timerMinutes = document.querySelector('[data-minutes]');
const timerSeconds = document.querySelector('[data-seconds]');
let destinationDate = 0;

class Timer {
  constructor(tick) {
    this.tick = tick;
    this.isActive = false;
  }

  start() {
    if (this.isActive) return;
    this.isActive = true;
    this.initTime = Date.now();
    console.log(this.initTime);

    setInterval(() => {
      const current = Date.now();
      const diff = destinationDate - current;
      const timeObj = this.convertMs(diff);
      this.tick(timeObj);
    }, 1000);
  }

  convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    // Remaining days
    const days = Math.floor(ms / day);
    // Remaining hours
    const hours = Math.floor((ms % day) / hour);
    // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
    // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);

    return { days, hours, minutes, seconds };
  }
}

const timer = new Timer(tick);

startBtn.disabled = true;
timePicker.disabled = false;

startBtn.addEventListener('click', event => {
  timer.start();
  startBtn.disabled = true;
  timePicker.disabled = true;
});

function tick({ days, hours, minutes, seconds }) {
  timerDays.textContent = addZero(days);
  timerHours.textContent = addZero(hours);
  timerMinutes.textContent = addZero(minutes);
  timerSeconds.textContent = addZero(seconds);
}

function addZero(value) {
  return value.toString().padStart(2, '0');
}

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log('I am Mr Meseeks, look at meeee');
    destinationDate = selectedDates[0].getTime();
    if (destinationDate < Date.now()) {
      iziToast.show({
        title: 'Hey',
        message: 'Please choose a date in the future',
        closeOnClick: true,
        closeOnEscape: true,
      });
    } else {
      startBtn.disabled = false;
    }
  },
};

flatpickr(timePicker, options);

// console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
// console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
// console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}
