// Simulate data loading for metrics
document.addEventListener("DOMContentLoaded", function () {
    // Simulate data for Total Scrapes and Active Threads
    setTimeout(function () {
        document.querySelector(".metric-box:nth-child(1) p:last-child").textContent = "1234";
        document.querySelector(".metric-box:nth-child(3) p:last-child").textContent = "5";
    }, 2000); // Simulates data loading after 2 seconds
});

// Handle form submission for "Create Thread" section
const createThreadForm = document.querySelector('.create-thread form');

createThreadForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const niche = document.getElementById('niche').value;
    const leadListName = document.getElementById('leadListName').value;
    const leadListDescription = document.getElementById('leadListDescription').value;

    // Basic form validation (ensure required fields are not empty)
    if (!niche || !leadListName) {
        alert('Please fill out all required fields.');
        return;
    }

    // Simulate thread creation process
    alert(`Thread created successfully!\nNiche: ${niche}\nLead List Name: ${leadListName}\nDescription: ${leadListDescription}`);
    
    // Clear the form after submission
    createThreadForm.reset();
});

// Placeholder for adding dynamic rows in "Process Status" table
function addProcessStatusRow(name, status, target, progress) {
    const tableBody = document.querySelector('.process-status tbody');
    const row = document.createElement('tr');

    row.innerHTML = `
        <td>${name}</td>
        <td>${status}</td>
        <td>${target}</td>
        <td>${progress}</td>
    `;

    tableBody.appendChild(row);
}

// Example: Adding rows dynamically (You can connect this to real data)
document.addEventListener("DOMContentLoaded", function () {
    addProcessStatusRow('Lead Generation', 'In Progress', '50 Leads', '30%');
    addProcessStatusRow('Discord Scraping', 'Complete', '100 Leads', '100%');
});
