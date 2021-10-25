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