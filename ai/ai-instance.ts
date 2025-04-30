'use server';
/**
 * @fileOverview Exports the Genkit AI instance configured for Next.js.
 * This instance is primarily used for integrating Genkit with Next.js features
 * like API routes or server actions if needed, but core Genkit functionalities
 * like defineFlow and definePrompt should be imported directly from 'genkit'.
 */
import genkitNextPlugin, { type GenkitPluginArgs } from '@genkit-ai/next';

// This exports the Next.js plugin instance.
// For defining flows or prompts, import `defineFlow` and `definePrompt` from 'genkit'.
export const ai = genkitNextPlugin({
  config: {
    // Path to the Genkit config file. This is relative to the root of the project.
    // By default, it looks for `genkit.config.js`.
    // configFile: 'genkit.config.ts',
  },
} as GenkitPluginArgs);
