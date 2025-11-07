function statusToTypes(status) {
    switch (status || '') {
        case 'CANCELLED': return {
            label: '<span class="cancelled-label">CANCELLED</span>',
            class: 'class="cancelled"',
            eventCardClass: ' cancelled'
        };
        case 'INACTIVE': return {
            label: '<span class="cancelled-label">INACTIVE</span>',
            class: 'class="cancelled"',
            eventCardClass: ' cancelled'
        };
        default: return {
            label: '',
            class: '',
            eventCardClass: ''
        };
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('events-container');
    const dateFilter = document.getElementById('dateFilter');
    const clearFilterButton = document.getElementById('clearFilter');
    const filterTodayButton = document.getElementById('filterToday');
    const toggleViewButton = document.getElementById('toggleView');
    let isTableView = false;
    const mapViewButton = document.getElementById('toggleMapView');
    const mapContainer = document.getElementById('map-view');
    let map = null;
    let isMapView = false;
    
    if (typeof eventsData === 'undefined' || eventsData.length === 0) {
        container.innerHTML = '<p>No event data available.</p>';
        return;
    }

    function initMap() {
        if (map) return;
        
        // Center on Derby with higher zoom level (14 instead of 13)
        map = L.map('map-view', {
            center: [52.9225301, -1.4746186],
            zoom: 14,
            maxZoom: 19,
            scrollWheelZoom: true
        });
        
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© OpenStreetMap contributors',
            maxZoom: 19
        }).addTo(map);
    }

    function updateMapMarkers(events) {
        if (!map) return;
        
        map.eachLayer((layer) => {
            if (layer instanceof L.Marker) {
                map.removeLayer(layer);
            }
        });

        // Get today's date for filtering
        const today = new Date().toISOString().split('T')[0];
        
        // Sort events by date and filter future events
        const sortedEvents = events
            .filter(event => event.date >= today)
            .sort((a, b) => new Date(a.date) - new Date(b.date));

        const unique = new Map();
        sortedEvents.forEach(event => {
            const venueName = event.name;
            if (!unique.has(venueName) && event.location?.lat && event.location?.lng) {
                unique.set(venueName, event);
            }
        });

        unique.forEach(event => {
            const lat = Number(parseFloat(event.location.lat).toFixed(7));
            const lng = Number(parseFloat(event.location.lng).toFixed(7));

            const marker = L.marker([lat, lng])
                .addTo(map);
            
            const formattedDate = formatDate(event.date);
            const formattedTime = formatTime(event.date, event.startTime);
            const status = statusToTypes(event.status);
            
            marker.bindPopup(`
                <div class="map-marker-popup">
                    ${status.label}
                    <h3>${event.name}</h3>
                    <p><strong>Date:</strong> ${formattedDate}</p>
                    <p><strong>Time:</strong> ${formattedTime}</p>
                    ${event.location.address ? `<p>${event.location.address}</p>` : ''}
                </div>
            `);

            if (status.class) {
                const popupElement = marker.getPopup();
                popupElement.options.className = status.class.replace('class="', '').replace('"', '');
            }
        });
    }

    mapViewButton.addEventListener('click', () => {
        isMapView = !isMapView;
        mapViewButton.textContent = isMapView ? 'Hide Map View' : 'Show Map View';
        
        if (isMapView) {
            mapContainer.style.display = 'block';
            initMap();
            updateMapMarkers(eventsData);
            map.invalidateSize();
        } else {
            mapContainer.style.display = 'none';
        }
    });


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

            const cancelledClass = statusToTypes(event.status)?.class
            const cancelledLabel = statusToTypes(event.status)?.label

            tableHTML += `
                <tr ${cancelledClass}>
                    <td>${cancelledLabel}${event.name}</td>
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
            eventCard.className = `event-card${statusToTypes(event.status)?.eventCardClass || ''}`;

            const formattedDate = formatDate(event.date);
            const formattedStartTime = formatTime(event.date, event.startTime);
            const formattedEndTime = event.endTime ? formatTime(event.date, event.endTime) : 'TBD';
            
            const timeDisplay = event.endTime && formattedEndTime !== 'TBD'
                ? `${formattedStartTime} - ${formattedEndTime}`
                : formattedStartTime;

            let cardContent = '';

            cardContent += statusToTypes(event.status)?.label;

            cardContent += `
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
        if (isMapView && map) {
            updateMapMarkers(filteredEvents);
        }
    };

    dateFilter.value = '';
    
    filterEvents(); 

    dateFilter.addEventListener('change', filterEvents);

    clearFilterButton.addEventListener('click', () => {
        dateFilter.value = '';
        filterEvents();
    });

    filterTodayButton.addEventListener('click', () => {
        const today = new Date().toISOString().split('T')[0];
        dateFilter.value = today;
        filterEvents();
    });

    toggleViewButton.addEventListener('click', () => {
        isTableView = !isTableView;
        toggleViewButton.textContent = isTableView ? 'Switch to Card View' : 'Switch to Table View';
        filterEvents();
    });
});
