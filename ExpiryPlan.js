let recentRecharges = [
    { userId: "001", amount: "₹100",  date: "2023-10-20", mobileNumber: "1234567890" },
    { userId: "002", amount: "₹200", date: "2023-10-19", mobileNumber: "9876543210" },
    { userId: "003", amount: "₹150", date: "2023-10-18", mobileNumber: "5555555555" },
];

// Load Data In Expiry Table
function updateRechargeTable(filteredRecharges = recentRecharges) {
    const tableBody = document.getElementById("rechargeTableBody");
    if (!tableBody) {
        console.error("Table body element not found.");
        return;
    }

    tableBody.innerHTML = "";

    filteredRecharges.forEach(recharge => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${recharge.userId}</td>
            <td>${recharge.amount}</td>
            <td>${recharge.date}</td>
            <td>${recharge.mobileNumber}</td>
        `;
        tableBody.appendChild(row);
    });
}


// Filter Based On Mobile Number
function filterRechargesByMobileNumber(mobileNumber) {
    return recentRecharges.filter(recharge => 
        recharge.mobileNumber.includes(mobileNumber)
    );
}

document.getElementById("searchInput").addEventListener("input", (event) => {
    const searchTerm = event.target.value.trim();
    const filteredRecharges = searchTerm ? filterRechargesByMobileNumber(searchTerm) : recentRecharges;
    updateRechargeTable(filteredRecharges);
});

document.addEventListener("DOMContentLoaded", () => updateRechargeTable());