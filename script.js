document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('events-container');
    const dateFilter = document.getElementById('dateFilter');
    const clearFilterButton = document.getElementById('clearFilter');
    const toggleViewButton = document.getElementById('toggleView');
    let isTableView = false;

    if (typeof eventsData === 'undefined' || eventsData.length === 0) {
        container.innerHTML = '<p>No event data available.</p>';
        return;
    }

    const formatDate = (dateString) => {
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString + 'T00:00:00').toLocaleDateString('en-US', options);
    };

    const formatTime = (dateString, timeString) => {
        if (!timeString || timeString === '00:00:00') return 'TBD';

        const dateTimeString = `${dateString}T${timeString}`;
        const dateObj = new Date(dateTimeString);

        if (isNaN(dateObj)) return 'TBD';
        
        const options = {
            hour: 'numeric',
            minute: '2-digit',
        };
        
        return dateObj.toLocaleTimeString('en-US', options);
    };

    const renderEvents = (data, viewMode) => {
        container.innerHTML = '';
        const eventsToRender = data.slice();

        if (eventsToRender.length === 0) {
            container.innerHTML = '<p>No events found for the selected date.</p>';
            return;
        }

        if (viewMode === 'table') {
            container.classList.add('table-view');
            
            const table = document.createElement('table');
            let tableHTML = `
                <thead>
                    <tr>
                        <th>Event</th>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Notes</th>
                    </tr>
                </thead>
                <tbody>
            `;

            eventsToRender.forEach(event => {
                const formattedDate = formatDate(event.date);
                const formattedStartTime = formatTime(event.date, event.startTime);
                const formattedEndTime = event.endTime ? formatTime(event.date, event.endTime) : 'TBD';
                
                const timeDisplay = event.endTime && formattedEndTime !== 'TBD'
                    ? `${formattedStartTime} - ${formattedEndTime}`
                    : formattedStartTime;

                const noteText = event.notes
                    ? (event.notes.startsWith('http') 
                        ? `<a href="${event.notes}" target="_blank">More Info</a>`
                        : event.notes)
                    : '';

                tableHTML += `
                    <tr>
                        <td>${event.name}</td>
                        <td>${formattedDate}</td>
                        <td>${timeDisplay}</td>
                        <td>${noteText}</td>
                    </tr>
                `;
            });

            tableHTML += '</tbody>';
            table.innerHTML = tableHTML;
            container.appendChild(table);

        } else {
            container.classList.remove('table-view');

            eventsToRender.forEach(event => {
                const eventCard = document.createElement('div');
                eventCard.className = 'event-card';

                const formattedDate = formatDate(event.date);
                
                const formattedStartTime = formatTime(event.date, event.startTime);
                const formattedEndTime = event.endTime ? formatTime(event.date, event.endTime) : 'TBD';
                
                const timeDisplay = event.endTime && formattedEndTime !== 'TBD'
                    ? `${formattedStartTime} - ${formattedEndTime}`
                    : formattedStartTime;

                let cardContent = `
                    <h2>${event.name}</h2>
                    <p><strong>Date:</strong> ${formattedDate}</p>
                    <p><strong>Time:</strong> ${timeDisplay}</p>
                `;

                if (event.notes) {
                    const noteText = event.notes.startsWith('http') 
                        ? `<a href="${event.notes}" target="_blank">More Info</a>`
                        : event.notes;
                    
                    cardContent += `<div class="notes"><strong>Notes:</strong> ${noteText}</div>`;
                }

                eventCard.innerHTML = cardContent;
                container.appendChild(eventCard);
            });
        }
    };
    
    const filterEvents = () => {
        const filterDate = dateFilter.value;
        let filteredEvents = eventsData;

        if (filterDate) {
            filteredEvents = eventsData.filter(event => event.date === filterDate);
        } else {
             const today = new Date().toISOString().split('T')[0];
             filteredEvents = eventsData.filter(event => event.date >= today);
        }

        renderEvents(filteredEvents, isTableView ? 'table' : 'card');
    };

    dateFilter.value = '';
    
    filterEvents(); 

    dateFilter.addEventListener('change', filterEvents);

    clearFilterButton.addEventListener('click', () => {
        dateFilter.value = '';
        filterEvents();
    });

    toggleViewButton.addEventListener('click', () => {
        isTableView = !isTableView;
        toggleViewButton.textContent = isTableView ? 'Switch to Card View' : 'Switch to Table View';
        filterEvents();
    });
});
