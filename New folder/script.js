document.addEventListener("DOMContentLoaded", function() {
function updateHistoryTable() {
  const tableBody = document.getElementById('historyTable');
  tableBody.innerHTML = '';

  rechargeHistory.forEach(entry => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${entry.userId}</td>
      <td>${entry.amount}</td>
      <td>${entry.operator}</td>
      <td>${entry.date}</td>
      <td>${entry.status}</td>
    `;
    tableBody.appendChild(row);
  });
}


// Update Dashboard Cards
let users = [
    { id: 1, name: "User 1", rechargeExpiry: "2025-02-20" },
    { id: 2, name: "User 2", rechargeExpiry: "2023-11-15" },
    { id: 3, name: "User 3", rechargeExpiry: "2023-10-28" },
    { id: 4, name: "User 4", rechargeExpiry: "2023-12-01" },
  ];
  
    function updateDashboardCards() {
    const today = new Date();
    today.setHours(0, 0, 0, 0); 

    const threeDaysFromNow = new Date(today);
    threeDaysFromNow.setDate(today.getDate() + 3); 
    const oneMonthFromNow = new Date(today);
    oneMonthFromNow.setMonth(today.getMonth() + 1);
    let expiringSoonCount = 0;
    let expiringInMonthCount = 0;

    users.forEach(user => {
        const expiryDate = new Date(user.rechargeExpiry);
        expiryDate.setHours(0, 0, 0, 0);

        if (expiryDate >= today && expiryDate <= threeDaysFromNow) {
            expiringSoonCount++;
        }
        if (expiryDate >= today && expiryDate <= oneMonthFromNow) {
            expiringInMonthCount++;
        }
    });

    document.getElementById('expiringSoonCount').textContent = expiringSoonCount;
    document.getElementById('expiringInMonthCount').textContent = expiringInMonthCount;
    document.getElementById('totalUsersCount').textContent = users.length;
}

updateDashboardCards();


//Canvas / Chart
var ctx = document.getElementById('myChart').getContext('2d');

var data = {
  labels: ["January", "February", "March", "April", "May"],
  datasets: [{
    label: "Recharge",
    data: [50, 100, 75, 125, 150],
    backgroundColor: "rgba(121, 242, 135, 0.2)",
    borderColor: "rgba(75, 192, 192, 1)",
    borderWidth: 2
  }]
};

var myChart = new Chart(ctx, {
  type: "pie",
  data: data,
  options: {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: { beginAtZero: true }
    }
  }
});



  
  
});


