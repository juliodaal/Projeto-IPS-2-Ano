function ChartCanvas(max,min,step,nameChart) {
    this.max = max;
    this.min = min;
    this.step = step;
    this.nameChart = nameChart;
}

ChartCanvas.prototype.renderChartCanvas = function() {
this.ctx = document.getElementById(this.nameChart).getContext('2d');
this.MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

this.config = {
    type: 'line',
    data: {
        labels: [],
        datasets: [{
            label: 'Number Task',
            backgroundColor: [
                'rgba(153, 102, 255, 0.2)'
            ],
            borderColor: [
                'rgba(153, 102, 255, 1)'
            ],
            data: [],
            fill: false,
        }]
    },
    options: {
        responsive: true,
        title: {
            display: true,
            text: 'Task Done'
        },
        tooltips: {
            mode: 'index',
            intersect: false,
        },
        hover: {
            mode: 'nearest',
            intersect: true
        },
        scales: {
            xAxes: [{
                display: true,
                scaleLabel: {
                    display: true,
                    labelString: 'Month'
                }
            }],
            yAxes: [{
                display: true,
                scaleLabel: {
                    display: true,
                    labelString: 'Value'
                },
                ticks: {
                    min: this.min,
                    max: this.max,

                    // forces step size to be 5 units
                    stepSize: this.step
                }
            }]
        }
    }
};

    this.myChart = new Chart(this.ctx, this.config);
}

ChartCanvas.prototype.addData = function(number,month) {
        this.config.data.labels.push(month);

        this.config.data.datasets.forEach(function(dataset) {
            dataset.data.push(number);
        });

        this.myChart.update();
}

export { ChartCanvas }