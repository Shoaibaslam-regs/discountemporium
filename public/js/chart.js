async function loadCharts() {
  const [visitsRes, redirectsRes] = await Promise.all([
    fetch("/api/stats/user-visits"),
    fetch("/api/stats/redirects")
  ]);

  const visits = await visitsRes.json();
  const redirects = await redirectsRes.json();

  const visitsLabels = visits.map(v => v._id);
  const visitsData = visits.map(v => v.count);

  const redirectsLabels = redirects.map(r => r._id);
  const redirectsData = redirects.map(r => r.count);
 
  const visitColors = visitsData.map(() => 'rgba(255, 159, 64, 0.7)');
  const redirectColors = redirectsData.map(() => 'rgba(54, 162, 235, 0.7)');

  
  new Chart(document.getElementById("userVisitsChart"), {
    type: "pie", 
    data: {
      labels: visitsLabels,
      datasets: [{
        label: "Users Visiting the Site",
        data: visitsData,
        backgroundColor: visitColors,
        borderColor: 'rgba(255, 159, 64, 1)',
        borderWidth: 2,
        borderRadius: 6
      }]
    },
    options: {
      responsive: true,     
      aspectRatio: 2,  
      plugins: {
        legend: { display: true, position: 'top' },
        title: { display: true, text: 'Daily User Visits', font: { size: 18 } }
      },
      scales: {
        y: { beginAtZero: true },
        x: { grid: { display: false } }
      }
    }
  });
 
  new Chart(document.getElementById("redirectsChart"), {
    type: "line",  
    data: {
      labels: redirectsLabels,
      datasets: [{
        label: "Redirect Button Clicks",
        data: redirectsData,
        borderColor: 'rgba(54, 162, 235, 1)',
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        tension: 0.4,
        fill: true,
        pointRadius: 5,
        pointHoverRadius: 7
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: { display: true, position: 'top' },
        title: { display: true, text: 'Daily Redirect ', font: { size: 18 } }
      },
      scales: {
        y: { beginAtZero: true },
        x: { grid: { display: false } }
      }
    }
  });
}
 
loadCharts();