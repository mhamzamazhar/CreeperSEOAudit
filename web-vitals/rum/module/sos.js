import {onCLS, onFCP, onINP, onLCP, onTTFB} from 'https://unpkg.com/web-vitals@4?module';

function initializeWebVitalsTracking(serverId, gatag) {
    // Check if serverId is empty or false, and if so, do not execute the code
    if (!serverId) {
        console.warn('Server ID is not provided. Web Vitals tracking will not be initialized.');
        return;
    }

    // Construct the URL of your Python server endpoint with the given serverId
    const serverUrl = `https://app.creeperseoaudit.com/cvw-metrics?id=${encodeURIComponent(serverId)}`;

    // Define a function to send metrics to the Python server and GA4
    function sendMetricToServer(metric) {
        const data = JSON.stringify({
            name: metric.name,
            value: metric.value,
            rating: metric.rating,
            delta: metric.delta,
            id: metric.id,
            entries: metric.entries,
            category: 'Web Vitals'
        });

        // If serverId is 'DEBUG', log the data instead of sending it
        if (serverId === 'DEBUG') {
            console.log('Debug mode enabled. Metric data:', data);
        } else {
            // Send data to the server
            if (!navigator.sendBeacon(serverUrl, data)) {
                fetch(serverUrl, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: data
                }).catch(error => console.error('Fetch send failed:', error));
            }
        }

        // Send data to GA4
        if (gatag === true) {
        	gtag('event', metric.name, {  
            		metric_value: metric.value,
            		metric_rating: metric.rating,
            		metric_delta: metric.delta,
            		metric_id: metric.id
        	});
        }
    }

    // Measure and send Core Web Vitals metrics
    onCLS(sendMetricToServer);
    onFCP(sendMetricToServer);
    onINP(sendMetricToServer);
    onLCP(sendMetricToServer);
    onTTFB(sendMetricToServer);
}
