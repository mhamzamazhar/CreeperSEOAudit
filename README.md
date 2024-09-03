# Web Vitals Tracking Script

This repository provides a JavaScript script to measure and track [Core Web Vitals](https://web.dev/vitals/) metrics. The script sends the metrics data to a specified Python server endpoint and optionally logs events to Google Analytics 4 (GA4).

## Features

- **Core Web Vitals Measurement:** Tracks important performance metrics such as CLS, FCP, INP, LCP, and TTFB.
- **Data Reporting:** Sends the measured data to a specified server endpoint.
- **Debug Mode:** Logs metrics data to the console instead of sending it to the server when `serverId` is set to `'DEBUG'`.
- **Google Analytics 4 Integration:** Optionally sends metrics data to GA4.

## Installation

1. Include the script in your HTML file:

    ```html
    <script type="module" src="path/to/your/script.js"></script>
    ```

2. Initialize the tracking in your HTML file:

    ```html
    <script>
        document.addEventListener('DOMContentLoaded', () => {
            initializeWebVitalsTracking('your_server_id', true);
        });
    </script>
    ```

## Usage

### Parameters

- **`serverId`**: The ID used to construct the URL for your server endpoint. If set to `'DEBUG'`, the script will log data to the console instead of sending it to the server.
- **`gatag`**: A boolean that determines whether the data should also be sent to GA4.

### Example

```javascript
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
