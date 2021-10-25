const datepickerForm = document.querySelector('.datepicker-header');
const resetButtons = datepickerForm.querySelectorAll('.datepicker-header__btn');
if (resetButtons.length !== 0) {
	for (let i = 0; i < resetButtons.length; i++) {
		const btn = resetButtons[i];
		btn.addEventListener('click', function () {
			const input = btn.parentElement.querySelector('input');
			input.value = '';
			if (input.id === 'date-from') {
				startPicker.setDate();
			} else {
				endPicker.setDate();
			}
		});
	}
}

const gridBtn = document.querySelector('#btn-grid');
const rowBtn = document.querySelector('#btn-row');
const gridList = document.querySelector('#gallary-grid-list');
const rowList = document.querySelector('#gallary-row-list');

gridBtn.addEventListener('click', function (evt) {
	evt.preventDefault();
	if (this.classList.contains('_active')) {
		rowList.classList.remove('_active');
		gridList.classList.add('_active');
		gridBtn.classList.remove('_active');
		rowBtn.classList.add('_active');
	}
});

rowBtn.addEventListener('click', function (evt) {
	evt.preventDefault();
	if (this.classList.contains('_active')) {
		gridList.classList.remove('_active');
		rowList.classList.add('_active');
		rowBtn.classList.remove('_active');
		gridBtn.classList.add('_active');

	}
});