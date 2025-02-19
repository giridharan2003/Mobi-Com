
document.addEventListener("DOMContentLoaded", function () {
    const historyContainer = document.getElementById("history-container");

    const historyData = [
        { title: "Recharge #1", details: "₹299 plan - 1.5GB/day, 28 days", date: "2024-10-26T10:00:00Z" },
        { title: "Recharge #2", details: "₹199 plan - 1GB/day, 14 days", date: "2024-10-25T15:30:00Z" }
    ];

    historyContainer.innerHTML = "";

    if (historyData.length === 0) {
        historyContainer.innerHTML = `<p>No recharge history available.</p>`;
    } else {
        historyData.forEach(item => {
            const card = document.createElement("article");
            card.classList.add("history-card");

            const date = new Date(item.date);
            const formattedDate = date.toLocaleString();

            card.innerHTML = `<h3>${item.title}</h3><p>${item.details}</p><p class="date">${formattedDate}</p>`;
            historyContainer.appendChild(card);
        });
    }
});