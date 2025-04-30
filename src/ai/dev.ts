
import {googleAI} from '@genkit-ai/googleai';
import {configureGenkit} from 'genkit';

// Removed import * as flows from './flows'; as there are no flows left.

export default configureGenkit({
  plugins: [
    googleAI(), // Or configure with your API key: googleAI({apiKey: process.env.GOOGLE_API_KEY})
  ],
  // Removed flows: [...Object.values(flows)], as flows is empty
  flowStateStore: 'firebase', // Configure Genkit state store as needed
  traceStore: 'firebase', // Configure Genkit trace store as needed
  // Enable CORS for all origins during development
  // Allow requests from the Next.js development server (port 9002 by default)
  cors: {
    origin: ['http://localhost:9002', 'http://127.0.0.1:9002'], // Add other origins if needed
    methods: 'GET,POST,OPTIONS',
    credentials: true,
    allowedHeaders: 'Content-Type,Authorization,X-Requested-With',
  },
  logLevel: 'debug',
  enableTracingAndMetrics: true,
});
