var images = [
  "./assets/bees.jpg",
  "./assets/bridge.jpg",
  "./assets/butterfly.jpg",
  "./assets/cliff.jpg",
  "./assets/elephant.jpg",
  "./assets/flock.jpg",
  "./assets/fox.jpg",
  "./assets/frog.jpg",
  "./assets/horse.jpg",
  "./assets/lion.jpg",
  "./assets/mountain.jpg",
  "./assets/pier.jpg",
  "./assets/puffins.jpg",
  "./assets/pug.jpg",
  "./assets/runner.jpg",
  "./assets/squirrel.jpg",
  "./assets/tiger.jpg",
  "./assets/turtle.jpg"
];
var titles = [
  "determination",
  "success",
  "inspiration",
  "perspiration",
  "grit",
  "empathy",
  "feelings",
  "hope",
  "believe",
  "try",
  "conviction",
  "accomplishment",
  "achievement",
  "ambition",
  "clarity",
  "challenge",
  "commitment",
  "confidence",
  "action",
  "courage",
  "focus",
  "breathe",
  "gratitude",
  "imagination",
  "kindness",
  "mindfulness",
  "knowledge",
  "opportunity",
  "passion",
  "patience",
  "practice",
  "smile",
  "trust",
  "understanding",
  "wisdom"
];
var quotes = [
  "Don’t downgrade your dream just to fit your reality, upgrade your conviction to match your destiny.",
  "You are braver than you believe, stronger than you seem and smarter than you think.",
  "You are confined only by the walls you build yourself.",
  "The one who has confidence gains the confidence of others.",
  "Act as if what you do makes a difference. It does.",
  "Success is not final, failure is not fatal: it is the courage to continue that counts.",
  "Never bend your head. Always hold it high. Look the world straight in the eye.",
  "What you get by achieving your goals is not as important as what you become by achieving your goals.",
  "Believe you can and you're halfway there.",
  "When you have a dream, you've got to grab it and never let go.",
  "I can't change the direction of the wind, but I can adjust my sails to always reach my destination.",
  "No matter what you're going through, there's a light at the end of the tunnel.",
  "It is our attitude at the beginning of a difficult task which, more than anything else, will affect its successful outcome.",
  "Life is like riding a bicycle. To keep your balance, you must keep moving.",
  "Just don't give up trying to do what you really want to do. Where there is love and inspiration, I don't think you can go wrong.",
  'Limit your "always" and your "nevers."',
  "You are never too old to set another goal or to dream a new dream.",
  "Try to be a rainbow in someone else's cloud.",
  "You do not find the happy life. You make it.",
  "Inspiration comes from within yourself. One has to be positive. When you're positive, good things happen.",
  "Sometimes you will never know the value of a moment, until it becomes a memory.",
  "The most wasted of days is one without laughter.",
  "You must do the things you think you cannot do.",
  "It isn't where you came from. It's where you're going that counts.",
  "It is never too late to be what you might have been.",
  "Happiness often sneaks in through a door you didn't know you left open.",
  "We must be willing to let go of the life we planned so as to have the life that is waiting for us.",
  "Never limit yourself because of others’ limited imagination; never limit others because of your own limited imagination.",
  "Be the change that you wish to see in the world.",
  "Let us make our future now, and let us make our dreams tomorrow's reality.",
  "You don't always need a plan. Sometimes you just need to breathe, trust, let go, and see what happens.",
  "If I cannot do great things, I can do small things in a great way.",
  "Don't wait. The time will never be just right.",
  "With the right kind of coaching and determination you can accomplish anything.",
  "If you have good thoughts they will shine out of your face like sunbeams and you will always look lovely.",
  "No matter what people tell you, words and ideas can change the world.",
  "Each person must live their life as a model for others.",
  "A champion is defined not by their wins but by how they can recover when they fall."
];
const unmotivationalPosters = [
  {
    name: "FAILURE",
    description: "Why bother trying? It's probably not worth it.",
    price: 68.00,
    year: 2019,
    vintage: true,
    img_url: "./assets/failure.jpg",
  },
  {
    name: "MEDIOCRITY",
    description: "Dreams are just that—dreams.",
    price: 127.00,
    year: 2021,
    vintage: false,
    img_url: "./assets/mediocrity.jpg",
  },
  {
    name: "REGRET",
    description: "Hard work rarely pays off.",
    price: 89.00,
    year: 2018,
    vintage: true,
    img_url:  "./assets/regret.jpg",
  },
  {
    name: "FUTILITY",
    description: "You're not good enough.",
    price: 150.00,
    year: 2016,
    vintage: false,
    img_url:  "./assets/futility.jpg",
  },
  {
    name: "DEFEAT",
    description: "It's too late to start now.",
    price: 35.00,
    year: 2023,
    vintage: false,
    img_url:  "./assets/defeat.jpg",
  },
  {
    name: "HOPELESSNESS",
    description: "Stay in your comfort zone; it's safer.",
    price: 112.00,
    year: 2020,
    vintage: true,
    img_url: "./assets/hopelessness.jpg",
  },
  {
    name: "LAZINESS",
    description: "You can't change anything.",
    price: 25.00,
    year: 2022,
    vintage: false,
    img_url: "./assets/laziness.jpg",
  },
  {
    name: "PROCRASTINATION",
    description: "Better to avoid failure by not trying at all.",
    price: 48.00,
    year: 2017,
    vintage: true,
    img_url: "./assets/procrastination.jpg",
  },
  {
    name: "DESPAIR",
    description: "Let someone else do it; you’ll just mess it up.",
    price: 73.00,
    year: 2015,
    vintage: false,
    img_url: "./assets/despair.jpg",
  },
  {
    name: "NEGLECT",
    description: "Happiness is overrated.",
    price: 160.00,
    year: 2019,
    vintage: true,
    img_url: "./assets/neglect.jpg",
  },
  {
    name: "FEAR",
    description: "Giving up is always an option.",
    price: 91.00,
    year: 2014,
    vintage: false,
    img_url: "./assets/fear.jpg",
  },
  {
    name: "APATHY",
    description: "No one cares about your effort.",
    price: 110.00,
    year: 2016,
    vintage: true,
    img_url: "./assets/apathy.jpg",
  },
  {
    name: "MISERY",
    description: "Why take risks when you can stay stagnant?",
    price: 55.00,
    year: 2021,
    vintage: false,
    img_url: "./assets/misery.jpg",
  },
  {
    name: "BLAME",
    description: "Expect disappointment and you'll never be disappointed.",
    price: 39.00,
    year: 2017,
    vintage: true,
    img_url: "./assets/blame.jpg",
  },
  {
    name: "DOUBT",
    description: "Success is for other people, not you.",
    price: 140.00,
    year: 2020,
    vintage: false,
    img_url: "./assets/doubt.jpg",
  }
];
var savedPosters = [];
var currentPoster;

