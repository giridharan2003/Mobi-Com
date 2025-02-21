import { plans } from "./plans.js";

document.addEventListener("DOMContentLoaded", function () {
    const planTabs = document.getElementById("planTabs");
    const allPlansContainer = document.getElementById("plan-content");

    function loadPlans(category) {
        if (!allPlansContainer) return;
    
        allPlansContainer.innerHTML = `
            
            <input type="number" id="searchInput" class="form-control mb-3" placeholder="Enter amount to filter" min="0">
            <div id="plansList" class="row"></div>
        `;
    
        plans[category].forEach(plan => {
            let cardTagHTML = "";
        
            if (plan.fun) {
                if (plan.fun === "Most Popular"){
                    cardTagHTML = `<span class="card-tag most-popular">${plan.fun}</span>`;
                }else{
                    cardTagHTML = `<span class="card-tag budget">${plan.fun}</span>`;
                }
            }

            allPlansContainer.innerHTML += `
                <div class="col-lg-4 col-md-6 col-sm-12 mb-4">
                    <div class="card shadow-sm h-100 position-relative">
                        ${cardTagHTML}  <div class="card-body text-center">
                            <h5 class="card-title">${plan.title}</h5>
                            <p class="card-text">${plan.description}</p>
                            <button class="btn btn-dark details-btn" data-title="${plan.title}" data-details="${plan.details}">View Details</button>
                        </div>
                    </div>
                </div>`;
        });
    }
    
    loadPlans("Popular Plans");

    if (planTabs) {
        const tabs = planTabs.querySelectorAll('.nav-link');
        tabs.forEach(tab => {
            tab.addEventListener("click", function (event) {
                event.preventDefault();
                tabs.forEach(t => t.classList.remove("active"));
                this.classList.add("active");

                const category = this.getAttribute("data-category");
                loadPlans(category);
            });
        });
    }
});

document.body.addEventListener("click", function (event) {
    if (event.target.classList.contains("details-btn")) {
        const modal = document.getElementById("exampleModal");
        if (!modal) return;

        const title = event.target.dataset.title;
        const description = event.target.dataset.description;
        const details = event.target.dataset.details;

        document.getElementById("modalTitle").textContent = title;
        document.getElementById("modalBody").innerHTML = `<strong>Description:</strong> ${description}<br><br><strong>Details:</strong> ${details}`;

        const proceedButton = document.querySelector(".modal-footer .btn-primary");
        proceedButton.addEventListener("click", function () {
            localStorage.setItem("planTitle", title);
            localStorage.setItem("planDescription", description);
            localStorage.setItem("planDetails", details);
        });

        new bootstrap.Modal(modal).show();
    }
});
