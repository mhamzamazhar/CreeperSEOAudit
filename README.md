# Creeper SOS Web Vitals Tracking Script

This repository provides a JavaScript script to measure and track [Core Web Vitals](https://web.dev/vitals/) metrics. The script sends the metrics data to a specified Python server endpoint and optionally logs events to Google Analytics 4 (GA4).

## Features

- **Core Web Vitals Measurement:** Tracks important performance metrics such as CLS, FCP, INP, LCP, and TTFB.
- **Data Reporting:** Sends the measured data to a specified server endpoint.
- **Debug Mode:** Logs metrics data to the console instead of sending it to the server when `serverId` is set to `'DEBUG'`.
- **Google Analytics 4 Integration:** Optionally sends metrics data to GA4.
- **Google Tag Manager Integration:** Optionally sends metrics data to GTM.

## Installation

1. Include the script in your HTML file:

    ```html
    <script src="https://cdn.jsdelivr.net/gh/mhamzamazhar/CreeperSOS@main/web-vitals/build/bundle-1.1.0.js"></script>
    ```

2. Initialize the tracking in your HTML file:

    ```html
    <script>
        //initializeWebVitalsTracking('your_project_id', gatag, gtmtag);

        //To send data to GTM for processing
        initializeWebVitalsTracking('DEBUG', false, true);

        //To send data to GA4 for processing
        //initializeWebVitalsTracking('DEBUG', true, false);

        // Use GTM boolean in combination with your project_id to send data simultaneously to GTM and Creeper SOS.
    </script>
    ```

## Usage

### Parameters

- **`serverId`**: The ID used to construct the URL for your server endpoint. If set to `'DEBUG'`, the script will log data to the console instead of sending it to the server.
- **`gatag`**: A boolean that determines whether the data should also be sent to GA4.
- **`gtmtag`**: A boolean that determines whether the data should also be sent to GTM.