// ~~~~~Query Selectors~~~~~ //

// Main Poster Selectors//
var displayedPoster = document.querySelector('.poster')
var poster = document.querySelector('.main-poster');
var posterImage = document.querySelector('.poster-img');
var posterTitle = document.querySelector('.poster-title');
var posterQuote = document.querySelector('.poster-quote');
// Buttons//
var posterButton = document.querySelector('.show-random');
var makePosterButton = document.querySelector('.show-form');
var showSavedButton = document.querySelector('.show-saved');
var showPosterButton = document.querySelector('.make-poster');
var savePosterButton = document.querySelector('.save-poster')
var backToMain = document.querySelector('.back-to-main-saved');
var neverMindMain = document.querySelector('.show-main');
var unmotivationalButton = document.querySelector('.show-unmotivational')
var backToMainUnmotivational = document.querySelector('.back-to-main-unmotivational')
// Hiddens//
var makePosterForm = document.querySelector('.poster-form');
var showSavedPosters = document.querySelector('.saved-posters');
var savedPostersGrid = document.querySelector('.saved-posters-grid')
var unmotivationalContainer = document.querySelector('.displayed-unmotivationals');
var unmotivationalPostersGrid = document.querySelector('.unmotivational-posters')
// Form Fields//
var showPosterURL = document.querySelector('#poster-image-url')
var showPosterTitle = document.querySelector('#poster-title')
var showPosterQuote = document.querySelector('#poster-quote')
// Delete Poster//
var deleteUnMotivationalPoster = document.querySelectorAll('.mini-unmotivational-poster')

// ~~~~~Event Listeners~~~~~ //

