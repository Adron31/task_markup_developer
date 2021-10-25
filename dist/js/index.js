"use strict";

const startPicker = datepicker('#date-from', {
	formatter: (input, date, instance) => {
		// This will display the date as `1/1/2019`.
		let day = date.getDate();
		const month = date.getMonth();
		const year = date.getFullYear();
		if (day < 10) {
			day = '0' + day;
		}
		input.value = `${day}_${month + 1}_${year}`;
	},
	customDays: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
	overlayButton: 'Go!',
	overlayPlaceholder: 'From',
	// Settings.
	maxDate: new Date(2099, 0, 1), // Jan 1st, 2099.
	minDate: new Date(2000, 1, 1), // June 1st, 2016.
	startDate: new Date(), // This month.
	showAllDates: true, // Numbers for leading & trailing days outside the current month will show.
	// ID - be sure to provide a 2nd picker with the same id to create a daterange pair.
	id: 1
});

const endPicker = datepicker('#date-to', {
	formatter: (input, date, instance) => {
		// This will display the date as `1/1/2019`.
		let day = date.getDate();
		const month = date.getMonth();
		const year = date.getFullYear();
		if (day < 10) {
			day = '0' + day;
		}
		input.value = `${day}_${month + 1}_${year}`;
	},
	//position: 'tr', // Top right.
	customDays: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
	overlayButton: 'Go!',
	overlayPlaceholder: 'From',
	// Settings.
	//dateSelected: new Date(), // Today is selected.
	maxDate: new Date(2099, 0, 1), // Jan 1st, 2099.
	minDate: new Date(2016, 5, 1), // June 1st, 2016.
	startDate: new Date(), // This month.
	showAllDates: true, // Numbers for leading & trailing days outside the current month will show.
	// ID - be sure to provide a 2nd picker with the same id to create a daterange pair.
	id: 1
});
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
