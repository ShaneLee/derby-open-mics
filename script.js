document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('events-container');

    if (typeof eventsData === 'undefined' || eventsData.length === 0) {
        container.innerHTML = '<p>No event data available.</p>';
        return;
    }

    container.innerHTML = '';

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

    eventsData.forEach(event => {
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
});