// Load Random Poster When Page Loads//
window.addEventListener('load', getRandomPoster);
// Generate Random Poster//
posterButton.addEventListener('click', getRandomPoster);
// Un-Motivational Poster Button//
unmotivationalButton.addEventListener('click', function(){
  poster.classList.toggle('hidden');
  unmotivationalPostersGrid.classList.toggle('hidden')
  displayUnmotivationalPosters(cleanData(unmotivationalPosters));
});
// Make a Poster Button//
makePosterButton.addEventListener('click', function() {
  poster.classList.toggle('hidden');
  makePosterForm.classList.toggle('hidden');
});
//Show Saved Posters Button//
showSavedButton.addEventListener('click', function() {
  poster.classList.toggle('hidden');
  showSavedPosters.classList.remove('hidden');
  displaySavedPosters();
});
//Nevermind Button//
neverMindMain.addEventListener('click', function() {
  poster.classList.toggle('hidden');
  makePosterForm.classList.toggle('hidden');
});
//Back to Main Buttons//
backToMain.addEventListener('click', function() {
  poster.classList.toggle('hidden');
  showSavedPosters.classList.toggle('hidden');
});
backToMainUnmotivational.addEventListener('click', function() {
  poster.classList.toggle('hidden');
  unmotivationalPostersGrid.classList.toggle('hidden');
});
//Make Your Own Poster Button and Form//
showPosterButton.addEventListener('click', function(event){
  event.preventDefault();
  currentPoster = createPoster(showPosterURL.value, showPosterTitle.value, showPosterQuote.value);
  
  images.push(currentPoster.imageURL);
  quotes.push(currentPoster.quote);
  titles.push(currentPoster.title);

  posterImage.src = currentPoster.imageURL;
  posterTitle.innerText = currentPoster.title;
  posterQuote.innerText = currentPoster.quote;

  poster.classList.remove('hidden');
  makePosterForm.classList.add('hidden');
});
// Save Poster Button and Function//
savePosterButton.addEventListener('click', function(){
  saveCurrentPoster();
});
// Double-click Mini Un-Motivational Poster//
deleteUnMotivationalPoster.addEventListener('dblclick', function(event) {
  deletePoster(event);
});

// ~~~~~Functions~~~~~//

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
};
function createPoster(imageURL, title, quote) {
  return {
    id: Date.now(), 
    imageURL: imageURL, 
    title: title, 
    quote: quote}
};
function getRandomPoster() {
  var randomImage = images[getRandomIndex(images)];
  var randomTitle = titles[getRandomIndex(titles)];
  var randomQuote = quotes[getRandomIndex(quotes)];

  currentPoster = createPoster(randomImage, randomTitle, randomQuote)

  posterImage.src = randomImage;
  posterQuote.innerText = randomQuote;
  posterTitle.innerText = randomTitle;
};
function saveCurrentPoster() {
  var noDuplicates = savedPosters.some(function(poster) {
    return poster.id === currentPoster.id;
  });
  if (!noDuplicates) {
    savedPosters.push(currentPoster);
  }
};
function displaySavedPosters() {
  savedPostersGrid.innerHTML = ''; 
  savedPosters.forEach(function(poster){
    var miniPoster = document.createElement('div');
    miniPoster.classList.add('mini-poster');

    miniPoster.innerHTML = `
      <img src="${poster.imageURL}" class="mini-poster-img">
      <h2 class="mini-poster-title">${poster.title}</h2>
      <h4 class="mini-poster-quote">${poster.quote}</h4>
    `;
    savedPostersGrid.appendChild(miniPoster);
  });
};
function cleanData(posters) {
  return posters.map((poster) => {
    return{
      id: Date.now(),
      img_url: poster.img_url,
      title: poster.name,
      description: poster.description}
    })
};
function displayUnmotivationalPosters(cleanedPosters) {
  unmotivationalContainer = document.querySelector('.displayed-unmotivationals');
  unmotivationalContainer.innerHTML = '';
  cleanedPosters.forEach(function(poster) {
    var miniPoster = document.createElement('div');
    miniPoster.classList.add('mini-unmotivational-poster');

    miniPoster.innerHTML = `
      <img src="${poster.img_url}" class="mini-unmotivational-poster-img">
      <h2 class="mini-unmotivational-poster-title">${poster.title}</h2>
      <h4 class="mini-unmotivational-poster-description">${poster.description}</h4>
    `;
    unmotivationalContainer.appendChild(miniPoster)
  });
};
function deletePoster(event) {
  deleteUnMotivationalPoster = document.querySelectorAll('.mini-unmotivational-poster')
  event.forEach(function(poster){
    var deleteThis = document.splice(0, 1)
  })
}
// gotta delete div.mini-unmotivational-poster
// create an eventListener for the double click...
// create a querySelector for that element...
// create a function that deletes it from the array and removes it, then re-renders the updated DOM

// From the unmotivational posters view, if a user double clicks a poster, it will be deleted
// HTML onclick attributes should not be used in any HTML code - all functionality should be through JavaScript.
// The poster should be removed from the unmotivational posters data set and should no longer be displayed on the DOM.