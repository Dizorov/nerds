var writeUs = document.querySelector('.modal-write-us'),
	writeUsOpening = document.querySelector('.contacts-block__button'),
	writeUsClosing = document.querySelector('.modal-write-us__close-button');

writeUsOpening.addEventListener('click', function(evt) {
	evt.preventDefault();
	writeUs.classList.add('modal-write-us_is-showed');
});

writeUsClosing.addEventListener('click', function(evt) {
	evt.preventDefault();
	writeUs.classList.remove('modal-write-us_is-showed');
});