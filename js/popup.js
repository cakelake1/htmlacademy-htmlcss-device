function addPopupHandlers(openControl, closeControl, popup) {
  openControl.addEventListener('click', function(evt) {
    evt.preventDefault();
    document.body.classList.add('prevent-scroll');
    popup.classList.add('popup--active');
  })

  closeControl.addEventListener('click', function(evt) {
    evt.preventDefault();
    document.body.classList.remove('prevent-scroll');
    popup.classList.remove('popup--active');
  })
}

function addFocusHandler (input) {
  var firstClass = input.classList[0];
  input.addEventListener('focus', function () {
    input.classList.remove(firstClass + '--invalid');
  })
}

function validate(form) {
  var inputs = form.querySelectorAll('input');

  form.addEventListener('submit', function(evt) {
    isValid = true;

    for (var i = 0; i < inputs.length; i++) {
      if (!inputs[i].value) {
        isValid = false;
        var firstClass = inputs[i].classList[0];
        inputs[i].classList.add(firstClass + '--invalid');
      }
    }

    if (!isValid) {
      evt.preventDefault();
      feedbackPopup.classList.add('popup--error')
      setTimeout(function () {
        feedbackPopup.classList.remove('popup--error')
      }, 600)
    }
  })

  console.log(inputs);

  for (var i = 0; i < inputs.length; i++) {
    addFocusHandler(inputs[i]);
  }
}

var feedbackPopup = document.querySelector('.popup--feedback');
var feedbackPopupOpen = document.querySelector('.contacts .button');
var feedbackPopupClose = feedbackPopup.querySelector('.popup__close');
var locationPopup = document.querySelector('.popup--location');
var locationPopupOpen = document.querySelector('.contacts .map-container');
var locationPopupClose = locationPopup.querySelector('.popup__close');
var form = document.querySelector('.popup-form');

validate(form);

window.addEventListener('keyup', function(evt) {
  var popup = document.querySelector('.popup--active');
  if (!popup) return;
  if (evt.keyCode === 27) {
    popup.classList.remove('popup--active');
    document.body.classList.remove('prevent-scroll');
  }
})

addPopupHandlers(feedbackPopupOpen, feedbackPopupClose, feedbackPopup);
addPopupHandlers(locationPopupOpen, locationPopupClose, locationPopup);
