const ctx = document.getElementById('areaChart').getContext('2d');

const areaChart = new Chart(ctx, {
    type: 'line', // Area chart using line type
    data: {
        labels: Array.from({ length: 10 }, (_, i) => i + 1), // Days of the month (1-31)
        datasets: [{
            label: 'Daily Values',
            data: [12, 19, 3, 5, 2, 3, 15, 10, 6, 8, 11, 14, 5, 7, 9, 12, 15, 13, 10, 8, 6, 4, 3, 7, 12, 18, 21, 24, 22, 16, 14], // Sample data
            fill: true, // Fill the area under the line
            backgroundColor: 'rgba(75, 192, 192, 0.2)', // Area color
            borderColor: 'rgba(75, 192, 192, 1)', // Line color
            tension: 0.4 // Smoothness of the line
        }]
    },
    options: {
        responsive: true,
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Days of the Month' // X-axis title
                }
            },
            y: {
                title: {
                    display: true,
                    text: 'Values' // Y-axis title
                },
                beginAtZero: true // Start y-axis at zero
            }
        }
    }
});


const ctx2 = document.getElementById('barChart').getContext('2d');

const barChart = new Chart(ctx2, {
    type: 'bar', // Bar chart type
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'], // X-axis labels
        datasets: [{
            label: 'Monthly Values',
            data: [12, 19, 3, 5, 2, 3, 15], // Data points
            backgroundColor: 'rgba(75, 192, 192, 0.7)', // Bar color
            borderColor: 'rgba(75, 192, 192, 1)', // Bar border color
            borderWidth: 1 // Width of the bar border
        }]
    },
    options: {
        responsive: true,
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'Months' // X-axis title
                }
            },
            y: {
                title: {
                    display: true,
                    text: 'Values' // Y-axis title
                },
                beginAtZero: true // Start y-axis at zero
            }
        }
    }
});
