// Doughnut Chart 1
var ctx1 = document.getElementById('doughnutChart1').getContext('2d');
var doughnutChart1 = new Chart(ctx1, {
    type: 'doughnut',
    data: {
        labels: ['Red', 'Blue', 'Yellow'],
        datasets: [{
            label: 'First Dataset',
            data: [15, 25, 10],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            }
        }
    }
});

// Doughnut Chart 2
var ctx2 = document.getElementById('doughnutChart2').getContext('2d');
var doughnutChart2 = new Chart(ctx2, {
    type: 'doughnut',
    data: {
        labels: ['Green', 'Purple', 'Orange'],
        datasets: [{
            label: 'Second Dataset',
            data: [20, 10, 30],
            backgroundColor: [
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            }
        }
    }
});