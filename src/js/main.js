let testFn = (x, y) => x + y
console.log(testFn(1, 2))
console.log(testFn(10, 8))


let ctx = document.querySelector('#chart').getContext('2d');
let myChart = new Chart(ctx, {
	type: 'line',
	data: {
		labels: ['01', '02', '03', '04', '05', '06'],
		datasets: [{
			label: 'Qwerty',
			data: [10, 15, 3, 7, 2, 6],
			// backgroundColor: '#8f8f8f',
			borderColor: '#8f8f8f',
			borderWidth: 5,
			fill: false
		}]
	},
	options: {
		legend: {
			display: false
		},
		scales: {
			yAxes: [{
				ticks: {
					beginAtZero: true
				},
				display: false,
			}],
			xAxes: [{
				borderDash: [5, 5],
				color: '#183',
				// weight: 5,
			}]
		}
	}
});
