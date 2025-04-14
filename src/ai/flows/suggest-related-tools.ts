'use server';
/**
 * @fileOverview An AI agent that suggests related tools based on a given tool's description and category.
 *
 * - suggestRelatedTools - A function that handles the suggestion of related tools.
 * - SuggestRelatedToolsInput - The input type for the suggestRelatedTools function.
 * - SuggestRelatedToolsOutput - The return type for the suggestRelatedTools function.
 */

import {ai} from '@/ai/ai-instance';
import {z} from 'genkit';

const SuggestRelatedToolsInputSchema = z.object({
  toolDescription: z.string().describe('The description of the current tool.'),
  toolCategory: z.string().describe('The category of the current tool.'),
  numSuggestions: z.number().default(3).describe('The number of related tools to suggest.'),
});
export type SuggestRelatedToolsInput = z.infer<typeof SuggestRelatedToolsInputSchema>;

const SuggestRelatedToolsOutputSchema = z.object({
  relatedTools: z.array(
    z.object({
      name: z.string().describe('The name of the related tool.'),
      description: z.string().describe('A short description of the related tool.'),
    })
  ).describe('An array of related tools.'),
});
export type SuggestRelatedToolsOutput = z.infer<typeof SuggestRelatedToolsOutputSchema>;

export async function suggestRelatedTools(input: SuggestRelatedToolsInput): Promise<SuggestRelatedToolsOutput> {
  return suggestRelatedToolsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'suggestRelatedToolsPrompt',
  input: {
    schema: z.object({
      toolDescription: z.string().describe('The description of the current tool.'),
      toolCategory: z.string().describe('The category of the current tool.'),
      numSuggestions: z.number().describe('The number of related tools to suggest.'),
    }),
  },
  output: {
    schema: z.object({
      relatedTools: z.array(
        z.object({
          name: z.string().describe('The name of the related tool.'),
          description: z.string().describe('A short description of the related tool.'),
        })
      ).describe('An array of related tools.'),
    }),
  },
  prompt: `You are an expert in recommending online tools. Given the following tool description and category, suggest {{{numSuggestions}}} related tools that the user might find useful.\n\nCategory: {{{toolCategory}}}\nDescription: {{{toolDescription}}}\n\nSuggest tools with a similar function or complementary features. Return only the tool name and a short description for each.  Format your answer as a JSON array.`, 
});

const suggestRelatedToolsFlow = ai.defineFlow<
  typeof SuggestRelatedToolsInputSchema,
  typeof SuggestRelatedToolsOutputSchema
>({
  name: 'suggestRelatedToolsFlow',
  inputSchema: SuggestRelatedToolsInputSchema,
  outputSchema: SuggestRelatedToolsOutputSchema,
}, async input => {
  const {output} = await prompt(input);
  return output!;
});
