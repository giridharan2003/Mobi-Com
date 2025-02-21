import { plans } from "./plans.js";

document.addEventListener("DOMContentLoaded", function () {
    function loadPlans(category, containerId) {
        const container = document.getElementById(containerId);
        if (!container) return;

        plans[category].slice(0, 3).forEach(plan => {

            let cardTagHTML = "";
        
            if (plan.fun) {
                if (plan.fun === "Most Popular"){
                    cardTagHTML = `<span class="card-tag most-popular">${plan.fun}</span>`;
                }else{
                    cardTagHTML = `<span class="card-tag budget">${plan.fun}</span>`;
                }
            }

            container.innerHTML += `
                <div class="col-lg-3 col-md-5 col-sm-5 mb-4">
                    <div class="card shadow-sm h-100">
                    ${cardTagHTML} 
                    <div class="card-body text-center mt-4">
                            <h5 class="card-title">${plan.title}</h5>
                            <p class="card-text">${plan.description}</p>
                            <button class="btn btn-dark details-btn" data-title="${plan.title}" data-details="${plan.details}" data-description="${plan.description}">View Details</button>
                        </div>
                    </div>
                </div>`
                ;
        });

        container.innerHTML += 
        `<div class="col-sm-1 p-4 w-10">
            <div class="viewallcontainer">
                <a href="RechargePlan.html" class="viewall btn rounded-circle">&gt;</a>
            </div>
        </div>`;
    }

    loadPlans("Popular Plans", "popular-plans");
    loadPlans("Data Plans", "data-plans");  
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
