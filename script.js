
function updateClock() {
    const hourElement = document.getElementById("hour");
    const minuteElement = document.getElementById("minutes");
    const secondElement = document.getElementById("seconds");
    const ampmElement = document.getElementById("ampm");
  
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
    hourElement.textContent = hours < 10 ? `0${hours}` : hours;
    minuteElement.textContent = minutes < 10 ? `0${minutes}` : minutes;
    secondElement.textContent = seconds < 10 ? `0${seconds}` : seconds;
    ampmElement.textContent = ampm;
  }
  
  function updateCountdown() {
    const eventDate = new Date('2023-12-31').getTime();
    const now = new Date().getTime();
    const timeDifference = eventDate - now;

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    document.getElementById('countdown').innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}
const timeFacts = [
  'The largest sundial in the world is the Jantar Mantar in India.',
  'The first mechanical clock was created in the 14th century.',
  'A day on Venus is longer than a year on Venus.',
];

function getRandomFact() {
  const randomIndex = Math.floor(Math.random() * timeFacts.length);
  return timeFacts[randomIndex];
}

function updateRandomFact() {
  document.getElementById('random-fact').innerHTML = getRandomFact();
}

// Greetings
function getTimeBasedGreeting() {
  const now = new Date();
  const hours = now.getHours();
 
  if (hours < 12) {
    return 'Good morning!';
} else if (hours < 18) {
    return 'Good afternoon!';
} else if (hours < 22) {
    return 'Good evening!';
} else {
    return 'Good night!';
}
}
setInterval(() => {
  updateClock();
  updateCountdown();
  updateRandomFact();
  updateTimeBasedGreeting();
}, 1000);

// Initial calls to display features immediately
updateClock();
updateCountdown();
updateRandomFact();
updateTimeBasedGreeting();
function updateTimeBasedGreeting() {
  const greetingElement = document.getElementById('time-based-greeting');
  greetingElement.textContent = getTimeBasedGreeting();
}

console.log(getTimeBasedGreeting());
