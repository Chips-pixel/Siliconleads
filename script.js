document.addEventListener('DOMContentLoaded', function() {
    // Example Data (to simulate real-time scraping)
    const processStatusTableBody = document.querySelector('.process-status tbody');
    const scrapedProfiles = document.getElementById('scraped-profiles');
    const totalScrapes = document.getElementById('total-scrapes');
    const totalThreads = document.getElementById('total-threads');
    const activeThreads = document.getElementById('active-threads');

    // Simulated data for threads (You can replace this with real-time data from your backend)
    const threads = [
        { name: 'Instagram CEOs', status: 'Active', target: '50 Profiles', progress: '30%' },
        { name: 'Tech Founders Discord', status: 'Complete', target: '100 Profiles', progress: '100%' },
        { name: 'Google Tech Articles', status: 'Active', target: '70 Profiles', progress: '45%' },
    ];

    const scrapedData = {
        totalScrapes: 220,
        totalThreads: threads.length,
        activeThreads: threads.filter(thread => thread.status === 'Active').length,
        profilesScraped: 150
    };

    // Update metrics
    totalScrapes.textContent = scrapedData.totalScrapes;
    totalThreads.textContent = scrapedData.totalThreads;
    activeThreads.textContent = scrapedData.activeThreads;
    scrapedProfiles.textContent = scrapedData.profilesScraped;

    // Populate the process status table
    threads.forEach(thread => {
        const row = document.createElement('tr');

        const nameCell = document.createElement('td');
        nameCell.textContent = thread.name;
        row.appendChild(nameCell);

        const statusCell = document.createElement('td');
        statusCell.textContent = thread.status;
        row.appendChild(statusCell);

        const targetCell = document.createElement('td');
        targetCell.textContent = thread.target;
        row.appendChild(targetCell);

        const progressCell = document.createElement('td');
        progressCell.textContent = thread.progress;
        row.appendChild(progressCell);

        processStatusTableBody.appendChild(row);
    });

    // Create new thread functionality
    const createThreadForm = document.getElementById('create-thread-form');
    createThreadForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const niche = document.getElementById('niche').value;
        const leadListName = document.getElementById('leadListName').value;

        if (niche && leadListName) {
            const newThread = {
                name: leadListName,
                status: 'Active',
                target: '0 Profiles',
                progress: '0%'
            };

            // Update the process status table dynamically
            const row = document.createElement('tr');

            const nameCell = document.createElement('td');
            nameCell.textContent = newThread.name;
            row.appendChild(nameCell);

            const statusCell = document.createElement('td');
            statusCell.textContent = newThread.status;
            row.appendChild(statusCell);

            const targetCell = document.createElement('td');
            targetCell.textContent = newThread.target;
            row.appendChild(targetCell);

            const progressCell = document.createElement('td');
            progressCell.textContent = newThread.progress;
            row.appendChild(progressCell);

            processStatusTableBody.appendChild(row);

            // Update total threads count and active threads count
            scrapedData.totalThreads++;
            scrapedData.activeThreads++;

            totalThreads.textContent = scrapedData.totalThreads;
            activeThreads.textContent = scrapedData.activeThreads;
        } else {
            alert('Please fill in the required fields.');
        }
    });
});
