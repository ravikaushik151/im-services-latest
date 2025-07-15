'use client';

import { useEffect } from 'react';

export default function BootstrapClient() {
  useEffect(() => {
    // Dynamically import bootstrap JS only in the browser
    import('bootstrap/dist/js/bootstrap.bundle.min.js')
      .then(() => {
        // Bootstrap JS loaded successfully
        console.log('Bootstrap JS loaded on client');
      })
      .catch((err) => {
        console.error('Failed to load Bootstrap JS', err);
      });
  }, []);

  return null; // No UI rendered
}
