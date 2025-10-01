import { defineConfig } from 'vite';

export default defineConfig({
  preview: {
    port: 10000,
    host: true,
    allowedHosts: [
      'navigate-iq-college.onrender.com',
      'navigate-jr-college.onrender.com'
    ]
  }
});
