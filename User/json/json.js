function fetchData() {
    fetch("http://localhost:3000/plans")
      .then((response) => {
        if (!response.ok) { throw new Error("Network response was not ok"); }
        return response.json();
      })

      .then((data) => {
        let tableBody = document.querySelector("#dataTable tbody");
        tableBody.innerHTML = "";

        let datas = JSON.parse(data);
        // const plans = datas.plans;

       
        for (const category of plans) {
        for (const planType in category) {
        console.log(`Category: ${planType}`); 
        const individualPlans = category[planType];

        for (const plan of individualPlans) {
        console.log(`  Plan: ${plan.title}`); 
        console.log(`    Description: ${plan.description}`); 
        console.log(`    Details: ${plan.details}`); 
        console.log(`    Fun: ${plan.fun}`); 
        console.log("---"); 
        }
    }
}

    })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
}