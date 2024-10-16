document.addEventListener('DOMContentLoaded', () => {
    const processStatusTableBody = document.querySelector('.process-status tbody');
    const scrapedProfiles = document.getElementById('scraped-profiles');
    const totalScrapes = document.getElementById('total-scrapes');
    const totalThreads = document.getElementById('total-threads');
    const activeThreads = document.getElementById('active-threads');
    const createThreadForm = document.getElementById('create-thread-form');

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

    function updateMetrics() {
        totalScrapes.textContent = scrapedData.totalScrapes;
        totalThreads.textContent = scrapedData.totalThreads;
        activeThreads.textContent = scrapedData.activeThreads;
        scrapedProfiles.textContent = scrapedData.profilesScraped;
    }

    function populateProcessStatusTable() {
        processStatusTableBody.innerHTML = '';
        threads.forEach(thread => {
            const row = document.createElement('tr');
            ['name', 'status', 'target', 'progress'].forEach(key => {
                const cell = document.createElement('td');
                cell.textContent = thread[key];
                row.appendChild(cell);
            });
            processStatusTableBody.appendChild(row);
        });
    }

    function handleFormSubmit(event) {
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

            threads.push(newThread);
            scrapedData.totalThreads++;
            scrapedData.activeThreads++;
            updateMetrics();
            populateProcessStatusTable();
        } else {
            alert('Please fill in the required fields.');
        }
    }

    updateMetrics();
    populateProcessStatusTable();
    createThreadForm.addEventListener('submit', handleFormSubmit);
});
