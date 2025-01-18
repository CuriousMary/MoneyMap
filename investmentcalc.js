function createChart(barLabels, barValues) {
    return new Chart("myBar", {
      type: "bar",
      data: {
        labels: barLabels,
        datasets: [{
          backgroundColor: "rgb(0, 150, 35)",
          data: barValues
        }]
      },
      options: {
        legend: { display: false },
        scales: {
          yAxes: [{
            ticks: { beginAtZero: true }
          }]
        }
      }
    });
  }

  var barValues = [0];
  var barLabels = ["0"];
  var myChart = createChart(barLabels, barValues);

  document.getElementById("calculateBtn").addEventListener("click", function () {
    var amount = Number(document.getElementById("amount").value);
    var years = Number(document.getElementById("years").value);
    var weeklyContributions = Number(document.getElementById("weeklyContributions").value);
    var interestRate = Number(document.getElementById("interest").value);

    var annualContributions = weeklyContributions * 52;
    var totalInvestment = amount;

    barValues = [0];
    barLabels = ["0"];

    for (var i = 1; i <= years; i++) {
      var interest = (totalInvestment + annualContributions) * (interestRate / 100);
      totalInvestment += annualContributions + interest;
      barValues.push(totalInvestment.toFixed(2));
      barLabels.push(i.toString());
    }

    myChart.destroy(); // Destroy the old chart
    myChart = createChart(barLabels, barValues); // Create a new chart with the updated values
    // Display the result in the new card
    var result = "<h3>£" + totalInvestment.toFixed(2) + "</h3>";
    document.getElementById("investmentResult").innerHTML = result;
  });