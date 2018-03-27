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

function validate(form) {
  var fields = form.elements;

  form.addEventListener('submit', function(evt) {
    isValid = true;

    for (var i = 0; i < fields.length && isValid; i++) {
      if (fields[i].type !== 'submit') {
        isValid = fields[i].value;
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
  }
})

addPopupHandlers(feedbackPopupOpen, feedbackPopupClose, feedbackPopup);
addPopupHandlers(locationPopupOpen, locationPopupClose, locationPopup);
