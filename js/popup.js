var feedbackPopup = document.querySelector('.popup--feedback');
var feedbackPopupOpen = document.querySelector('.contacts .button');
var feedbackPopupClose = feedbackPopup.querySelector('.popup__close');
var locationPopup = document.querySelector('.popup--location');
var locationPopupOpen = document.querySelector('.contacts .map-container');
var locationPopupClose = locationPopup.querySelector('.popup__close');

feedbackPopupOpen.addEventListener('click', function(evt) {
  evt.preventDefault();
  document.body.classList.add('prevent-scroll');
  feedbackPopup.classList.add('popup--active');
})

feedbackPopupClose.addEventListener('click', function(evt) {
  evt.preventDefault();
  document.body.classList.remove('prevent-scroll');
  feedbackPopup.classList.remove('popup--active');
})

locationPopupOpen.addEventListener('click', function(evt) {
  evt.preventDefault();
  document.body.classList.add('prevent-scroll');
  locationPopup.classList.add('popup--active');
})

locationPopupClose.addEventListener('click', function(evt) {
  evt.preventDefault();
  document.body.classList.remove('prevent-scroll');
  locationPopup.classList.remove('popup--active');
})
